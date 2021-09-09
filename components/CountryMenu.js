import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ReactCountryFlag from "react-country-flag";
import countries from "../mock/countries.json";
import PublicIcon from "@material-ui/icons/Public";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";

const StyledMenu = withStyles({
  paper: {
    border: "1px solid #d3d4d5",
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "center",
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    "&:focus": {
      backgroundColor: theme.palette.primary.main,
      "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

export default function CountryMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [selectedCountry, setSelectedCountry] = React.useState("GLOBAL");
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleCountryClick = (e, v) => {
    setSelectedCountry(v.country);
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        aria-controls="customized-menu"
        aria-haspopup="true"
        variant="contained"
        color="primary"
        onClick={handleClick}
      >
        {selectedCountry}
        <ArrowDropDownIcon />
      </Button>
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {countries.map((item, i) => (
          <div>
            <StyledMenuItem
              key={item.id}
              onClick={(e, v) => handleCountryClick(e, item)}
            >
              <ListItemIcon>
                {item.id !== 1 ? (
                  <ReactCountryFlag
                    countryCode={item.code}
                    svg
                    style={{
                      width: "1.5em",
                      height: "1.5em",
                      borderRadius: "5px",
                    }}
                  />
                ) : (
                  <PublicIcon style={{ color: "#00a8ff", fontSize: 28 }} />
                )}
              </ListItemIcon>
              {item.id !== 1 ? (
                <ListItemText primary={item.country} />
              ) : (
                <ListItemText primary={"GLOBAL"} />
              )}
            </StyledMenuItem>
          </div>
        ))}
      </StyledMenu>
    </div>
  );
}
