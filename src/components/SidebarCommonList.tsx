import React, { useState } from "react";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  Box,
  makeStyles,
  Menu,
  MenuItem,
} from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import SettingsVoiceIcon from "@material-ui/icons/SettingsVoice";
import AttachmentIcon from "@material-ui/icons/Attachment";
import EmailOutlinedIcon from "@material-ui/icons/EmailOutlined";
import WorkOutlineOutlinedIcon from "@material-ui/icons/WorkOutlineOutlined";
import SettingsOutlinedIcon from "@material-ui/icons/SettingsOutlined";
import useCustomContext from "../Hook";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

const useStyles = makeStyles((theme) => ({
  sidebarRoot: {
    display: "flex",
    flexDirection: "column",
    marginLeft: "15px",
    height: "inherit",
    justifyContent: "space-between",
  },
  listItemText: {
    fontSize: "14px",
  },
  iconRoot: {
    minWidth: "36px",
  },
}));

const options = ["Profile", "Account settings", "Invite team", "Logout" ];

const SidebarCommonList = () => {
  const navigate = useNavigate();
  const { setState, state } = useCustomContext();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [selectedIndex, setSelectedIndex] = React.useState(1);
  const classes = useStyles();

  const handleLogout = () => {
    setState({});
    navigate("/register");
  };

  const handleClickItem = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    path: string
  ) => {
    navigate(path);
  };

  const handleClickListItem = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (
    event: React.MouseEvent<HTMLElement>,
    index: number
  ) => {
    setSelectedIndex(index);
    setAnchorEl(null);
    if(index === 3){
      handleLogout()
    }
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Box className={classes.sidebarRoot}>
        <Box style={{ paddingTop: "16px", paddingBottom: "16px" }}>
          <Typography variant="h6">
            <b>Perspecto.co</b>
          </Typography>
          <List>
            <ListItem button>
              <ListItemIcon classes={{ root: classes.iconRoot }}>
                <WorkOutlineOutlinedIcon color="primary" fontSize="small" style={{ color:state.themeColor }} />
              </ListItemIcon>
              <ListItemText
                primary={"Project"}
                classes={{ primary: classes.listItemText }}
              />
            </ListItem>
          </List>
          <List>
            <ListItemText>
              <Typography variant="body2">Templates</Typography>
            </ListItemText>
            <ListItem button>
              <ListItemIcon classes={{ root: classes.iconRoot }}>
                <EmailOutlinedIcon color="primary" fontSize="small" style={{ color:state.themeColor }} />
              </ListItemIcon>
              <ListItemText
                primary={"Email Templates"}
                classes={{ primary: classes.listItemText }}
              />
            </ListItem>
          </List>
          <List>
            <ListItemText>
              <Typography variant="body2">Brand</Typography>
            </ListItemText>

            <ListItem
              button={true}
              onClick={(e) => handleClickItem(e, "/brandvoice")}
            >
              <ListItemIcon classes={{ root: classes.iconRoot }}>
                <SettingsVoiceIcon color="primary" fontSize="small"  style={{ color:state.themeColor }} />
              </ListItemIcon>
              <ListItemText
                primary={"Brand Voice"}
                classes={{ primary: classes.listItemText }}
              />
            </ListItem>

            <ListItem button>
              <ListItemIcon classes={{ root: classes.iconRoot }}>
                <AttachmentIcon color="primary" fontSize="small" style={{ color:state.themeColor }} />
              </ListItemIcon>
              <ListItemText
                primary={"Brand Assets"}
                classes={{ primary: classes.listItemText }}
              />
            </ListItem>
          </List>
        </Box>

        <List component="nav" aria-label="Device settings">
          <ListItem
            button
            aria-haspopup="true"
            aria-controls="lock-menu"
            aria-label="when device is locked"
            onClick={handleClickListItem}
          >
            <ListItemIcon classes={{ root: classes.iconRoot }}>
              <SettingsOutlinedIcon color="primary" fontSize="small" style={{ color:state.themeColor }} />
            </ListItemIcon>
            <ListItemText
              primary="Settings"
              secondary={options[selectedIndex]}
              classes={{ primary: classes.listItemText }}
            />
          </ListItem>
        </List>
        <Menu
          id="lock-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          {options.map((option, index) => (
            <MenuItem
              key={option}
              disabled={index === 0}
              selected={index === selectedIndex}
              onClick={(event) => handleMenuItemClick(event, index)}
            >
              {option}
            </MenuItem>
          ))}
        </Menu>
      </Box>
    </>
  );
};

export default SidebarCommonList;
