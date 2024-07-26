import React from "react";
import {
  List,
  ListItem,
  ListItemText,
} from "@material-ui/core";

import { useNavigate } from 'react-router-dom'

const listItems = [
  {
    itemName: 'Projects',
    path: '/projects'
  },
  {
    itemName: 'Google Places',
    path: '/places'
  },
  {
    itemName: 'GPT Talks',
    path: '/chat/ChIJ6VWov4Q2w4ARCBJMVH9oDxA'
  },
 
]
const SidebarCommonList = () => {

  const navigate = useNavigate()

  const handleChangeRoute = (e: React.MouseEvent<HTMLDivElement, MouseEvent>, path: string) => {
     navigate(path)
  }


  return ( 
    <div>
        <List>
          {listItems.map((item, index) => (
            <ListItem button key={index} onClick={(e) => handleChangeRoute(e, item.path)}>
              <ListItemText primary={item.itemName}  />
            </ListItem>
          ))}
        </List>
    </div>
  )
}

export default SidebarCommonList
