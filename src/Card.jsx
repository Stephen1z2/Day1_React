import Card from '@mui/material/Card';
import CardContent from '@mui/material/Card';

function Starlog({ stardate, logText }) {
    return (
      <>
        <h3 style={{ textAlign: 'center' }}>Stardate: {stardate}</h3>
        <p>{logText}</p>
      </>
    )
  }

export function CardLog({ stardate, logText }) {
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
            <Starlog stardate={stardate} logText={logText}></Starlog>
          </CardContent>
        </Card>
      </>
    )
  }



