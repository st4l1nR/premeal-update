import { Box, Container, Grid, Paper, Stack, Typography } from "@mui/material";
import React from "react";
import caloriesIcon from "../../../images/calories-icon.svg";
import dietIcon from "../../../images/deit-icon.svg";
import deliveryIcon from "../../../images/delivery-icon.svg";
import paymentIcon from "../../../images/payment-icon.svg";
import professionalsIcon from "../../../images/professinal-icon.svg";
import setOwnMenu from "../../../images/set-your-own-menu.svg";
import tasteIcon from "../../../images/taste-icon.svg";
import quote from "../../../images/quote.svg";
import "./Values.css";

const ourValues = [
  {
    id: 1,
    title: "Delicious Taste",
    description:
      "Lan eu sagittis leo. Sed diam elit, porta quis risus vulputate, sollicitudin sollicitudin dolor. Phasellus feugiat tellus sit amet.",
    icon: tasteIcon,
  },
  {
    id: 2,
    title: "Best Choice for Diet",
    description:
      "Lan eu sagittis leo. Sed diam elit, porta quis risus vulputate, sollicitudin sollicitudin dolor. Phasellus feugiat tellus sit amet.",
    icon: dietIcon,
  },
  {
    id: 3,
    title: "Set Your Own Calories",
    description:
      "Lan eu sagittis leo. Sed diam elit, porta quis risus vulputate, sollicitudin sollicitudin dolor. Phasellus feugiat tellus sit amet.",
    icon: caloriesIcon,
  },
  {
    id: 4,
    title: "Cooked by Professionals",
    description:
      "Lan eu sagittis leo. Sed diam elit, porta quis risus vulputate, sollicitudin sollicitudin dolor. Phasellus feugiat tellus sit amet.",
    icon: professionalsIcon,
  },
  {
    id: 5,
    title: "Fast Delivery",
    description:
      "Lan eu sagittis leo. Sed diam elit, porta quis risus vulputate, sollicitudin sollicitudin dolor. Phasellus feugiat tellus sit amet.",
    icon: deliveryIcon,
  },
  {
    id: 6,
    title: "Easy to Payment",
    description:
      "Lan eu sagittis leo. Sed diam elit, porta quis risus vulputate, sollicitudin sollicitudin dolor. Phasellus feugiat tellus sit amet.",
    icon: paymentIcon,
  },
];

const Values = () => {
  return (
    <div id="values">
      <Container sx={{ py: 6 }}>
        <Typography
          data-aos="fade-left"
          data-aos-duration="1000"
          className="section-title"
          sx={{ fontSize: { xs: 32, md: 56 } }}
          variant="h3"
        >
          Our <span className="coloredText">values</span>
        </Typography>
        <Box sx={{ flexGrow: 1, my: 4 }}>
          <Grid
            container
            spacing={{ xs: 2, md: 4 }}
            columns={{ xs: 2, sm: 8, md: 12 }}
          >
            {ourValues.map((value) => (
              <Grid item xs={2} sm={4} md={4} key={value.id}>
                <Paper
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  sx={{
                    p: 2,
                    borderRadius: 2,
                    boxShadow: "0px 1px 4px -2px rgba(0,0,0,0.37)",
                  }}
                >
                  <Stack
                    direction="row"
                    sx={{
                      justifyContent: "space-between",
                      alignItems: "center",
                      mb: 2,
                    }}
                  >
                    <img src={value.icon} alt="" />
                    <Typography
                      sx={{
                        bgcolor: "#D2EFDF",
                        color: "#0B5C30",
                        py: 1,
                        px: 1.5,
                      }}
                      variant="subtitle1"
                    >
                      #{value.id}
                    </Typography>
                  </Stack>
                  <Typography
                    sx={{ fontSize: { xs: 20, md: 24 }, mb: 2 }}
                    variant="h4"
                  >
                    {value.title}
                  </Typography>
                  <Typography
                    sx={{ fontSize: { xs: 14, md: 16 } }}
                    variant="body1"
                  >
                    {value.description}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
      <Container sx={{ pt: 4, mb: 6 }}>
        <Typography
          data-aos="fade-right"
          data-aos-duration="1000"
          sx={{
            fontSize: { xs: 32, md: 56 },
            textAlign: "center",
            width: { xs: "100%", md: "70%" },
            mx: "auto",
          }}
          variant="h3"
        >
          Set your own menu and calories{" "}
          <span className="coloredText">you need</span>
        </Typography>
      </Container>
      <Box>
        <img
          data-aos="fade-up"
          data-aos-duration="1000"
          style={{ width: "100%", objectFit: "cover" }}
          src={setOwnMenu}
          alt=""
        />
      </Box>
      <Box
        data-aos="fade-up"
        data-aos-duration="2000"
        sx={{ bgcolor: "#0B5C30", py: 6 }}
      >
        <Container>
          <Grid
            container
            spacing={{ xs: 2, md: 4 }}
            columns={{ xs: 2, sm: 8, md: 12 }}
          >
            <Grid item xs={2} sm={4} md={6}>
              <img src={quote} alt="" />
              <Typography
                sx={{
                  fontSize: { xs: 20, md: 24 },
                  color: "#fff",
                  pb: 2,
                  mb: 2,
                  mt: 2,
                  borderBottom: "1px solid #307451",
                }}
                variant="h4"
              >
                Your diet is a bank account. Good food choices are good
                investments
              </Typography>
              <Typography
                sx={{ color: "rgba(255, 255, 255, 0.56)" }}
                variant="caption"
              >
                Bethenny Frankel
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </div>
  );
};

export default Values;
