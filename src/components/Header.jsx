import { Link, useNavigate } from "react-router-dom";
import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Logo from "../assets/logo.png";
import "./Header.css";
import EmailIcon from "@mui/icons-material/Email";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";

const Header = () => {
  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  // Navigation handler for links/buttons
  const navigateTo = (path) => {
    navigate(path);
    setAnchorEl(null); // Close menu if it's open
  };

  return (
    <div className="header">
      <div className="header-logo">
        <Link to="/">
          <img src={Logo} alt="Deep Cognition" />
        </Link>
      </div>

      <div className="header-links">
        <Link to="/" onClick={() => navigateTo("/")}>
          Accueil
        </Link>
        <Link to="/solutions" onClick={() => navigateTo("/solutions")}>
          Solutions
        </Link>
        <Link to="/actualites" onClick={() => navigateTo("/actualites")}>
          Actualités
        </Link>
        <Button
          variant="contained"
          startIcon={<EmailIcon />}
          onClick={() => navigateTo("/contact")}
          sx={{
            backgroundColor: "rgb(99, 102, 241)",
            "&:hover": {
              backgroundColor: "rgb(79, 85, 191)",
            },
            fontSize: "1rem",
            fontWeight: "normal",
          }}
        >
          Contactez-Nous
        </Button>
      </div>

      <div className="burger-menu">
        <Button
          id="burger-menu"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        >
          <MenuOutlinedIcon
            sx={{
              color: "rgb(99, 102, 241)",
              "&:hover": {
                color: "rgb(79, 85, 191)",
              },
              fontSize: "2.5rem",
              fontWeight: "bold",
            }}
          />
        </Button>

        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem onClick={() => navigateTo("/")}>Accueil</MenuItem>
          <MenuItem onClick={() => navigateTo("/solutions")}>
            Solutions
          </MenuItem>
          <MenuItem onClick={() => navigateTo("/actualites")}>
            Actualités
          </MenuItem>
          <MenuItem>
            <Button
              variant="contained"
              startIcon={<EmailIcon />}
              onClick={() => navigateTo("/contact")}
              sx={{
                backgroundColor: "rgb(99, 102, 241)",
                "&:hover": {
                  backgroundColor: "rgb(79, 85, 191)",
                },
                fontSize: "1rem",
                fontWeight: "normal",
              }}
            >
              Contactez-Nous
            </Button>
          </MenuItem>
        </Menu>
      </div>
    </div>
  );
};

export default Header;
