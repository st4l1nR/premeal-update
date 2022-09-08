import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { Container } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Stepper from "@mui/material/Stepper";
import Typography from "@mui/material/Typography";
import * as React from "react";
import ChoosePlates from "../ChoosePlates/ChoosePlates";
import Delivery from "../Delivery/Delivery";
import Done from "../Done/Done";
import FoodRestriction from "../FoodRestriction/Food Restriction";
import Objective from "../Objective/Objective";
import Payment from "../Payment/Payment";
import PhysiqueCalculator from "../PhysiqueCalculator/PhysiqueCalculator";
import Receipt from "../Receipt/Receipt";

const steps = [
  "Physique Calculator",
  "Objective",
  "Food Restriction",
  "Choose Plates + Amount w/ Calories",
  "Delivery",
  "Total + Payment Method",
  "Receipt",
];

export default function OrderStepper() {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <>
      <Container sx={{ py: 6 }}>
        <Box sx={{ width: "100%" }}>
          <Stepper activeStep={activeStep}>
            {steps.map((label, index) => {
              const stepProps = {};
              const labelProps = {};

              return (
                <Step key={label} {...stepProps}>
                  <StepLabel {...labelProps}></StepLabel>
                </Step>
              );
            })}
          </Stepper>
          {activeStep === steps.length ? (
            <React.Fragment>
              <Done />
            </React.Fragment>
          ) : (
            <React.Fragment>
              {activeStep === 0 ? (
                <PhysiqueCalculator />
              ) : activeStep === 1 ? (
                <Objective />
              ) : activeStep === 2 ? (
                <FoodRestriction />
              ) : activeStep === 3 ? (
                <ChoosePlates />
              ) : activeStep === 4 ? (
                <Delivery />
              ) : activeStep === 5 ? (
                <Payment />
              ) : activeStep === 6 ? (
                <Receipt />
              ) : (
                <Receipt />
              )}
              <Box
                sx={{
                  display: "flex",
                  flexDirection: activeStep === 0 ? "column" : "row",
                  pt: 2,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Button
                  disabled={activeStep === 0}
                  onClick={handleBack}
                  sx={{ mr: 1, display: activeStep === 0 ? "none" : "inherit" }}
                  startIcon={<KeyboardArrowLeftIcon />}
                  variant="contained"
                >
                  PREVIOUS
                </Button>
                <Box sx={{ flex: "1 1 auto" }} />

                <Button
                  onClick={handleNext}
                  endIcon={<KeyboardArrowRightIcon />}
                  variant="contained"
                  sx={{ width: activeStep === 0 ? 120 : "auto" }}
                >
                  {/* {activeStep === steps.length - 1 ? "Finish" : "NEXT"} */}
                  {activeStep === 6 ? "PROCESS PAYMENT" : "NEXT"}
                </Button>
              </Box>
            </React.Fragment>
          )}
        </Box>
      </Container>
    </>
  );
}
