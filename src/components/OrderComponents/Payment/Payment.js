import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import CheckIcon from "@mui/icons-material/Check";
import plateDummy from "../../../images/plate-dummy.svg";
import CreateIcon from "@mui/icons-material/Create";
import paypal from "../../../images/paypal.svg";
import bank from "../../../images/bank-transfer.svg";

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

const Payment = () => {
  return (
    <div>
      <Container sx={{ py: 4, mb: 2, borderBottom: "1px solid #CDCEDC" }}>
        <Stack
          direction={{ xs: "column", md: "row" }}
          gap={2}
          sx={{ justifyContent: "space-between" }}
        >
          <Typography variant="h4" sx={{ fontSize: { xs: 26, md: 48 } }}>
            Total + <span className="coloredText">Payment Method</span>
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
            STEP #6
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
                  padding: "24px 40px 32px 40px",
                  borderRadius: 2,
                  height: "100%",
                }}
              >
                <Typography
                  sx={{ fontSize: { xs: 20, md: 24 }, mb: 3 }}
                  variant="h4"
                >
                  Payment
                </Typography>
                <Box>
                  <Box sx={{ my: 4 }}>
                    <Typography sx={{ fontSize: 16, mb: 1 }} variant="h6">
                      Enter card number
                    </Typography>
                    <input className="restriction-input" type="number" />
                    <Typography sx={{ fontSize: 14, my: 2 }} variant="body1">
                      Your card details would be securely saved for faster
                      payments. Your CVV will not be stored
                    </Typography>
                  </Box>
                  <Stack direction={{ xs: "column", md: "row" }} sx={{ my: 4 }}>
                    <Box>
                      <Typography sx={{ fontSize: 16, mb: 1 }} variant="h6">
                        Expiry Data
                      </Typography>
                      <input
                        className="month-input"
                        type="number"
                        placeholder="MM"
                      />
                      <input
                        className="year-input"
                        type="number"
                        placeholder="YYYY"
                      />
                    </Box>
                    <Box>
                      <Typography sx={{ fontSize: 16, mb: 1 }} variant="h6">
                        CVV
                      </Typography>
                      <input type="number" className="cvv-input" />
                    </Box>
                  </Stack>
                  <Box sx={{ my: 4 }}>
                    <Typography sx={{ fontSize: 16, mb: 1 }} variant="h6">
                      CPF Number
                    </Typography>
                    <input className="restriction-input" type="number" />
                  </Box>
                  <Box sx={{ my: 4 }}>
                    <Stack direction={"row"} gap={2} alignItems="center">
                      <input type="radio" name="payment" id="" />
                      <img src={paypal} alt="" />
                      <Typography sx={{ fontSize: 16, mb: 1 }} variant="h6">
                        Paypal
                      </Typography>
                    </Stack>

                    <Stack direction={"row"} gap={2} alignItems="center">
                      <input type="radio" name="payment" id="" />
                      <img src={bank} alt="" />
                      <Typography sx={{ fontSize: 16, mb: 1 }} variant="h6">
                        Bank Transfer
                      </Typography>
                    </Stack>
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
};

export default Payment;
