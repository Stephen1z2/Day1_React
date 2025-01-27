import Card from '@mui/material/Card';
import CardContent from '@mui/material/Card';

function Starlog({ stardate }) {
    return (
      <>
        <h3>Stardate: {stardate}</h3>
        <p>It's been a long stretch in deep space. The crew has adapted to the challenges of isolation, but the constant uncertainty of unexplored regions takes its toll. We’ve encountered yet another uncharted nebula, whose electromagnetic interference is wreaking havoc on our sensors. As usual, Lieutenant Hara is determined to find a way to use it to our advantage, citing that its unique properties might offer new insights into dark matter.
  
          We’ve also had a run-in with a peculiar asteroid field that defies our expectations—seemingly alive, with each fragment of rock moving in ways that no natural formation should. Lieutenant Commander Sato has theorized that we may be dealing with a long-lost ancient artificial structure, and I’ve ordered an away team to investigate. My gut says there’s more to this than meets the eye.
  
          Morale on board is high, despite the hardships. I was especially moved by Lieutenant Garcia’s personal log entry today. She reminded the crew of our shared purpose and the hope we bring to the unknown. It’s this very spirit that continues to fuel our journey into the stars. Still, even as we approach the unknown, the weight of responsibility never lessens. It’s a constant balancing act between exploration and caution, between wonder and duty.
  
          We shall press on, no matter the obstacles.
  
          End of  Log</p>
      </>
    )
  }

export function CardLog({ stardate }) {
    return (
      <>
        <Card sx={{
           maxWidth: 500,
            maxHeight: 'auto',
            margin: 'auto',
            padding: .5,
            backgroundColor: 'purple',
            }}>
          <CardContent sx={{ backgroundColor: 'black', color: 'Lime' }}>
            <Starlog stardate={stardate}></Starlog>
          </CardContent>
        </Card>
      </>
    )
  }



