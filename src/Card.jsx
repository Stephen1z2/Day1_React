import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/Card';
import ComponentA from './ComponentA';
import ComponentB from './ComponentB';
import MyButton from './Button.jsx';
import DND_API from './DND_API.jsx';

const componentMap = {
    ComponentA: ComponentA,
    ComponentB: ComponentB,
    MyButton: MyButton,
    DND_API: DND_API
};

export function Starlog({ stardate, logtext, components }) {
    return (
      <>
        <h3 style={{ textAlign: 'center', color: 'Lime' }}>{stardate}</h3>
        <p>{logtext}</p>
        {components.map((componentName, index) => {
            const Component = componentMap[componentName];
            return Component ? <Component key={index} /> : null;
        })}
      </>
    )
}

export function CardLog({ stardate, logtext, components }) {
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
            <Starlog stardate={stardate} logtext={logtext} components={components}></Starlog>
          </CardContent>
        </Card>
      </>
    )
}



