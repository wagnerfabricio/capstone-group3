import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import api from "../services/api";

interface ProductsProviderProps {
  children: ReactNode;
}

interface iProduct {
  id?: number;
  userId: string;
  title: string;
  description: string;
  url: string;
  price: number;
  done: boolean;
  payed: boolean;
}

interface ProductsData {
  products: iProduct[];
  getProducts: () => Promise<void>;
  createProduct: (newProduct: iProduct, accessToken: string) => Promise<void>;
  editProduct: (
    editedProduct: iProduct,
    accessToken: string,
    userId: string
  ) => Promise<void>;
  deleteProduct: (productId: number, accessToken: string) => Promise<void>;
  searchProduct: (productTitle: string, accessToken: string) => Promise<void>;
  isProdLoading: boolean;
  productNotFound: boolean;
}

const ProductsContext = createContext<ProductsData>({} as ProductsData);

export const ProductsProvider = ({ children }: ProductsProviderProps) => {
  const [products, setProducts] = useState<iProduct[]>([]);
  const [isProdLoading, setIsProdLoading] = useState(true);
  const [productNotFound, setProductNotFound] = useState(false);

  const getProducts = useCallback(async () => {
    setIsProdLoading(true);
    api
      .get("/products")
      .then((res) => {
        setProducts(res.data);
        setIsProdLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsProdLoading(false);
      });
  }, []);

  useEffect(() => {
    getProducts();
  }, [getProducts]);

  const createProduct = useCallback(
    async (newProduct: iProduct, accessToken: string) => {
      await api
        .post(
          `/products`,
          { ...newProduct },
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        )
        .then((res) => {
          setProducts([...products, res.data]);
        })
        .catch((err) => console.log(err));
    },
    [products]
  );

  const editProduct = useCallback(
    async (editedProduct: iProduct, accessToken: string, userId: string) => {
      await api
        .patch(`/products/${editedProduct.id}`, editedProduct, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        })
        .then((resp) => {
          const filteredProducts = products.filter(
            (product) => product.id !== editedProduct.id
          );
          setProducts([...filteredProducts, editedProduct]);
        })
        .catch((err) => console.log(err));
    },
    [products]
  );

  const deleteProduct = useCallback(
    async (productId: number, accessToken: string) => {
      await api
        .delete(`/products/${productId}`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        })
        .then((_) => {
          const filteredProducts = products.filter(
            (product) => product.id !== productId
          );
          setProducts(filteredProducts);
        })
        .catch((err) => console.log(err));
    },
    [products]
  );

  const searchProduct = useCallback(
    async (productTitle: string, accessToken: string) => {
      const response = await api.get(`/products?title_like=${productTitle}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      if (!response.data.length) {
        return setProductNotFound(true);
      }

      setProductNotFound(false);
      setProducts(response.data);
    },
    []
  );

  return (
    <ProductsContext.Provider
      value={{
        products,
        getProducts,
        createProduct,
        editProduct,
        deleteProduct,
        searchProduct,
        isProdLoading,
        productNotFound,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export const useProducts = () => useContext(ProductsContext);
