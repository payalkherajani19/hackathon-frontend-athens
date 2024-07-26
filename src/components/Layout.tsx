import React from "react";
import {
  Box,
  Typography,
  Container,
  Drawer,
  makeStyles,
} from "@material-ui/core";
import Header from "./Header";
import SidebarCommonList from "./SidebarCommonList";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: 240,
    flexShrink: 0,
  },
  drawerPaper: {
    width: 240,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  toolbar: theme.mixins.toolbar,
}));

interface Props {
  children?: React.ReactElement;
}
const Layout = (props: Props) => {
  const { children } = props;

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Header />
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.toolbar} />
        <SidebarCommonList />
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Container>
          <Typography variant="h1">Lead Generation</Typography>
          { children && (<Box className="children">{children}</Box>)} 
        </Container>
      </main>
    </div>
  );
};

export default Layout;
