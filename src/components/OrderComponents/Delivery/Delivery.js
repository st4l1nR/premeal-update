import CheckIcon from "@mui/icons-material/Check";
import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import invoice from "../../../images/invoice.svg";

const Delivery = () => {
  return (
    <div>
      <Container sx={{ py: 4, mb: 2, borderBottom: "1px solid #CDCEDC" }}>
        <Stack
          direction={{ xs: "column", md: "row" }}
          gap={2}
          sx={{ justifyContent: "space-between" }}
        >
          <Typography
            className="order-title"
            variant="h4"
            sx={{ fontSize: { xs: 26, md: 48 } }}
          >
            Delivery
          </Typography>
          <Button
            sx={{
              bgcolor: "#D2EFDF",
              color: "#0B5C30",
              fontWeight: "bold",
              padding: "8px 16px",
              width: "120px",
            }}
            variant="text"
            startIcon={<CheckIcon />}
          >
            STEP #5
          </Button>
        </Stack>
        <Box sx={{ flexGrow: 1, my: 4 }}>
          <Grid
            container
            spacing={{ xs: 2, md: 5, lg: 7 }}
            columns={{ xs: 2, sm: 8, md: 12 }}
          >
            <Grid item xs={2} sm={4} md={6}>
              <Box>
                <Box sx={{ bgcolor: "#0B5C30", px: 4, py: 4, borderRadius: 2 }}>
                  <Stack direction={"row"} gap={4} justifyContent="center">
                    <img src={invoice} alt="" />
                    <Box>
                      <Typography
                        sx={{ fontSize: { xs: 16, md: 20 }, color: "#fff" }}
                        variant="h6"
                      >
                        Order
                      </Typography>
                      <Typography
                        sx={{ fontSize: { xs: 20, md: 24 }, color: "#fff" }}
                        variant="body1"
                      >
                        ID : <b>#234989</b>
                      </Typography>
                    </Box>
                  </Stack>
                </Box>
                <Box sx={{ my: 4 }}>
                  <Typography
                    sx={{ fontSize: { xs: 16, md: 20 }, mb: 3 }}
                    variant="h4"
                  >
                    Where we deliver for free?
                  </Typography>
                  <Box>
                    <iframe
                      title="google map"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d359537.0372323226!2d-75.8002569!3d45.25015655000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cce05b25f5113af%3A0x8a6a51e131dd15ed!2sOttawa%2C%20ON%2C%20Canada!5e0!3m2!1sen!2sbd!4v1661253551765!5m2!1sen!2sbd"
                      width="100%"
                      height="450px"
                      style={{ border: 0 }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </Box>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={2} sm={4} md={6}>
              <form className="delivery-form">
                <label htmlFor="name">Your name</label>
                <input type="text" id="name" />
                <label htmlFor="email">Your email</label>
                <input type="email" id="email" />
                <label htmlFor="address1">Address</label>
                <textarea name="address1" id="address1" rows="4"></textarea>
                <label htmlFor="address2">Address 2</label>
                <textarea name="address2" id="address2" rows="4"></textarea>
                <label htmlFor="city">City</label>
                <select name="city" id="city">
                  <option value="">- Choose your city -</option>
                  <option value="Ottawa">Ottawa</option>
                  <option value="Toronto">Toronto</option>
                  <option value="Montreal">Montreal</option>
                  <option value="Vancouver">Vancouver</option>
                </select>
                <label htmlFor="country">Country</label>
                <select name="country" id="country">
                  <option value="">- Choose your country -</option>
                  <option value="Canada">Canada</option>
                  <option value="USA">USA</option>
                  <option value="UK">UK</option>
                  <option value="Australia">Australia</option>
                </select>
              </form>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
};

export default Delivery;
