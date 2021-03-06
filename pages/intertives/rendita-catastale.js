import { useState } from 'react';
import ConclusionC1 from '../../components/intertives/rendita-catastale/ConclusionC1';
import ConclusionC2 from '../../components/intertives/rendita-catastale/ConclusionC2';
import ConclusionC3 from '../../components/intertives/rendita-catastale/ConclusionC3';
import ConclusionC4 from '../../components/intertives/rendita-catastale/ConclusionC4';
import ConclusionD1 from '../../components/intertives/rendita-catastale/ConclusionD1';
import ConclusionD2 from '../../components/intertives/rendita-catastale/ConclusionD2';
// import ConclusionD3 from '../../components/intertives/rendita-catastale/ConclusionD3';
import RadioProprieta from '../../components/intertives/rendita-catastale/RadioProprieta';
import RadioFisconline from '../../components/intertives/rendita-catastale/RadioFisconline';
import RadioInfoDisponibili from '../../components/intertives/rendita-catastale/RadioInfoDisponibili';
import { Grid, Typography } from '@material-ui/core';
import Container from '@material-ui/core/Container';
// import RadioItems from '../../components/intertives/RadioItems';
// import Head from 'next/head';

const RenditaCatastaleUI = () => {
  const [selectionA, setSelectionA] = useState('');
  const [selectionB, setSelectionB] = useState('');
  const [selectionC, setSelectionC] = useState('');

  const handleSelectionA = (e) => {
    const selectedValue = e.target.value;
    setSelectionA(selectedValue);
    setSelectionB('');
    setSelectionC('');
  };

  const handleSelectionB = (e) => {
    const selectedValue = e.target.value;
    setSelectionB(selectedValue);
    setSelectionC('');
  };

  const handleSelectionC = (e) => {
    const selectedValue = e.target.value;
    setSelectionC(selectedValue);
  };

  return (
    <Container>
      <Typography>
        <h1>Rendita Catastale</h1>
        <h2>
          <a href="#intertive">
            Guida interattiva per conoscere la rendita catastale
          </a>
        </h2>
      </Typography>
      <Grid container>
        <RadioProprieta value={selectionA} onRadioChange={handleSelectionA} />

        {selectionA === 'Immobile di Propriet??' && (
          <RadioFisconline
            value={selectionB}
            onRadioChange={handleSelectionB}
          />
        )}

        {selectionA === 'Immobile Non di Propriet??' && (
          <RadioInfoDisponibili
            value={selectionB}
            onRadioChange={handleSelectionB}
          />
        )}

        {selectionB === 'Si' && <ConclusionC1 />}

        {selectionB === 'No' && (
          <RadioInfoDisponibili
            value={selectionC}
            onRadioChange={handleSelectionC}
          />
        )}

        {selectionB ===
          'Proprietario (nome, cognome, data e luogo di nascita o codice fiscale)' && (
          <ConclusionC2 />
        )}

        {selectionB === 'Indirizzo' && <ConclusionC3 />}

        {selectionB ===
          'Identificativi catastali (foglio, particella, subalterno)' && (
          <ConclusionC4 />
        )}

        {selectionC ===
          'Proprietario (nome, cognome, data e luogo di nascita o codice fiscale)' && (
          <ConclusionD1 />
        )}

        {selectionC === 'Indirizzo' && <ConclusionD2 />}

        {selectionC ===
          'Identificativi catastali (foglio, particella, subalterno)' && (
          <ConclusionC4 />
        )}
      </Grid>
    </Container>
  );
};

export default RenditaCatastaleUI;
