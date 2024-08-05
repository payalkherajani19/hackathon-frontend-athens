import React from "react";
import {
  Box,
  Typography,
  Container,
  Drawer,
  makeStyles,
} from "@material-ui/core";
import SidebarCommonList from "./SidebarCommonList";
import useCustomContext from "../Hook";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    height: 'inherit'
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
  toolbar: {
    minHeight: '20'
  }
}));

interface Props {
  children?: React.ReactElement;
}
const Layout = (props: Props) => {
  const { children } = props;

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <SidebarCommonList />
      </Drawer>
      <main className={classes.content}>
        <Container>
          <>
          { children && (<Box className="children">{children}</Box>)} 
          </>
        </Container>
      </main>
    </div>
  );
};

export default Layout;
