import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import { Container, Stack } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import PropTypes from "prop-types";
import * as React from "react";
import { Link } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";
import franchFlag from "../../images/franceflag.svg";
import britainFlag from "../../images/greatbritainflag.svg";
import logo from "../../images/logo.svg";
import "./HomeNavigation.css";

// navbar
function HomeNavigation(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box sx={{ mt: 2, px: 2 }}>
      {/* mobile menu  */}
      <Box sx={{ textAlign: "right", mb: 8 }}>
        <IconButton
          edge="end"
          onClick={handleDrawerToggle}
          sx={{ mr: 4, color: "#fff" }}
        >
          <CloseIcon />
        </IconButton>
      </Box>
      <nav
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 6,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Link to="/">
          <img className="logo" src={logo} alt="" />
        </Link>

        <NavHashLink smooth="true" className="nav-link" to="/home#home">
          Home
        </NavHashLink>

        <Divider />

        <NavHashLink smooth="true" className="nav-link" to="/home#values">
          Values
        </NavHashLink>
        <Divider />

        <NavHashLink smooth="true" className="nav-link" to="/home#timeline">
          How it Works
        </NavHashLink>
        <Divider />

        <NavHashLink smooth="true" className="nav-link" to="/home#contact">
          Contact Now
        </NavHashLink>
        <Divider />
        <Box sx={{ my: 2 }}>
          <Stack direction="row" spacing={2}>
            <img src={britainFlag} alt="" />
            <span style={{ color: "#fff" }}>|</span>
            <img src={franchFlag} alt="" />
          </Stack>
        </Box>
      </nav>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="" className="nav-bar" sx={{ boxShadow: 0, py: 2 }}>
        <Toolbar>
          {/* desktop menu  */}
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

              <Box
                sx={{
                  display: { xs: "none", md: "flex" },
                  justifyContent: "space-between",
                  alignItems: "center",
                  // gap: 24,
                }}
              >
                <nav
                  className="navbar"
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <NavHashLink
                    smooth="true"
                    className="nav-link"
                    to="/home#home"
                  >
                    Home
                  </NavHashLink>

                  <NavHashLink
                    smooth="true"
                    className="nav-link"
                    to="/home#values"
                  >
                    Values
                  </NavHashLink>

                  <NavHashLink
                    smooth="true"
                    className="nav-link"
                    to="/home#timeline"
                  >
                    How it Works
                  </NavHashLink>

                  <NavHashLink
                    smooth="true"
                    className="nav-link"
                    to="/home#contact"
                  >
                    Contact Now
                  </NavHashLink>
                </nav>
                <Stack direction="row" spacing={2}>
                  <img src={britainFlag} alt="" />
                  <span>|</span>
                  <img src={franchFlag} alt="" />
                </Stack>
              </Box>
            </Box>
          </Container>
          <Stack
            sx={{ display: { xs: "inherit", md: "none" } }}
            direction="row"
            spacing={2}
          >
            <img src={britainFlag} alt="" />
            <span>|</span>
            <img src={franchFlag} alt="" />
          </Stack>
          <IconButton
            edge="end"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { md: "none" }, color: "#fff" }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Box
        component="nav"
        sx={{ flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          anchor="left"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", md: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: "70%",
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

HomeNavigation.propTypes = {
  window: PropTypes.func,
};

export default HomeNavigation;
