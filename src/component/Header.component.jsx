import React, { useState, useEffect } from "react";
import "./Header.css";

import {
  IconButton,
  AppBar,
  Typography,
  Toolbar,
  Icon,
  Collapse,
} from "@material-ui/core";
import SortIcon from "@material-ui/icons/Sort";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const Header = () => {
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    setChecked(true);
  }, []);

  return (
    <div className="root" id="header">
      <AppBar className="appbar">
        <Toolbar className="toolbar">
          <Typography className="header-title">
            My<span>Island</span>.
          </Typography>
          <IconButton>
            <SortIcon className="header-icon" />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Collapse
        in={checked}
        {...(checked ? { timeout: 1500 } : {})}
        collapsedHeight={50}
      >
        <div>
          <Typography className="main-content" variant="h1">
            Welcome to
            <br /> My <span>Island.</span>
          </Typography>

          <Icon>
            <ExpandMoreIcon className="main-icon" />
          </Icon>
        </div>
      </Collapse>
    </div>
  );
};

export default Header;
