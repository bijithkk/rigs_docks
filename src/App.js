import React from "react";
import { Route, Routes } from "react-router-dom";
import { Box, CssBaseline, createTheme, ThemeProvider } from "@mui/material";
import "@fontsource/poppins";
import Sidebar from "./Admin/Components/Sidebar";
import AdminHeader from "./Admin/Components/AdminHeader";
import Dashboard from "./Admin/Pages/Dashboard";
import SellerPage from "./Admin/Pages/SellerPage";
import OrdersPage from "./Admin/Pages/OrdersPage";
import SellerDetails from "./Admin/Pages/SellerDetails";
const theme = createTheme({
  typography: {
    fontFamily: "Poppins, sans-serif",
    allVariants: {
      fontFamily: "Poppins, sans-serif"
    }
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          fontFamily: "Poppins, sans-serif"
        }
      }
    }
  }
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box sx={{ display: "flex" }}>
          <Sidebar />

          {/* Main content container */}
          <Box
            component="main"
            sx={{
              flexGrow: 1,
              display: "flex",
              flexDirection: "column",
              width: { xs: "100%", md: `calc(100% - 250px)` },
              ml: "auto",
              position: "relative",
            }}
          >
            {/* Make AdminHeader fixed */}
            <Box
              sx={{
                position: "sticky",
                top: 0,
                zIndex: 1100,
              }}
            >
              <AdminHeader />
            </Box>
              <Routes>
                <Route path="/"  element={<Dashboard/>}/>
                <Route path="/seller"  element={<SellerPage/>}/>
                <Route path="/sellerDetails"  element={<SellerDetails/>}/>
                <Route path="/orders"  element={<OrdersPage/>}/>
              </Routes>
          </Box>
        </Box>
    </ThemeProvider>
  );
};

export default App;
