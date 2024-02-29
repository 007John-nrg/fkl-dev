import * as React from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import Pall from '../pall';

export default function FloatingActionButtons() {
  const [showContent, setShowContent] = React.useState(false);

  const toggleContent = () => {
    setShowContent(!showContent);
  };

  return (
<Box
  sx={{
    position: 'fixed',
    bottom: 20,
    right: 16,
    display: { xs: 'none', lg: 'block' }, // Show only on screens larger than lg breakpoint
    zIndex: 1000,
    '@media (max-width: 999px)': {
      display: 'block', // Show on screens with a maximum width of 999px
    },
  }}
>
  <Fab variant="extended" sx={{ pr: 4, pl: 4}} onClick={toggleContent}>
    Palladium brochures
  </Fab>
  {showContent && (
    <div className="" style={{ overflowY: 'auto' }}>
      <Pall />
    </div>
  )}
</Box>

  );
}
