import React, { useState } from 'react'
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

function MyButton() {
    const [count, setCount] = useState(0)
    return (
      <Stack spacing={2} direction="row">
      <Button 
        sx={{ backgroundColor: 'green', color: 'white' }}
         variant="Contained" onClick={() => setCount(count +1)} > Click Me! {count}
      </Button>
      </Stack>
    )
  }

  export default MyButton