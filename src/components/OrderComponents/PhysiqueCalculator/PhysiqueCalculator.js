import CheckIcon from "@mui/icons-material/Check";
import {
  Box,
  Button,
  Container,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { ReactComponent as Female } from "../../../images/female.svg";
import { ReactComponent as Male } from "../../../images/male.svg";

const PhysiqueCalculator = () => {
  const [value, setValue] = useState("Male");

  const handleChange = (e) => {
    setValue(e.target.value);
  };
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
            Physique <span className="coloredText">Calculator</span>
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
            STEP #1
          </Button>
        </Stack>
        <Box sx={{ width: { xs: "90%", md: "50%" }, mx: "auto", my: 3 }}>
          <Paper sx={{ py: 4, px: 3 }}>
            <Typography
              variant="h6"
              sx={{ fontSize: { xs: 14, md: 16 }, mb: 1 }}
            >
              I am a:
            </Typography>
            <Stack direction={"row"} gap={2}>
              <Button
                className={
                  value === "Male" ? "active-select-btn" : "select-btn"
                }
                startIcon={<Male />}
                onClick={handleChange}
                value="Male"
                // variant={value === "Male" ? "text" : "outlined"}
              >
                Male
              </Button>
              <Button
                className={
                  value === "Female" ? "active-select-btn" : "select-btn"
                }
                onClick={handleChange}
                value="Female"
                startIcon={<Female />}
              >
                Female
              </Button>
            </Stack>
            <Stack direction={"row"} gap={4} sx={{ my: 2, flexWrap: "wrap" }}>
              <Box>
                <Typography
                  variant="h6"
                  sx={{ fontSize: { xs: 14, md: 16 }, mb: 1 }}
                >
                  Height
                </Typography>
                <Stack direction={"row"} gap={1} sx={{ alignItems: "center" }}>
                  <input
                    type="number"
                    name=""
                    id=""
                    className="calculator-input"
                  />
                  <label className="calculator-label" htmlFor="">
                    cm
                  </label>
                </Stack>
              </Box>
              <Box>
                <Typography
                  variant="h6"
                  sx={{ fontSize: { xs: 14, md: 16 }, mb: 1 }}
                >
                  Weight
                </Typography>
                <Stack direction={"row"} gap={1} sx={{ alignItems: "center" }}>
                  <input
                    type="number"
                    name=""
                    id=""
                    className="calculator-input"
                  />
                  <label className="calculator-label" htmlFor="">
                    kg
                  </label>
                </Stack>
              </Box>
              <Box>
                <Typography
                  variant="h6"
                  sx={{ fontSize: { xs: 14, md: 16 }, mb: 1 }}
                >
                  Age
                </Typography>
                <Stack direction={"row"} gap={1} sx={{ alignItems: "center" }}>
                  <input
                    type="number"
                    name=""
                    id=""
                    className="calculator-input"
                  />
                  <label className="calculator-label" htmlFor="">
                    years
                  </label>
                </Stack>
              </Box>
              <Box>
                <Typography
                  variant="h6"
                  sx={{ fontSize: { xs: 14, md: 16 }, mb: 1 }}
                >
                  Desired Weight
                </Typography>
                <Stack direction={"row"} gap={1} sx={{ alignItems: "center" }}>
                  <input
                    type="number"
                    name=""
                    id=""
                    className="calculator-input"
                  />
                  <label className="calculator-label" htmlFor="">
                    kg
                  </label>
                </Stack>
              </Box>
            </Stack>
            <Box sx={{ my: 1 }}>
              <Typography
                variant="h6"
                sx={{ fontSize: { xs: 14, md: 16 }, mb: 1 }}
              >
                Physique Goal
              </Typography>
              <select className="calculator-select" name="" id="">
                <option value="">- Choose physique goal -</option>
                <option value="">Lose weight</option>
                <option value="">Maintain weight</option>
                <option value="">Gain weight</option>
              </select>
            </Box>
          </Paper>
        </Box>
      </Container>
    </div>
  );
};

export default PhysiqueCalculator;
