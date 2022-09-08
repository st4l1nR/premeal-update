import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div id="contact" className="contact-section">
      <Container>
        <Grid
          container
          spacing={{ xs: 2, md: 4 }}
          columns={{ xs: 2, sm: 8, md: 12 }}
        >
          <Grid item xs={2} sm={4} md={6}></Grid>
          <Grid
            data-aos="fade-left"
            data-aos-duration="2500"
            item
            xs={2}
            sm={4}
            md={6}
          >
            <Typography
              sx={{
                fontSize: { xs: 32, md: 56 },
                color: "#fff",
                textAlign: "center",
                mb: 2,
              }}
              variant="h3"
            >
              Contact <span className="coloredText">us</span>
            </Typography>
            <Typography
              sx={{ fontSize: { xs: 14, md: 16 }, color: "#fff" }}
              variant="body1"
            >
              Lan eu sagittis leo. Sed diam elit, porta quis risus vulputate,
              sollicitudin sollicitudin dolor. Phasellus feugiat tellus sit
              amet.
            </Typography>
            {/* contact form  */}
            <form className="contact-form">
              <input type="text" placeholder="Your name" />
              <input type="email" placeholder="Your email" />
              <input type="text" placeholder="Subject" />
              <textarea placeholder="Message" rows={6} />
              <Button
                // type="submit"
                variant="contained"
                endIcon={<ArrowRightAltIcon />}
                sx={{ padding: "16px 32px" }}
              >
                SEND A MESSAGE
              </Button>
            </form>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Contact;
