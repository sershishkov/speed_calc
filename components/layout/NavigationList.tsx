import React, { useState } from 'react';

import List from '@mui/material/List';
import Link from '@mui/material/Link';
import ListItemButton from '@mui/material/ListItemButton';

import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';

import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

import { links_level_1 } from '../../constants/constants';

function NavigationList({ toggleDrawer }: { toggleDrawer: Function }) {
  const [open__links_level_1, set__open__links_level_1] =
    useState<boolean>(false);

  return (
    <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
      component='nav'
      onClick={() => toggleDrawer(false)}
    >
      <ListItemButton
        onClick={() => set__open__links_level_1(!open__links_level_1)}
      >
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary='Уровень 1' />
        {open__links_level_1 ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open__links_level_1} timeout='auto' unmountOnExit>
        <List disablePadding>
          {links_level_1.map((item) => (
            <ListItemButton
              key={item.link}
              sx={{ pl: 4 }}
              component={Link}
              href={item.link}
              onClick={() => toggleDrawer(false)}
            >
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary={`${item.caption}`} />
            </ListItemButton>
          ))}
        </List>
      </Collapse>
    </List>
  );
}

export default NavigationList;
