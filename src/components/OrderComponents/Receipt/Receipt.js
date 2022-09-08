import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import CheckIcon from "@mui/icons-material/Check";
import plateDummy from "../../../images/plate-dummy.svg";
import CreateIcon from "@mui/icons-material/Create";
import check from "../../../images/check.svg";
import card from "../../../images/credit-card.svg";

const orders = [
  {
    id: 1,
    title: "Menu Title #1",
    image: plateDummy,
    calories: "2,563 cal",
    price: 219,
  },
  {
    id: 2,
    title: "Menu Title #2",
    image: plateDummy,
    calories: "2,563 cal",
    price: 219,
  },
  {
    id: 3,
    title: "Menu Title #3",
    image: plateDummy,
    calories: "2,563 cal",
    price: 219,
  },
];

const Receipt = () => {
  return (
    <div>
      <Container sx={{ py: 4, mb: 2, borderBottom: "1px solid #CDCEDC" }}>
        <Stack
          direction={{ xs: "column", md: "row" }}
          gap={2}
          sx={{ justifyContent: "space-between" }}
        >
          <Typography variant="h4" sx={{ fontSize: { xs: 26, md: 48 } }}>
            Receipt
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
            STEP #7
          </Button>
        </Stack>
        <Box sx={{ flexGrow: 1, my: 4 }}>
          <Grid
            container
            spacing={{ xs: 2, md: 5, lg: 7 }}
            columns={{ xs: 2, sm: 4, md: 12 }}
          >
            <Grid item xs={2} sm={4} md={6}>
              <Box
                sx={{
                  bgcolor: "#fff",
                  padding: "24px 40px 32px 40px",
                  borderRadius: 2,
                }}
              >
                <Typography
                  sx={{ fontSize: { xs: 20, md: 24 }, mb: 3 }}
                  variant="h4"
                >
                  Your Order
                </Typography>
                <Box>
                  {orders.map((order) => (
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        gap: 2,
                        my: 2,
                      }}
                      key={order.id}
                    >
                      <img width={80} height={80} src={order.image} alt="" />
                      <Box>
                        <Typography
                          sx={{ fontSize: { xs: 16, md: 20 }, mb: 1 }}
                          variant="h5"
                        >
                          {order.title}
                        </Typography>
                        <Typography variant="subtitle1">Subtotal</Typography>
                      </Box>
                      <Box>
                        <Typography
                          sx={{
                            fontSize: 14,
                            bgcolor: "#D2EFDF",
                            color: "#0B5C30",
                            padding: "8px 16px",
                            borderRadius: 2,
                            mb: 0.5,
                          }}
                          variant="body1"
                        >
                          {order.calories}
                        </Typography>
                        <Typography variant="body1">
                          ${order.price} X 1 ={" "}
                          <b className="coloredText">${order.price}</b>
                        </Typography>
                      </Box>
                    </Box>
                  ))}
                </Box>
                <Box
                  sx={{
                    bgcolor: "#F5F5F5",
                    padding: "23px 30px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    my: 2,
                    borderRadius: 2,
                  }}
                >
                  <Typography variant="body1">Delivery</Typography>
                  <Stack direction={"row"} alignItems="center" gap={2}>
                    <Typography sx={{ fontSize: 16 }} variant="h6">
                      $21 Express
                    </Typography>
                    <Button sx={{ bgcolor: "#D2EFDF" }}>
                      <CreateIcon />
                    </Button>
                  </Stack>
                </Box>
                <Box
                  sx={{
                    bgcolor: "#F5F5F5",
                    padding: "23px 30px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    my: 2,
                    borderRadius: 2,
                  }}
                >
                  <Typography variant="body1">Departure at</Typography>
                  <Typography sx={{ fontSize: 16 }} variant="h6">
                    January 20, 2022
                  </Typography>
                </Box>
                <Box
                  sx={{
                    bgcolor: "#D2EFDF",
                    padding: "23px 30px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    my: 2,
                    borderRadius: 2,
                  }}
                >
                  <Typography variant="body1">Total</Typography>
                  <Typography
                    sx={{ fontSize: { xs: 24, md: 30 } }}
                    color="primary"
                    variant="h6"
                  >
                    $469
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={2} sm={4} md={6}>
              <Box
                sx={{
                  bgcolor: "#fff",
                  padding: "24px 40px",
                  borderRadius: 2,
                  mb: 4,
                }}
              >
                <Typography sx={{ fontSize: 16, mb: 2 }} variant="h6">
                  Arnold Swanztager
                </Typography>
                <Typography
                  sx={{ fontSize: { xs: 14, md: 16 } }}
                  gutterBottom
                  variant="body1"
                >
                  arnoldswanztager@gmail.com
                </Typography>
                <Typography
                  sx={{ fontSize: { xs: 14, md: 16 } }}
                  gutterBottom
                  variant="body1"
                >
                  12 rue du Helder Street 75009 Paris, France
                </Typography>
              </Box>
              <Box
                sx={{
                  bgcolor: "#fff",
                  padding: "24px 40px",
                  borderRadius: 2,
                  mb: 4,
                }}
              >
                <Typography sx={{ fontSize: 16, mb: 2 }} variant="h6">
                  Payment
                </Typography>
                <Stack direction={"row"} gap={2} alignItems="center">
                  <img src={check} alt="" />
                  <img src={card} alt="" />
                  <Typography sx={{ fontSize: 16 }} variant="h6">
                    Credit Card
                  </Typography>
                </Stack>
                <Stack
                  direction={"row"}
                  gap={2}
                  alignItems="center"
                  justifyContent="space-between"
                  sx={{ mt: 2 }}
                >
                  <Typography sx={{ fontSize: 16, mb: 2 }} variant="h6">
                    1234 5678 9012 3456
                  </Typography>
                  <Typography sx={{ fontSize: 16, mb: 2 }} variant="h6">
                    05/22
                  </Typography>
                </Stack>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
};

export default Receipt;
