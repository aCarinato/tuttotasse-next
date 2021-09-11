import Link from 'next/link';
import { Grid, Typography, Card, CardContent } from '@material-ui/core';

const Intertives = () => {
  return (
    <Grid item xs={12} md={12}>
      <Card>
        <CardContent>
          <Typography>
            <Link href="/intertives/rendita-catastale">Rendita Catastale</Link>
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default Intertives;
