import React from 'react'
import { AppBar, Toolbar, Typography, makeStyles } from '@material-ui/core';
import logo from '../assests/perspecto.jpeg'

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
        <Toolbar style={{ justifyContent: 'space-between'}}>
          <Typography variant="h6" noWrap>
            Perspecto.AI
          </Typography>
          <img src={logo}  alt="logo" height={40} />
        </Toolbar>
      </AppBar>
  )
}

export default Header
