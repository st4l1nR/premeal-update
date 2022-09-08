import { Box, Button, Container, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import check from "../../../images/check.svg";

const Done = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };

  return (
    <div>
      <Container sx={{ py: 6, textAlign: "center" }}>
        <img width="10%" src={check} alt="" />

        <Typography sx={{ mt: 2, mb: 1 }}>
          Payment Processed Successfully
        </Typography>
        <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
          <Box sx={{ flex: "1 1 auto" }} />
          <Button variant="contained" onClick={handleClick}>
            Return to Home
          </Button>
        </Box>
      </Container>
    </div>
  );
};

export default Done;
