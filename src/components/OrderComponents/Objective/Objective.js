import CheckIcon from "@mui/icons-material/Check";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import React from "react";
import calories from "../../../images/calories.svg";

const Objective = () => {
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
            Objective
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
            STEP #2
          </Button>
        </Stack>
        <Box
          sx={{
            bgcolor: "#0B5C30",
            mx: "auto",
            my: 3,
            px: 3,
            py: 5,
            textAlign: "center",
            borderRadius: 2,
          }}
        >
          <Typography
            sx={{ fontSize: { xs: 20, md: 24 }, color: "#fff" }}
            variant="h4"
          >
            How much Calorie you must eat per day?
          </Typography>
          <Stack
            direction={"row"}
            gap={2}
            sx={{ justifyContent: "center", my: 2 }}
          >
            <img src={calories} alt="" />
            <Box>
              <Typography
                sx={{ fontSize: { xs: 40, md: 48 }, color: "#fff", mb: 1 }}
                variant="h5"
              >
                2,100
              </Typography>
              <Typography
                sx={{ fontSize: { xs: 14, md: 16 }, color: "#fff" }}
                variant="body1"
              >
                Calories
              </Typography>
            </Box>
          </Stack>
        </Box>
      </Container>
    </div>
  );
};

export default Objective;
