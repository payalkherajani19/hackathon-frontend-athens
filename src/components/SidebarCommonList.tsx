import React from "react";
import {
  List,
  ListItem,
  ListItemText,
} from "@material-ui/core";

const SidebarCommonList = () => {
  return (
    <div>
              <List>
          {["Item 1", "Item 2", "Item 3"].map((text, index) => (
            <ListItem button key={text}>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
    </div>
  )
}

export default SidebarCommonList
