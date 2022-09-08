import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Container, Stack } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import PropTypes from "prop-types";
import * as React from "react";
import { Link } from "react-router-dom";
import franchFlag from "../../../images/franceflag.svg";
import britainFlag from "../../../images/greatbritainflag.svg";
import logo from "../../../images/logo-white.svg";

// navbar
function OrderNavigation(props) {
  const { window } = props;

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="" sx={{ boxShadow: 0, py: 2, bgcolor: "#0B5C30;" }}>
        <Toolbar>
          <Container>
            <Box
              sx={{
                flexGrow: 1,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: 16,
              }}
            >
              <Link to="/">
                <img className="logo" src={logo} alt="" />
              </Link>

              <Stack direction="row" spacing={2}>
                <ShoppingCartIcon />
                <img src={britainFlag} alt="" />
                <span>|</span>
                <img src={franchFlag} alt="" />
              </Stack>
            </Box>
          </Container>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

OrderNavigation.propTypes = {
  window: PropTypes.func,
};

export default OrderNavigation;
