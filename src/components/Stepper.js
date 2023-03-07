import React, { useRef, useState } from 'react';
import Form from 'react-bootstrap/Form';

const Stepper = () => {
    const lastname = useRef(null);
    const dateOB = useRef(null);
    const city = useRef(null);
    const output = useRef(null);
    
    const [nome, setNome] = useState("");
    const [cognome, setCognome] = useState("");
    const [dataDiNascita, setDataDiNascita] = useState("");
    const [citta, setCitta] = useState("");

    const handleRef = (ref) => {
        if (ref && ref.current !== null){
            ref.current.scrollIntoView({behavior: "smooth", block: "center"})
        }
    }

    return (
        <section>
            <h1></h1>
            <div className="step d-flex justify-content-center align-items-center">    
                <div className='d-flex flex-column row'>
                    <div>
                        <label>Nome</label>  
                    </div>
                    <div className='d-flex justify-content-center align-items-center g-3'>
                        <Form.Control type="text" placeholder='Inserisci Nome' onKeyDown={(e) => setNome(e.target.value)}></Form.Control>
                        <a className="btn btn-success mx-3" onClick={() => handleRef(lastname)}>GO</a>
                    </div>
                </div> 
            </div>      
        
            <form>
                <div className="step d-flex justify-content-center align-items-center">    
                    <div className='d-flex flex-column row'>
                        <div>
                            <label>Cognome</label>  
                        </div>
                        <div className='d-flex justify-content-center align-items-center g-3'>
                            <Form.Control type="text" placeholder='Inserisci Cognome' ref={lastname} onChange={(e)=> setCognome(e.target.value)}></Form.Control>
                            <a className="btn btn-success mx-3" onDragEnter={() => handleRef(dateOB)}>GO</a>
                        </div>
                    </div> 
                </div>
                <div className="step d-flex justify-content-center align-items-center">    
                    <div className='d-flex flex-column row'>
                        <div>
                            <label>Data di nascita</label>  
                        </div>
                        <div className='d-flex justify-content-center align-items-center g-3'>
                            <Form.Control type="date" ref={dateOB} onChange={(e)=> setDataDiNascita(e.target.value)}></Form.Control >
                            <a className="btn btn-success mx-3" onClick={() => handleRef(city)}>GO</a>
                        </div>
                    </div> 
                </div>
                <div className="step d-flex justify-content-center align-items-center">    
                    <div className='d-flex flex-column row'>
                        <div>
                            <label>Città</label>  
                        </div>
                        <div className='d-flex justify-content-center align-items-center g-3'>
                            <Form.Control type="text" placeholder='Inserisci città' ref={city} onChange={(e)=> setCitta(e.target.value)}></Form.Control>
                            <a className="btn btn-success mx-3" onClick={() => handleRef(output)}>GO</a>
                        </div>
                    </div> 
                </div>



                <div className="step d-flex justify-content-center align-items-center">    
                    <div className='d-flex flex-column row'>
                        <div>
                            <label className='fw-bold fs-3'>Premendo conferma invierai i tuoi dati</label>  
                        </div>
                        <div className='d-flex justify-content-center align-items-center g-3 flex-column' ref={output}>
                            <h3>Nome: {nome}</h3> 
                            <h3>Cognome: {cognome}</h3>
                            <h3>Data di nascita: {dataDiNascita}</h3>
                            <h3>Città: {citta}</h3>
                            <button type='submit' className='btn btn-success'>Conferma</button>
                        </div>
                    </div> 
                </div>
            </form>
        </section>
    );
};

export default Stepper;