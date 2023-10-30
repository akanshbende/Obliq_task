import { Box, Stack, Typography } from "@mui/material";
import "./App.css";
import NavBar from "./Components/NavBar";
import SearchBar from "./Components/SearchBar";
// import zIndex from "@mui/material/styles/zIndex";

function App() {
  return (
    <>
      <NavBar />
      <Stack direction={{ sm: "row" }} sx={{ height: "80vh" }}>
        <Stack
          sx={{
            width: "50%",
            padding: "",
            borderBottom: "1px solid",
            borderColor: "black",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            paddingLeft: "6vw",
            paddingRight: "6vw",
            verticalAlign: "baseline",
          }}
        >
          <Box>
            <Typography
              variant="h6"
              component="div"
              sx={{
                flexGrow: 1,
                fontFamily: "Noto Sans Display",
                fontSize: "4rem",
                fontWeight: "800",
                lineHeight: "110%",
              }}
              // pl={2}
              // pr={2}
            >
              Centralize your online presence with
              <span
                className="w-fit ms-2"
                style={{ position: "relative", zIndex: 6 }}
              >
                Liinks <div className="link-underline"></div>
              </span>
              {/* <span className="w-fit"> */}
              <img
                src="https://static.thenounproject.com/png/2009614-200.png"
                // width={"20px"}
                style={{
                  transform: "rotate(45deg)",
                  // height: "4rem",
                  display: "inline-block",
                  width: "4rem",
                }}
              ></img>
              {/* </span> */}
            </Typography>
          </Box>
          <Box sx={{ marginTop: 1 }}>
            <Typography
              variant="h6"
              component="div"
              sx={{
                flexGrow: 1,
                fontFamily: "Noto Sans Display",
                // fontSize: "rem",
                fontSize: "18px",
                fontWeight: "100",
              }}
            >
              Gather all your links, social media, music, videos, and more in
              one place. Create a page that matches your style and never worry
              about changing your bio link again.
            </Typography>
          </Box>
          <Box sx={{ marginTop: "1rem", width: "100%" }}>
            <SearchBar />
          </Box>
        </Stack>
        <Box
          sx={{
            width: "50%",
            position: "relative",
            borderBottom: "1px solid",
            borderColor: "black",
            // backgroundColor: "#c4dffd",
          }}
        >
          <Stack
            direction={{ xs: "row" }}
            sx={{
              height: "100%",
            }}
          >
            <Box sx={{ width: "50%", height: "100%" }}></Box>
            <Box
              sx={{
                backgroundColor: "#c4dffd",
                width: "50%",
                height: "100%",
                borderLeft: "1px solid",
                borderColor: "black",
              }}
            ></Box>
          </Stack>

          <Box
            sx={{
              position: "absolute",
              // height: "100%",
              width: "75%",
              transform: "translate(-50%, -50%)",
              left: "50%",
              top: "50%",
              zIndex: 10,
            }}
          >
            <img
              src="https://d1ym67wyom4bkd.cloudfront.net/assets/bundles/6da2d2ec04844202004d961a8038f3853afd3f0f/graphics/hero-graphic.png"
              // width={"90%"}
              alt=""
            />
          </Box>
        </Box>
      </Stack>

      <MarqueeComponent />
    </>
  );
}

export default App;
