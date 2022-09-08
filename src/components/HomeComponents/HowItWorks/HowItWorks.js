import { Box, Container, Stack, Typography } from "@mui/material";
import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import arrowLeft from "../../../images/arrow-bottom-left.svg";

const timeline = [
  {
    id: 1,
    title: "Physique Calculator",
    content:
      "Praesent convallis placerat sapien. Praesent et sem rutrum, fringilla lorem porta, semper tellus. Nullam nibh nibh, vulputate et cursus ut, aliquet nec mi.",
  },
  {
    id: 2,
    title: "OBJECTIVE",
    content:
      "Praesent convallis placerat sapien. Praesent et sem rutrum, fringilla lorem porta, semper tellus. Nullam nibh nibh, vulputate et cursus ut, aliquet nec mi.",
  },
  {
    id: 3,
    title: "FOOD RESTRICTION",
    content:
      "Praesent convallis placerat sapien. Praesent et sem rutrum, fringilla lorem porta, semper tellus. Nullam nibh nibh, vulputate et cursus ut, aliquet nec mi.",
  },
  {
    id: 4,
    title: "Choose Plates + Amount w/ Calories",
    content:
      "Praesent convallis placerat sapien. Praesent et sem rutrum, fringilla lorem porta, semper tellus. Nullam nibh nibh, vulputate et cursus ut, aliquet nec mi.",
  },
  {
    id: 5,
    title: "Delivery",
    content:
      "Praesent convallis placerat sapien. Praesent et sem rutrum, fringilla lorem porta, semper tellus. Nullam nibh nibh, vulputate et cursus ut, aliquet nec mi.",
  },
  {
    id: 6,
    title: "Total + Payment Method",
    content:
      "Praesent convallis placerat sapien. Praesent et sem rutrum, fringilla lorem porta, semper tellus. Nullam nibh nibh, vulputate et cursus ut, aliquet nec mi.",
  },
  {
    id: 7,
    title: "Receipt",
    content:
      "Praesent convallis placerat sapien. Praesent et sem rutrum, fringilla lorem porta, semper tellus. Nullam nibh nibh, vulputate et cursus ut, aliquet nec mi.",
  },
];

const HowItWorks = () => {
  return (
    <div id="timeline">
      <Container sx={{ py: 6 }}>
        <Typography sx={{ fontSize: { xs: 32, md: 56 }, mb: 2 }} variant="h3">
          How it <span className="coloredText">works</span>
        </Typography>

        <VerticalTimeline
          animate={true}
          lineColor="#0B5C30"
          layout="1-column-left"
        >
          {timeline.map((item) => (
            <VerticalTimelineElement
              data-aos="fade-left"
              data-aos-duration="1000"
              key={item.id}
              iconStyle={{ background: "#0B5C30" }}
            >
              <Stack
                direction={{ xs: "column", md: "row" }}
                gap={{ xs: 2, md: 4 }}
                sx={{ alignItems: "start" }}
              >
                <Typography
                  sx={{ fontSize: { xs: 24, md: 32 }, color: "#BEC3CE" }}
                  variant="subtitle1"
                >
                  #{item.id}
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    flexDirection: { xs: "column", md: "row" },
                  }}
                >
                  <Box>
                    <Typography
                      sx={{
                        fontSize: { xs: 20, md: 32 },
                        color: "#101225",
                        mb: 1,
                      }}
                      variant="h4"
                    >
                      {item.title}
                    </Typography>
                    <Typography
                      sx={{ fontSize: { xs: 14, md: 16 }, color: "#3A3C4D" }}
                      variant="body1"
                    >
                      {item.content}
                    </Typography>
                  </Box>
                  <Box sx={{ display: { xs: "none", md: "inherit" } }}>
                    <img src={arrowLeft} alt="" />
                  </Box>
                </Box>
              </Stack>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </Container>
    </div>
  );
};

export default HowItWorks;
