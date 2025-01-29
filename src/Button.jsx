import React, { useState } from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

function MyButton(props) {
  const [count, setCount] = useState(0)
  
  return (
    <Stack spacing={2} direction='row'>
    <Button
    sx={{ backgroundColor: 'green', color: 'white'}}
    variant= 'Contained'
    onClick={() =>{
    if(count >= props.Max) {

    }
    else {
      setCount(count + 1)
    }}}> Press me if you dare! {count}

    </Button>
    </Stack>
  )
}


export default MyButton