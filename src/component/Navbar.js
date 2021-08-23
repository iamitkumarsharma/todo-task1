import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";

function Navbar() {
  return (
    <div style={{ height: "fit-content" }}>
      <AppBar position="static">
        <Typography
          variant="h4"
          style={{ padding: "8px", textAlign: "center" }}
        >
          Todo
        </Typography>
      </AppBar>
    </div>
  );
}

export default Navbar;
