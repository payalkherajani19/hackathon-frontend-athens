import React from "react";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  Box,
} from "@material-ui/core";

import { useNavigate } from "react-router-dom";
import UpcomingSvg from "../assests/upcoming.svg";
import AppointyLogo from '../assests/favicon-32x32.png'
import DraftsIcon from "@material-ui/icons/Drafts";
import EmailIcon from "@material-ui/icons/Email";
import BrandingWatermarkIcon from "@material-ui/icons/BrandingWatermark";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import SettingsVoiceIcon from '@material-ui/icons/SettingsVoice';
import AttachmentIcon from '@material-ui/icons/Attachment';
import useCustomContext from "../Hook";

const SidebarCommonList = () => {
  const navigate = useNavigate();
  const { setState } = useCustomContext();

  const handleLogout = () => {
    setState({});
    navigate("/register");
  };

  return (
    <>
      <Box
        style={{
          display: "flex",
          flexDirection: "column",
          marginLeft: "15px",
          height: "100vh",
          justifyContent: "space-between",
        }}
      >
        <Box>
          <List>
            <ListItem>
              <ListItemIcon>
                <img src={UpcomingSvg} />
              </ListItemIcon>
              <ListItemText primary={"Chat"} />
            </ListItem>
          </List>
          <List>
            <ListItemText style={{ textDecoration: "underline" }}>
              <Typography variant="body2">Templates</Typography>
            </ListItemText>
            <ListItem>
              <ListItemIcon>
                <DraftsIcon color="primary" />
              </ListItemIcon>
              <ListItemText primary={"Email Templates"} />
            </ListItem>

            <ListItem>
              <ListItemIcon>
                <EmailIcon color="primary" />
              </ListItemIcon>
              <ListItemText primary={"Email Sequences"} />
            </ListItem>
          </List>

          <List>
            <ListItemText style={{ textDecoration: "underline" }}>
              <Typography variant="body2">Integrations</Typography>
            </ListItemText>
            <ListItem>
              <ListItemIcon>
                <img src={AppointyLogo} />
              </ListItemIcon>
              <ListItemText primary={"Appointy"} />
            </ListItem>
          </List>


        <List>
          <ListItemText style={{ textDecoration: "underline" }}>
            <Typography variant="body2">Brand</Typography>
          </ListItemText>

          <ListItem>
            <ListItemIcon>
              <SettingsVoiceIcon color="primary" />
            </ListItemIcon>
            <ListItemText primary={"Brand Voice"} />
          </ListItem>

          <ListItem>
            <ListItemIcon>
              <AttachmentIcon color="primary" />
            </ListItemIcon>
            <ListItemText primary={"Brand Assets"} />
          </ListItem>

          <ListItem>
            <ListItemIcon>
              <BrandingWatermarkIcon color="primary" />
            </ListItemIcon>
            <ListItemText primary={"Brand Value proposition"} />
          </ListItem>

         
        </List>

        </Box>


        <ListItem button onClick={handleLogout}>
            <ListItemIcon>
              <ExitToAppIcon color="primary" />
            </ListItemIcon>
            <ListItemText primary={"Logout"} />
          </ListItem>
      </Box>
    </>
  );
};

export default SidebarCommonList;
