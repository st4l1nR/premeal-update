import { Box, Button, Container, Typography } from "@mui/material";
import React from "react";
import HomeNavigation from "../../HomeNavigation/HomeNavigation";
import "./Hero.css";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import CheckIcon from "@mui/icons-material/Check";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/order");
  };
  return (
    <div className="hero-section">
      {/* navbar  */}
      <HomeNavigation />
      {/* hero */}
      <Container id="home" sx={{ pt: 12, textAlign: "center" }}>
        <Box sx={{ width: { xs: "80%", md: "50%" }, mx: "auto" }}>
          <Button
            data-aos="fade-down"
            data-aos-duration="1000"
            sx={{
              bgcolor: "#D2EFDF",
              color: "#0B5C30",
              px: 2,
              fontSize: { xs: 14, md: 16 },
              "&:hover": {
                bgcolor: "#D2EFDF",
                color: "#0B5C30",
              },
            }}
            variant="text"
            startIcon={<CheckIcon sx={{ fontSize: { xs: 14, md: 16 } }} />}
          >
            HIGH PROTEIN
          </Button>

          <Typography
            data-aos="fade-left"
            data-aos-duration="1000"
            sx={{ fontSize: { xs: 40, md: 72 }, my: 2, color: "#fff" }}
            variant="h1"
          >
            The delicious prep meal for your choices
          </Typography>
          <Button
            data-aos="fade-up"
            data-aos-duration="1000"
            onClick={handleClick}
            sx={{ fontSize: { xs: 18, md: 20 }, px: 6, py: 2 }}
            variant="contained"
            endIcon={
              <ArrowRightAltIcon sx={{ fontSize: { xs: 18, md: 20 } }} />
            }
          >
            Order Now
          </Button>
        </Box>
      </Container>
    </div>
  );
};

export default Hero;
