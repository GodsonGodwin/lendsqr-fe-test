import React, { useState } from "react";
import { Grid } from "@mui/material";
import { Outlet } from "react-router-dom";
import NavBar from "components/Navbar";
import SideBar from "components/Sidebar";

const DashboardLayout = () => {

  const [showSideBar, setShowSideBar] = useState(false);

  const handleClick = () => {
    setShowSideBar((prev) => !prev);
  };

  
  return (
    <React.Fragment>
      <NavBar showSideBar={showSideBar} onClickMobilebtn={handleClick} />
      <Grid container>
        <Grid
          item
          sx={{ maxWidth: "283px" }}
          position={{ xs: "absolute", lg: "relative" }}
          zIndex={{ xs: "100", lg: "-1" }}
          display={{ xs: `${showSideBar ? "none" : "block"}`, lg: "block" }}
        >
          <SideBar />
        </Grid>

        <Grid
          item
          width={{ xs: "95%", lg: "calc(100% - 410px)" }}
          margin={{ xs: "30px auto", lg: "60px 60px 0 60px" }}
        >
          <Outlet />
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default DashboardLayout;