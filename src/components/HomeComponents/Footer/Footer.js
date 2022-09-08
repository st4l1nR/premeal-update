import { Container, Stack, Typography } from "@mui/material";
import React from "react";
import facebook from "../../../images/facebook.svg";
import instagram from "../../../images/instagram.svg";
import logo from "../../../images/logo.svg";
import twitter from "../../../images/twitter.svg";

const Footer = () => {
  return (
    <div>
      <Container sx={{ py: 4 }}>
        <Stack
          direction={{ xs: "column", md: "row" }}
          sx={{ justifyContent: "space-between", alignItems: "center" }}
          gap={2}
        >
          <img src={logo} alt="logo" />
          <Typography
            sx={{
              fontSize: { xs: 14, md: 16 },
              color: "#3A3C4D",
              display: { xs: "none", md: "inherit" },
            }}
            variant="body2"
          >
            © 2022 - All Right Reserved
          </Typography>
          <Stack direction={"row"} gap={2}>
            <img src={facebook} alt="facebook" />
            <img src={twitter} alt="twitter" />
            <img src={instagram} alt="instagram" />
          </Stack>
          <Typography
            sx={{
              fontSize: { xs: 14, md: 16 },
              color: "#3A3C4D",
              display: { xs: "inherit", md: "none" },
            }}
            variant="body2"
          >
            © 2022 - All Right Reserved
          </Typography>
        </Stack>
      </Container>
    </div>
  );
};

export default Footer;
