import React from 'react';
import { Box, Stack, Typography, Divider } from '@mui/material';
import Logo from '../assets/images/Logo.png';

const Footer = () => (
  <Box mt="80px">
     <Divider light />
    <Stack gap="40px" sx={{ alignItems: 'center' }} flexWrap="wrap" px="40px" py="24px">
      <img src={Logo} alt="logo" style={{ width: '80px', height: '41px' }} />
      <Typography>
      © {new Date().getFullYear()} Gym pro. Dhan.
      </Typography>
    </Stack>
  </Box>
);

export default Footer;
