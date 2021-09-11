import { Grid, Typography, Card, CardContent } from '@material-ui/core';

const ConclusionC3 = () => {
  return (
    <Grid item xs={12} md={12}>
      <Card>
        <CardContent>
          <Typography>
            <h4>
              SOMMARIO - Rendita Catastale per immobile non di proprietá di cui
              si é a conoscenza dell&apos;indirizzo:
            </h4>
            <p>
              New caso in cui non si fosse a conoscenza del proprietario
              dell’immobile si può effettuare una ricerca per indirizzo. Per
              farlo si dovrà avere a disposizione il proprio codice fiscale e i
              seguenti dati dell’immobile di interesse:
            </p>
            <ul className="ul-paragragraph">
              <li>comune</li>
              <li>n. civico</li>
              <li>
                piano e l’interno (nel caso di appartamenti facenti parte di
                complessi residenziali)
              </li>
            </ul>
            <p>
              Nel caso di appartamenti, la rendita catastale totale sará data
              dalla somma di quella dell’abitazione stessa e quella di eventuali
              vani, box auto o posti auto (per esempio nel garage condominiale).
              Pertanto molteplici visure potrebbero essere necessarie, ciascuna
              per ogni singola unitá.
              <br></br>
              Sono numerosi i siti da cui poter usufruire di questo servizio.
              Come precedentemente menzionato il costo puó variare dai 4 ai 12
              euro circa in base allo specifico sito. Digitando “visura per
              indirizzo” in un qualsiasi motore di ricerca (Google, Bing, Yahoo)
              si otterranno facilmente diverse opzioni. Si fa inoltre presente
              che il sito dell’Agenzia delle entrate (utilizzato per la visura
              per soggetto) non fornisce il servizio di ricerca per indirizzo.
              <br></br>
              Va inoltre detto che per effettuare questa visura è bene conoscere
              l’indirizzo in maniera precisa ed assicurarsi che non vi siano
              discrepanze con i dati riportati nei documenti in catasto.
              Talvolta può accadere che un numero civico possa venire aggiornato
              ma i corrispondenti dati catastali no. Per nuove costruzioni
              invece l’esatto numero civico può non essere ancora stato
              assegnato. Per queste ragioni la visura per indirizzo puó talvolta
              rivelarsi un processo meno immediato rispetto alla visura per
              soggetto.
            </p>
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default ConclusionC3;
