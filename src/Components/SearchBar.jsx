import { IconButton, Stack, Typography } from "@mui/material";
// import React from "react";
import { PiLinkBold } from "react-icons/pi";

function SearchBar() {
  return (
    <>
      <Stack
        className="search-bar-stack"
        direction={{ xs: "row" }}
        sx={{
          display: "flex",
          alignItems: "centers",
          justifyContent: "space-between",
          flexDirection: "row",
          textAlign: "center",
          border: "1px solid",
          borderColor: "black",
          borderRadius: "30px",
          padding: "4px",
          width: "100%",
        }}
      >
        <Stack direction={{ xs: "row" }} sx={{ width: "70%" }}>
          <IconButton
            size="large"
            edge="start"
            // color="inherit"

            aria-label="menu"
            sx={{
              transform: "rotate(-70deg)",
              marginLeft: 2,
              color: "#1b97f5",
            }}
          >
            <PiLinkBold />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              textAlign: "center",
              fontFamily: "Noto Sans",
              fontSize: "1rem",
              fontWeight: "600",
              display: "flex",
              alignItems: "center",
            }}
          >
            liinks.co/
          </Typography>
          <input
            type="text"
            placeholder="yournamehere"
            className="search-input align-middle"
            style={{ fontSize: "1rem", flexGrow: 1, width: "80%" }}
          />
        </Stack>

        <button className="button-get-started text-center ">Get Started</button>
      </Stack>
    </>
  );
}

export default SearchBar;
