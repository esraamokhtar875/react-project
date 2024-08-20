import React from 'react';
import { CircularProgress, Box, Typography } from '@mui/material';

export default function Rating({ rate }) {
  return (
    <Box position="relative" display="inline-flex" className="bg-dark text-light rounded-circle p-2">
      <CircularProgress variant="determinate" value={rate * 10} />
      <Box
        top={0}
        left={0}
        bottom={0}
        right={0}
        position="absolute"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Typography variant="caption" component="div" color="white">
          {`${Math.round(rate * 10)}%`}
        </Typography>
      </Box>
    </Box>
  );
}