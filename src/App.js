import "@fontsource/plus-jakarta-sans/600.css";
import "@fontsource/poppins/400.css";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/HomeComponents/Home/Home";
import Order from "./components/OrderComponents/Order/Order";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#0B5C30",
    },
    secondary: {
      main: "#3a3c4d",
    },
    text: {
      primary: "#3a3c4d",
    },
  },
  typography: {
    fontFamily: `"Plus Jakarta Sans", "Poppins", "Arial", sans-serif`,
  },
});

function App() {
  useEffect(() => {
    AOS.init({
      // easing: "ease-out-cubic",
      // offset: 50,
      disable: "mobile",
    });
  }, []);
  return (
    <div className="App">
      <CssBaseline>
        <ThemeProvider theme={theme}>
          <Router>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/order" element={<Order />} />
            </Routes>
          </Router>
        </ThemeProvider>
      </CssBaseline>
    </div>
  );
}

export default App;
