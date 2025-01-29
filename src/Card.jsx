import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/Card';

export function Starlog({ stardate, logtext}) {
    return (
      <>
        <h3 style={{ textAlign: 'center', color: 'Lime' }}>{stardate}</h3>
        <p>{logtext}</p>
      </>
    )
  }

export function CardLog({ stardate, logtext }) {
    return (
      <>
        <Card sx={{
           maxWidth: 1000,
            maxHeight: 'auto',
            margin: 'auto',
            padding: .5,
            backgroundColor: 'purple',
            }}>
          <CardContent sx={{ backgroundColor: 'black', color: 'Lime', margin: 'auto', padding: 2 }}>
            <Starlog stardate={stardate} logtext={logtext}></Starlog>
          </CardContent>
        </Card>
      </>
    )
  }



