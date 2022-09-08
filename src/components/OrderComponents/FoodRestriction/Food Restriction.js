import AddIcon from "@mui/icons-material/Add";
import CheckIcon from "@mui/icons-material/Check";
import ClearIcon from "@mui/icons-material/Clear";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import halal from "../../../images/halal.svg";
import noRestriction from "../../../images/no-restriction.svg";
import vegan from "../../../images/vegan.svg";
import vegetarian from "../../../images/vegetarian.svg";

const restrictions = [
  { id: 1, name: "Vegan", image: vegan },
  { id: 2, name: "Vegetarian", image: vegetarian },
  { id: 3, name: "Halal", image: halal },
  { id: 4, name: "No Restriction", image: noRestriction },
];

const FoodRestriction = () => {
  const [restrict, setRestrict] = useState("");
  const [otherRestriction, setOtherRestriction] = useState("");
  const [otherRestrictionList, setOtherRestrictionList] = useState([]);
  const [newRestrictionList, setNewRestrictionList] = useState([]);

  const handleClick = (res) => {
    setRestrict(res);
  };

  const handleAddOtherRestriction = (e) => {
    e.preventDefault();
    if (otherRestriction) {
      setOtherRestrictionList([...otherRestrictionList, otherRestriction]);
      e.target.reset();
    }
  };

  const handleRemove = (name) => {
    for (let i = 0; i < otherRestrictionList.length; i++) {
      const element = otherRestrictionList[i];
      if (element === name) {
        const newArr = otherRestrictionList.filter((n) => n !== name);
        setOtherRestrictionList(newArr);
      }
    }
  };

  useEffect(() => {
    setNewRestrictionList(otherRestriction);
  }, [otherRestriction]);

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
            Food <span className="coloredText">Restriction</span>
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
            STEP #3
          </Button>
        </Stack>
        <Box
          sx={{
            bgcolor: "#fff",
            mx: "auto",
            my: 3,
            px: 3,
            py: 5,
            borderRadius: 2,
          }}
        >
          <Stack
            direction={"row"}
            gap={{ xs: 2, md: 4 }}
            sx={{ flexWrap: "wrap" }}
          >
            {restrictions.map((restriction) => (
              <Button
                onClick={() => handleClick(restriction.name)}
                sx={{
                  px: 4,
                  py: 4,
                  boxShadow: "0px 1px 4px -2px rgba(0,0,0,0.37)",
                  borderRadius: 2,
                  cursor: "pointer",
                  bgcolor:
                    restrict === restriction.name ? "#D2EFDF" : "inherit",
                  display: "flex",
                  flexDirection: "column",
                  gap: 1,
                }}
                variant={restrict === restriction.name ? "outlined" : ""}
                key={restriction.id}
              >
                <img src={restriction.image} alt={restriction.name} />
                <Typography
                  sx={{
                    fontSize: { xs: 14, md: 16 },
                    color: restrict === restriction.name ? "#0B5C30" : "",
                  }}
                  variant="h6"
                >
                  {restriction.name}
                </Typography>
              </Button>
            ))}
          </Stack>
          <Box sx={{ my: 4 }}>
            <Typography
              sx={{ fontSize: { xs: 20, md: 24 }, mb: 2 }}
              variant="h4"
            >
              Specify Other Food Restriction/Allergy
            </Typography>
            <form onSubmit={handleAddOtherRestriction}>
              <Stack direction={"row"} gap={2} sx={{ alignItems: "center" }}>
                <input
                  onBlur={(e) => setOtherRestriction(e.target.value)}
                  type="text"
                  name=""
                  id=""
                  className="restriction-input"
                />
                <Button type="submit">
                  <AddIcon sx={{ cursor: "pointer" }} color="primary" />
                </Button>
              </Stack>
            </form>
            {otherRestrictionList.length > 0 && (
              <Stack direction={"row"} gap={2} sx={{ my: 2, flexWrap: "wrap" }}>
                {otherRestrictionList.map((res) => (
                  <Box
                    sx={{
                      bgcolor: "#D2EFDF",
                      textTransform: "inherit",
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                      p: "8px 16px",
                      borderRadius: 2,
                      color: "#0B5C30",
                    }}
                  >
                    {res}
                    <ClearIcon
                      onClick={() => handleRemove(res)}
                      sx={{ cursor: "pointer" }}
                      color="primary"
                    />
                  </Box>
                ))}
              </Stack>
            )}
          </Box>
        </Box>
      </Container>
    </div>
  );
};

export default FoodRestriction;
