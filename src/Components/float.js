import * as React from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import Pall from '../pall';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';

export default function FloatingActionButtons() {
  const [showContent, setShowContent] = React.useState(false);

  const toggleContent = () => {
    setShowContent(!showContent);
  };

  return (
    <Box
      className="pallBox"
      sx={{
        width: '50%',
        height: '100vh', 
        overflow: 'auto', 
        position: 'fixed',
        bottom: 20,
        right: 16,
        zIndex: 1000,
        '@media (max-width: 768px)': {
          width: '55%', // Adjust width to 75% for screens with a maximum width of 768px
        },
        '@media (max-width: 500px)': {
          width: '75%', // Adjust width to 75% for screens with a maximum width of 768px
        },
      }}
    >

      {showContent && (
        <div className="pallMobile" style={{ overflowY: 'auto', marginTop: '70px' }}>
          <Pall />
        </div>
      )}
      <Fab variant="extended" sx={{ position: 'absolute', top: 28, right: 16 }} onClick={toggleContent}>
        <TextSnippetIcon sx={{ m: 1, fontSize: 40 }} />
      </Fab>
      
    </Box>
  );
}
