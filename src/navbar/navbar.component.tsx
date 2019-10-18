import React from "react";
import {
  Button,
  Toolbar,
  AppBar,
  makeStyles,
  createStyles,
  IconButton,
  Drawer,
  Divider,
  List,
  ListItem,
  ListItemText
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import logo from "../../assets/img/logo_light.png";
import { navbarLinks } from "./navbar-links";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const styles = makeStyles(theme =>
    createStyles({
      desktopButtonBar: {
        [theme.breakpoints.down("xs")]: {
          display: "none"
        }
      },
      mobileMenuButton: {
        [theme.breakpoints.up("sm")]: {
          display: "none"
        }
      },
      drawer: {
        width: "70%"
      },
      buttons: {
        textTransform: "capitalize",
        fontFamily: "Open Sans"
      },
      closeMobileMenuButton: {
        display: "flex",
        flexDirection: "row-reverse"
      }
    })
  );

  const classes = styles({});

  return (
    <div>
      <AppBar position="fixed" color="default">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.mobileMenuButton}
            color="primary"
            aria-label="menu"
            onClick={handleDrawerOpen}
          >
            <MenuIcon />
          </IconButton>
          <img
            // @ts-ignore
            width="300"
            src={logo}
            className={styles.logo}
          />
          <div
            className={classes.desktopButtonBar}
            style={{ marginLeft: "auto" }}
          >
            {navbarLinks.map(link => (
              <Button
                className={classes.buttons}
                component={Link}
                to={link.url}
              >
                {link.name}
              </Button>
            ))}
          </div>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawer
        }}
      >
        <div className={classes.closeMobileMenuButton}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <List>
          {navbarLinks.map(link => (
            <ListItem button component={Link} to={link.url}>
              <ListItemText primary={link.name}></ListItemText>
            </ListItem>
          ))}
        </List>
        <Divider />
      </Drawer>
    </div>
  );
}
