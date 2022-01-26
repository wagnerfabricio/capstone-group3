import { ReactNode } from "react";
import { AdminProvider } from "./Admin";
import { AuthProvider } from "./Auth";
import { ProductsProvider } from "./Products";
import { ServicesProvider } from "./Services";

interface ProvidersProps {
  children: ReactNode;
}

const Providers = ({ children }: ProvidersProps) => {
  return (
    <AuthProvider>
      <AdminProvider>
        <ProductsProvider>
          <ServicesProvider>
            {children}
          </ServicesProvider>
        </ProductsProvider>
      </AdminProvider>
    </AuthProvider>
  );
};

export default Providers;
