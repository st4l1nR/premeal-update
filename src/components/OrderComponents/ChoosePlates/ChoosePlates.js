import CheckIcon from "@mui/icons-material/Check";
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import plateDummy from "../../../images/plate-dummy.svg";

const menus = [
  {
    id: 1,
    title: "Menu Title #1",
    image: plateDummy,
    calories: 563,
    price: 219,
  },
  {
    id: 2,
    title: "Menu Title #2",
    image: plateDummy,
    calories: 563,
    price: 219,
  },
  {
    id: 3,
    title: "Menu Title #3",
    image: plateDummy,
    calories: 563,
    price: 219,
  },
  {
    id: 4,
    title: "Menu Title #4",
    image: plateDummy,
    calories: 563,
    price: 219,
  },
  {
    id: 5,
    title: "Menu Title #5",
    image: plateDummy,
    calories: 563,
    price: 219,
  },
  {
    id: 6,
    title: "Menu Title #6",
    image: plateDummy,
    calories: 563,
    price: 219,
  },
  {
    id: 7,
    title: "Menu Title #7",
    image: plateDummy,
    calories: 563,
    price: 219,
  },
  {
    id: 8,
    title: "Menu Title #8",
    image: plateDummy,
    calories: 563,
    price: 219,
  },
  {
    id: 9,
    title: "Menu Title #9",
    image: plateDummy,
    calories: 563,
    price: 219,
  },
  {
    id: 10,
    title: "Menu Title #10",
    image: plateDummy,
    calories: 563,
    price: 219,
  },
  {
    id: 11,
    title: "Menu Title #11",
    image: plateDummy,
    calories: 563,
    price: 219,
  },
  {
    id: 12,
    title: "Menu Title #12",
    image: plateDummy,
    calories: 563,
    price: 219,
  },
];

const ChoosePlates = () => {
  const [days, setDays] = useState("7 plates");
  const [selectedId, setSelectedId] = useState(null);

  const handleDaysClick = (id, days) => {
    for (let i = 0; i < menus.length; i++) {
      const element = menus[i];
      if (element.id === id) {
        setSelectedId(id);
        setDays(days);
      }
    }
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
            // className="order-title"
            variant="h4"
            sx={{
              fontSize: { xs: 26, md: 48 },
              // width: { xs: "100%", md: "50%" },
            }}
          >
            Choose Plates +{" "}
            <span className="coloredText">Amount w/ Calories</span>
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
            STEP #4
          </Button>
        </Stack>
        <Box sx={{ flexGrow: 1, my: 8 }}>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 2, sm: 8, md: 12 }}
          >
            {menus.map((menu) => (
              <Grid item xs={2} sm={4} md={4} key={menu.id}>
                <Card sx={{ px: 2, pt: 4, pb: 2 }}>
                  <Typography
                    sx={{ textAlign: "right", mb: 2 }}
                    variant="body1"
                  >
                    <b>{menu.calories}</b> calories/plate
                  </Typography>
                  <Box sx={{ textAlign: "center" }}>
                    <img src={menu.image} alt="" />
                  </Box>
                  <CardContent>
                    <Stack direction={"row"} justifyContent="space-between">
                      <Typography
                        sx={{ fontSize: { xs: 18, md: 20 } }}
                        gutterBottom
                        variant="h5"
                      >
                        {menu.title}
                      </Typography>
                      <Typography
                        sx={{ fontSize: { xs: 20, md: 24 } }}
                        color="primary"
                        gutterBottom
                        variant="h5"
                      >
                        ${menu.price}
                      </Typography>
                    </Stack>
                    <Stack direction={"row"} gap={2} sx={{ my: 2 }}>
                      <Button
                        onClick={() => handleDaysClick(menu.id, "7 plates")}
                        value="7 plates"
                        className={
                          selectedId === menu.id && days === "7 plates"
                            ? "active-select-btn-plate"
                            : "select-btn-plate"
                        }
                      >
                        7 plates
                      </Button>
                      <Button
                      onClick={() => handleDaysClick(menu.id, "14 plates")}
                        value="14 plates"
                        className={
                          selectedId === menu.id && days === "14 plates"
                            ? "active-select-btn-plate"
                            : "select-btn-plate"
                        }
                      >
                        14 plates
                      </Button>
                      <Button
                        onClick={() => handleDaysClick(menu.id, "28 plates")}
                        value="28 plates"
                        className={
                          selectedId === menu.id && days === "28 plates"
                            ? "active-select-btn-plate"
                            : "select-btn-plate"
                        }
                      >
                        28 plates
                      </Button>
                    </Stack>
                    <Stack
                      direction={"row"}
                      gap={4}
                      sx={{ my: 2, flexWrap: "wrap" }}
                    >
                      <Box>
                        <Stack
                          direction={"row"}
                          gap={1}
                          sx={{ alignItems: "center" }}
                          alignItems="center"
                        >
                          <span style={{ fontSize: 14, fontWeight: "bold" }}>
                            Custom
                          </span>
                          <input
                            type="number"
                            name=""
                            id=""
                            className="calculator-input"
                          />
                          <label className="calculator-label" htmlFor="">
                            plates
                          </label>
                        </Stack>
                      </Box>
                    </Stack>
                    <Button
                      sx={{ fontSize: 16, textTransform: "inherit" }}
                      variant="outlined"
                    >
                      Add to cart
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </div>
  );
};

export default ChoosePlates;
