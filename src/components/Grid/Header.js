import React from "react";
import { NavLink } from "react-router-dom";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import CssBaseline from "@material-ui/core/CssBaseline";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import HelpIcon from "@material-ui/icons/Help";
import HomeIcon from "@material-ui/icons/Home";
import AssignmentIcon from "@material-ui/icons/Assignment";
// import AssignmentIndIcon from "@material-ui/icons/AssignmentInd";
import OutlinedFlag from "@material-ui/icons/OutlinedFlag";
import InsertEmoticon from "@material-ui/icons/InsertEmoticon";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    // padding: "0 8px",
    ...theme.mixins.toolbar,
    justifyContent: "flex-start",
  },
  appBar: {
    background: "#282c34",
  },
  headerTitle: {
    flexGrow: 1,
    fontFamily: "Luckiest Guy",
    "& a": {
      color: "#fff",
    },
  },
  header: {
    display: "flex",
  },
  drawerPaper: {
    width: "230px",
  },
  headerDesktop: {
    display: "none",
    "@media screen and (min-width: 768px)": {
      display: "inline-block",
    },
  },
  navlink: {
    color: "#000",
    textDecoration: "none",
    textTransform: "none",
    "@media screen and (min-width: 768px)": {
      color: "#fff",
    },
  },
  headerMobile: {
    display: "inline-block",
    "@media screen and (min-width: 768px)": {
      display: "none",
    },
  },
}));

function PersistentDrawerRight() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  function handleDrawerOpen() {
    setOpen(true);
  }

  function handleDrawerClose() {
    setOpen(false);
  }

  return (
    <div className={classes.header}>
      <CssBaseline />
      <AppBar elevation={0} position="static" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" noWrap className={classes.headerTitle}>
            <NavLink to={"/"} className={classes.navlink}>
              Batalha de Hashtags
            </NavLink>
          </Typography>
          <div className={classes.headerDesktop}>
            <Button color="inherit" className="button">
              <NavLink to={"/"} className={classes.navlink}>
                Home
              </NavLink>
            </Button>
            <Button color="inherit" className="button">
              <NavLink to={"/instrucoes"} className={classes.navlink}>
                Instruções
              </NavLink>
            </Button>
            <Button color="inherit" className="button">
              <NavLink to={"/batalhas"} className={classes.navlink}>
                Batalhas
              </NavLink>
            </Button>
            <Button color="inherit" className="button">
              <NavLink to={"/personagens"} className={classes.navlink}>
                Personagens
              </NavLink>
            </Button>
            <Button color="inherit" className="button">
              <NavLink to={"/sobre"} className={classes.navlink}>
                Sobre
              </NavLink>
            </Button>
          </div>
          <div className={classes.headerMobile}>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              edge="end"
              onClick={handleDrawerOpen}
              className={clsx(open && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      <main>
        <div className={classes.drawerHeader} />
      </main>
      <Drawer
        variant="persistent"
        anchor="right"
        open={open}
        classes={{
          paper: "drawer-paper",
        }}
      >
        <div>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <List>
          <NavLink to={"/"} className={classes.navlink}>
            <ListItem button key={1}>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItem>
          </NavLink>
          <NavLink to={"/instrucoes"} className={classes.navlink}>
            <ListItem button key={1}>
              <ListItemIcon>
                <AssignmentIcon />
              </ListItemIcon>
              <ListItemText primary="Instruções" />
            </ListItem>
          </NavLink>
          <NavLink to={"/batalhas"} className={classes.navlink}>
            <ListItem button key={4}>
              <ListItemIcon>
                <OutlinedFlag />
              </ListItemIcon>
              <ListItemText primary="Batalhas" />
            </ListItem>
          </NavLink>
          <NavLink to={"/personagens"} className={classes.navlink}>
            <ListItem button key={3}>
              <ListItemIcon>
                <InsertEmoticon />
              </ListItemIcon>
              <ListItemText primary="Personagens" />
            </ListItem>
          </NavLink>
          <NavLink to={"/sobre"} className={classes.navlink}>
            <ListItem button key={2}>
              <ListItemIcon>
                <HelpIcon />
              </ListItemIcon>
              <ListItemText primary="Sobre" />
            </ListItem>
          </NavLink>
          {/* <Divider />
          <NavLink to={"/sugerir-batalha"} className={classes.navlink}>
            <ListItem button key={5}>
              <ListItemIcon>
                <AssignmentIcon />
              </ListItemIcon>
              <ListItemText primary="Sugerir Batalha" />
            </ListItem>
          </NavLink>
          <NavLink to={"/sugerir-personagem"} className={classes.navlink}>
            <ListItem button key={6}>
              <ListItemIcon>
                <AssignmentIndIcon />
              </ListItemIcon>
              <ListItemText primary="Sugerir Personagem" />
            </ListItem>
          </NavLink> */}
        </List>
      </Drawer>
    </div>
  );
}

export default PersistentDrawerRight;
