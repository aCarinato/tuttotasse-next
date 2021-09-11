import { Grid, Typography, Card, CardContent } from '@material-ui/core';

const ConclusionC2 = () => {
  return (
    <Grid item xs={12} md={12}>
      <Card>
        <CardContent>
          <Typography>
            <h4>
              SOMMARIO - Rendita Catastale per immobile non di proprietá di cui
              si conoscono i dati del proprietario:
            </h4>
            <p>
              Per effettuare una visura per soggetto si dovrà avere a
              disposizione il proprio codice fiscale, nonché dovranno essere
              noti i seguenti dati del proprietario dell’immobile:
            </p>
            <ul>
              <li>Nome e cognome</li>
              <li>Data e luogo di nascita</li>
            </ul>
            <p>
              o in alternativa il suo codice fiscale.
              <br></br>Vi sono diversi portali online da cui si può effettuare
              la visura catastale per soggetto ma in questo articolo si
              suggerisce quello dell’Agenzia delle entrate. Tra le varie opzioni
              esaminate è risultata essere la soluzione più economica, con un
              costo di 1,35 euro fino a 10 unitá immobiliari per sezione
              provinciale.
              <br></br>
              <a
                href="https://sister.agenziaentrate.gov.it/CitizenIspezioni/visCondizioniUtilizzo.jsp"
                target="_blank"
                rel="noreferrer"
              >
                Link agenzia delle entrate
              </a>
            </p>
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default ConclusionC2;
