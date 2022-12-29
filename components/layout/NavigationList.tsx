import React, { useState } from 'react';

import List from '@mui/material/List';
import Link from '@mui/material/Link';
import ListItemButton from '@mui/material/ListItemButton';

import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import SendIcon from '@mui/icons-material/Send';

import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

import {
  links_level_1,
  links_level_2,
  links_level_3,
  links_level_4,
  links_level_5,
  links_level_6,
  links_level_7,
  links_level_8,
} from '../../constants/constants';

function NavigationList({ toggleDrawer }: { toggleDrawer: Function }) {
  const [open__links_level_1, set__open__links_level_1] =
    useState<boolean>(false);
  const [open__links_level_2, set__open__links_level_2] =
    useState<boolean>(false);
  const [open__links_level_3, set__open__links_level_3] =
    useState<boolean>(false);
  const [open__links_level_4, set__open__links_level_4] =
    useState<boolean>(false);
  const [open__links_level_5, set__open__links_level_5] =
    useState<boolean>(false);
  const [open__links_level_6, set__open__links_level_6] =
    useState<boolean>(false);
  const [open__links_level_7, set__open__links_level_7] =
    useState<boolean>(false);
  const [open__links_level_8, set__open__links_level_8] =
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
                <SendIcon />
              </ListItemIcon>
              <ListItemText primary={`${item.caption}`} />
            </ListItemButton>
          ))}
        </List>
      </Collapse>

      <ListItemButton
        onClick={() => set__open__links_level_2(!open__links_level_2)}
      >
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary='Уровень 2' />
        {open__links_level_2 ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open__links_level_2} timeout='auto' unmountOnExit>
        <List disablePadding>
          {links_level_2.map((item) => (
            <ListItemButton
              key={item.link}
              sx={{ pl: 4 }}
              component={Link}
              href={item.link}
              onClick={() => toggleDrawer(false)}
            >
              <ListItemIcon>
                <SendIcon />
              </ListItemIcon>
              <ListItemText primary={`${item.caption}`} />
            </ListItemButton>
          ))}
        </List>
      </Collapse>

      <ListItemButton
        onClick={() => set__open__links_level_3(!open__links_level_3)}
      >
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary='Уровень 3' />
        {open__links_level_3 ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open__links_level_3} timeout='auto' unmountOnExit>
        <List disablePadding>
          {links_level_3.map((item) => (
            <ListItemButton
              key={item.link}
              sx={{ pl: 4 }}
              component={Link}
              href={item.link}
              onClick={() => toggleDrawer(false)}
            >
              <ListItemIcon>
                <SendIcon />
              </ListItemIcon>
              <ListItemText primary={`${item.caption}`} />
            </ListItemButton>
          ))}
        </List>
      </Collapse>

      <ListItemButton
        onClick={() => set__open__links_level_4(!open__links_level_4)}
      >
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary='Уровень 4' />
        {open__links_level_4 ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open__links_level_4} timeout='auto' unmountOnExit>
        <List disablePadding>
          {links_level_4.map((item) => (
            <ListItemButton
              key={item.link}
              sx={{ pl: 4 }}
              component={Link}
              href={item.link}
              onClick={() => toggleDrawer(false)}
            >
              <ListItemIcon>
                <SendIcon />
              </ListItemIcon>
              <ListItemText primary={`${item.caption}`} />
            </ListItemButton>
          ))}
        </List>
      </Collapse>

      <ListItemButton
        onClick={() => set__open__links_level_5(!open__links_level_5)}
      >
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary='Уровень 5' />
        {open__links_level_5 ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open__links_level_5} timeout='auto' unmountOnExit>
        <List disablePadding>
          {links_level_5.map((item) => (
            <ListItemButton
              key={item.link}
              sx={{ pl: 4 }}
              component={Link}
              href={item.link}
              onClick={() => toggleDrawer(false)}
            >
              <ListItemIcon>
                <SendIcon />
              </ListItemIcon>
              <ListItemText primary={`${item.caption}`} />
            </ListItemButton>
          ))}
        </List>
      </Collapse>

      <ListItemButton
        onClick={() => set__open__links_level_6(!open__links_level_6)}
      >
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary='Уровень 6' />
        {open__links_level_6 ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open__links_level_6} timeout='auto' unmountOnExit>
        <List disablePadding>
          {links_level_6.map((item) => (
            <ListItemButton
              key={item.link}
              sx={{ pl: 4 }}
              component={Link}
              href={item.link}
              onClick={() => toggleDrawer(false)}
            >
              <ListItemIcon>
                <SendIcon />
              </ListItemIcon>
              <ListItemText primary={`${item.caption}`} />
            </ListItemButton>
          ))}
        </List>
      </Collapse>

      <ListItemButton
        onClick={() => set__open__links_level_7(!open__links_level_7)}
      >
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary='Уровень 7' />
        {open__links_level_7 ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open__links_level_7} timeout='auto' unmountOnExit>
        <List disablePadding>
          {links_level_7.map((item) => (
            <ListItemButton
              key={item.link}
              sx={{ pl: 4 }}
              component={Link}
              href={item.link}
              onClick={() => toggleDrawer(false)}
            >
              <ListItemIcon>
                <SendIcon />
              </ListItemIcon>
              <ListItemText primary={`${item.caption}`} />
            </ListItemButton>
          ))}
        </List>
      </Collapse>

      <ListItemButton
        onClick={() => set__open__links_level_8(!open__links_level_8)}
      >
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary='Уровень 8' />
        {open__links_level_8 ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open__links_level_8} timeout='auto' unmountOnExit>
        <List disablePadding>
          {links_level_8.map((item) => (
            <ListItemButton
              key={item.link}
              sx={{ pl: 4 }}
              component={Link}
              href={item.link}
              onClick={() => toggleDrawer(false)}
            >
              <ListItemIcon>
                <SendIcon />
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
