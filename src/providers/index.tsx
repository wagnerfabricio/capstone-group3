import { createTheme, ThemeProvider } from "@mui/material";
import { ReactNode } from "react";
import { AdminProvider } from "./Admin";
import { AuthProvider } from "./Auth";
import { ProductsProvider } from "./Products";
import { ServicesProvider } from "./Services";

import teal from "@mui/material/colors/teal";
import blueGrey from "@mui/material/colors/blueGrey";

interface ProvidersProps {
  children: ReactNode;
}

const customTheme = createTheme({
  palette: {
    primary: {
      main: teal[200],
      light: teal[100],
      dark: teal[300],
    },
    secondary: {
      main: blueGrey[100],
      light: blueGrey[50],
      dark: blueGrey[200],
    },
  },
});

const Providers = ({ children }: ProvidersProps) => {
  return (
    <AuthProvider>
      <AdminProvider>
        <ProductsProvider>
          <ServicesProvider>
            <ThemeProvider theme={customTheme}>{children}</ThemeProvider>
          </ServicesProvider>
        </ProductsProvider>
      </AdminProvider>
    </AuthProvider>
  );
};

export default Providers;
