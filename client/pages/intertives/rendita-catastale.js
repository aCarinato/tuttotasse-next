import { useState } from "react";
import ConclusionC1 from "../../components/intertives/rendita-catastale/ConclusionC1";
import ConclusionC2 from "../../components/intertives/rendita-catastale/ConclusionC2";
import ConclusionC3 from "../../components/intertives/rendita-catastale/ConclusionC3";
import ConclusionC4 from "../../components/intertives/rendita-catastale/ConclusionC4";
import ConclusionD1 from "../../components/intertives/rendita-catastale/ConclusionD1";
import ConclusionD2 from "../../components/intertives/rendita-catastale/ConclusionD2";
import ConclusionD3 from "../../components/intertives/rendita-catastale/ConclusionD3";
import RadioItems from "../../components/intertives/RadioItems";
// import { useEffect } from "react";

const RenditaCatastale = () => {

    const [selectionA, setSelectionA] = useState('')
    const [selectionB, setSelectionB] = useState('')
    const [selectionC, setSelectionC] = useState('')

    const handleSelectionA = (e) => {

        const selectedValue = e.target.value
        setSelectionA(selectedValue)
        setSelectionB('')
        setSelectionC('')
    }

    const handleSelectionB = (e) => {

        const selectedValue = e.target.value
        setSelectionB(selectedValue)
        setSelectionC('')
    }

    const handleSelectionC = (e) => {

        const selectedValue = e.target.value
        setSelectionC(selectedValue)

    }

    // useEffect(() => {
    //     const selectionSet = ['Immobile Non di Proprietá','',''] 

    //    setSelectionA(selectionSet[0])
    //    setSelectionB(selectionSet[1])
    //    setSelectionC(selectionSet[2])
    // })
    

    // setInitialSelections()

    return (
        <section>
            <div className="container-paragraph">
                <h2 id="intertive"><a className="link-h2" href="#intertive">Guida interattiva per conoscere la rendita catastale</a></h2>
                <RadioItems 
                    onChange={handleSelectionA} 
                    labelRadio='Proprietá immobile' 
                    options={['Immobile di Proprietá', 'Immobile Non di Proprietá']} 
                />

                {selectionA === 'Immobile di Proprietá' && 
                <RadioItems 
                    onChange={handleSelectionB} 
                    labelRadio='Accesso Entratel - Fisconline (SPID/CIE/CNS/Credenziali)?:' 
                    options={['Si', 'No']} 
                />
                }

                {selectionA === 'Immobile Non di Proprietá' && 
                <RadioItems 
                    onChange={handleSelectionB} 
                    labelRadio="Informazioni sull'immobile di cui é a disposizione:" 
                    options={[
                        'Proprietario (nome, cognome, data e luogo di nascita o codice fiscale)', 
                        'Indirizzo',
                        'Identificativi catastali (foglio, particella, subalterno)'
                    ]} 
                />
                }
                
                {selectionB === 'Si' && <ConclusionC1 />}

                {selectionB === 'No' &&
                <RadioItems 
                    onChange={handleSelectionC} 
                    labelRadio="Informazioni sull'immobile di cui é a disposizione:" 
                    options={[
                        'Proprietario (nome, cognome, data e luogo di nascita o codice fiscale)', 
                        'Indirizzo',
                        'Identificativi catastali (foglio, particella, subalterno)'
                    ]} 
                />
                }

                {selectionB === 'Proprietario (nome, cognome, data e luogo di nascita o codice fiscale)' && <ConclusionC2 />}

                {selectionB === 'Indirizzo' && <ConclusionC3 />}

                {selectionB === 'Identificativi catastali (foglio, particella, subalterno)' && <ConclusionC4 />}

                {selectionC === 'Proprietario (nome, cognome, data e luogo di nascita o codice fiscale)' && <ConclusionD1 />}

                {selectionC === 'Indirizzo' && <ConclusionD2 />}

                {selectionC === 'Identificativi catastali (foglio, particella, subalterno)' && <ConclusionD3 />}

            </div>
        </section>
    );
}

export default RenditaCatastale;