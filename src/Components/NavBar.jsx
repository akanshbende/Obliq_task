import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
// import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
// import MenuIcon from "@mui/icons-material/Menu";

import { AiFillPlusCircle } from "react-icons/ai";
import { PiLinkBold } from "react-icons/pi";
import { Stack } from "@mui/material";
// import { Link } from "react-router-dom";
function NavBar() {
  const NavbarData = [
    {
      name: "Pricing",
      link: "",
    },
    {
      name: "Gallery",
      link: "",
    },
    {
      name: "QR Codes",
      link: "",
    },
    {
      name: "Help",
      link: "",
    },
  ];
  return (
    <>
      <div className="nav-bar">
        <Box sx={{ flexGrow: 1 }}>
          <AppBar
            position="static"
            sx={{
              backgroundColor: "white",
              color: "black",
              boxShadow: "none",
              borderBottom: "1px solid",
              borderColor: "black",
            }}
          >
            <Toolbar
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Stack direction={{ xs: "row" }} spacing={2}>
                <Box sx={{ borderRight: "1px solid black", height: "100%" }}>
                  <Typography
                    variant="h6"
                    component="div"
                    sx={{
                      flexGrow: 1,

                      fontFamily: "Noto Sans",
                      fontSize: "1.5rem",
                      fontWeight: "600",
                      mr: 2,
                    }}
                  >
                    <IconButton
                      size="large"
                      edge="start"
                      // color="inherit"
                      aria-label="menu"
                      sx={{ transform: "rotate(-70deg)", color: "#1b97f5" }}
                    >
                      <PiLinkBold />
                    </IconButton>
                    liinks
                  </Typography>
                </Box>
                {NavbarData &&
                  NavbarData.map((navbarItem, index) => {
                    return (
                      <Box
                        key={index}
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          borderRight: "1px solid black",
                        }}
                      >
                        <Typography
                          key={index}
                          variant="h6"
                          component="div"
                          sx={{
                            flexGrow: 1,
                            fontFamily: "Noto Sans Display",
                            fontSize: "1rem",
                            fontWeight: "600",
                          }}
                        >
                          {navbarItem?.name}
                        </Typography>
                      </Box>
                    );
                  })}
              </Stack>

              <Stack
                direction={{ xs: "row" }}
                spacing={2}
                sx={{
                  fontFamily: "Noto Sans Display",
                  fontSize: "1rem",
                  fontWeight: "600",
                  color: "black",
                }}
              >
                <Box
                  sx={{
                    height: "100%",
                    borderRight: "1px solid ",
                    borderColor: "black",
                  }}
                >
                  Login
                </Box>
                <Stack
                  direction={{ xs: "row" }}
                  spacing={1}
                  sx={{ alignItems: "center" }}
                >
                  <Box>SignUp</Box> <AiFillPlusCircle />
                </Stack>
              </Stack>
            </Toolbar>
          </AppBar>
        </Box>
      </div>
    </>
  );
}

export default NavBar;
