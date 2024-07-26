import React from 'react'
import { AppBar, Toolbar, Typography, Container, Drawer, List, ListItem, ListItemText, makeStyles } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
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

const Header = () => {
    const classes = useStyles()
  return (
       <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" noWrap>
             Lead Gen - Athens
          </Typography>
        </Toolbar>
      </AppBar>
  )
}

export default Header
