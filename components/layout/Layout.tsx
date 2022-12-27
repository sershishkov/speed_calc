import React from 'react';

import { useAppSelector, useAppDispatch } from '../../store/app/hooks';
import { RootState } from '../../store/app/store';

import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';

import theme_dark from '../../mui_theme/theme_dark';
import theme_light from '../../mui_theme/theme_light';

import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const theme_state = useAppSelector(
    (state: RootState) => state.theme_state.is_dark_mode
  );

  return (
    <ThemeProvider theme={theme_state ? theme_dark : theme_light}>
      <CssBaseline />
      <Navbar />
      <Container
        sx={{
          flexGrow: 1,
          mt: '68px',
          minWidth: '360px',
          maxWidth: '900px',
          // border: '1px solid red',
        }}
      >
        <main>{children}</main>
      </Container>
      <Footer />
    </ThemeProvider>
  );
};

export default Layout;
