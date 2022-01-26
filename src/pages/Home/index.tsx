import { useEffect } from "react";
import { useAdmin } from "../../providers/Admin";
import { useProducts } from "../../providers/Products";

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGVtYWlsLmNvbSIsImlhdCI6MTY0MzIyMzA3OCwiZXhwIjoxNjQzMjI2Njc4LCJzdWIiOiIxIn0.kgeuVR3ehx-8TBb1n59kaHHWXS2UiLRNo_Zg14ks5kQ"

const Home = () => {


  const { products, getProducts } = useProducts()
  const {adminServices, adminGetServices, users,adminGetUsers} = useAdmin()


  useEffect(() => {
    getProducts()
    adminGetServices(token)
    adminGetUsers(token)
  },[])


  return (
    <div>
      <h1>Home</h1>
      
      { products?.map((prod) => <li key={prod.id}>{JSON.stringify(prod)}</li>)}
<h1>Services</h1>
{ adminServices?.map((prod) => <li key={prod.id}>{JSON.stringify(prod)}</li>)}

<h1>Users</h1>
{ users?.map((prod) => <li key={prod.id}>{JSON.stringify(prod)}</li>)}

    </div>
  );
};

export default Home;
