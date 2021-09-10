import { useState } from 'react';
import ConclusionC1 from '../../components/intertives/rendita-catastale/ConclusionC1';
import ConclusionC2 from '../../components/intertives/rendita-catastale/ConclusionC2';
import ConclusionC3 from '../../components/intertives/rendita-catastale/ConclusionC3';
import ConclusionC4 from '../../components/intertives/rendita-catastale/ConclusionC4';
import ConclusionD1 from '../../components/intertives/rendita-catastale/ConclusionD1';
import ConclusionD2 from '../../components/intertives/rendita-catastale/ConclusionD2';
import ConclusionD3 from '../../components/intertives/rendita-catastale/ConclusionD3';
import RadioProprieta from '../../components/intertives/rendita-catastale/RadioProprieta';
import RadioFisconline from '../../components/intertives/rendita-catastale/RadioFisconline';
import RadioInfoDisponibili from '../../components/intertives/rendita-catastale/RadioInfoDisponibili';
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
    <>
      <h1>Rendita material ui</h1>
      <div className="container-paragraph">
        <h2 id="intertive">
          <a className="link-h2" href="#intertive">
            Guida interattiva per conoscere la rendita catastale
          </a>
        </h2>
        <RadioProprieta value={selectionA} onRadioChange={handleSelectionA} />

        {selectionA === 'Immobile di Proprietá' && (
          <RadioFisconline
            value={selectionB}
            onRadioChange={handleSelectionB}
          />
        )}

        {selectionA === 'Immobile Non di Proprietá' && (
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
          <ConclusionD3 />
        )}
      </div>
    </>
  );
};

export default RenditaCatastaleUI;
