import { Grid, Typography, Card, CardContent } from '@material-ui/core';

const ConclusionC1 = () => {
  return (
    <Grid item xs={12} md={12}>
      <Card>
        <CardContent>
          <Typography>
            <p>
              Il valore della rendita catastale di un
              <span>immobile di proprietá</span> si puó ricavare gratuitamente
              dal sito dell Agenzia delle Entrate presso il seguente link:
            </p>
            <a
              href="https://telematici.agenziaentrate.gov.it/Main/index.jsp"
              target="_blank"
              className="link-external-paragraph"
              rel="noreferrer"
            >
              servizio Entratel - Fisconline
            </a>
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default ConclusionC1;
