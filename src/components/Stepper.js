import React, {useRef} from 'react'
import Form from 'react-bootstrap/Form'
const Stepper = () => {
    // useref vanno dichiarati nulli poichè al caricamento della pagina questi elementi non esistono
    const cognome = useRef(null);
    const dateOB = useRef(null);
    const city = useRef(null);

    const handleRef = (ref) => {
        
        if (ref && ref.current !== null){
            ref.current.scrollIntoView({behavior: "smooth", block: "center"})
        }
    }
  return (
    <section>
        
            <div className="step d-flex justify-content-center align-items-center">    
                <div className='d-flex flex-column row'>
                    <div>
                        <label>Nome</label>  
                    </div>
                    <div className='d-flex justify-content-center align-items-center g-3'>
                        <Form.Control  type="text" placeholder='Inserisci Nome'></Form.Control>
                        <a className="btn btn-success mx-3" onClick={()=>handleRef(cognome)}>GO</a>
                    </div>
                </div> 
            </div>      
        
        <form>
            <div className="step d-flex justify-content-center align-items-center">    
                <div className='d-flex flex-column row'>
                    <div>
                        <label>Nome</label>  
                    </div>
                    <div className='d-flex justify-content-center align-items-center g-3'>
                        <Form.Control  type="text" placeholder='Inserisci Nome'></Form.Control>
                        <a className="btn btn-success mx-3" onClick={()=>handleRef(cognome)}>GO</a>
                    </div>
                </div> 
            </div>
            <div className="step d-flex justify-content-center align-items-center">    
                <div className='d-flex flex-column row'>
                    <div>
                        <label>Cognome</label>  
                    </div>
                    <div className='d-flex justify-content-center align-items-center g-3'>
                        <Form.Control  type="text" placeholder='Inserisci Cognome' ref={cognome}></Form.Control>
                        <a className="btn btn-success mx-3" onClick={()=>handleRef(dateOB)}>GO</a>
                    </div>
                </div> 
            </div>
            <div className="step d-flex justify-content-center align-items-center">    
                <div className='d-flex flex-column row'>
                    <div>
                        <label>Data di nascita</label>  
                    </div>
                    <div className='d-flex justify-content-center align-items-center g-3'>
                        <Form.Control  type="date" ref={dateOB}></Form.Control>
                        <a className="btn btn-success mx-3" onClick={()=>handleRef(city)}>GO</a>
                    </div>
                </div> 
            </div>
            <div className="step d-flex justify-content-center align-items-center">    
                <div className='d-flex flex-column row'>
                    <div>
                        <label>Città</label>  
                    </div>
                    <div className='d-flex justify-content-center align-items-center g-3'>
                        <Form.Control  type="email" placeholder='Inserisci città' ref={city}></Form.Control>
                        <button className="btn btn-success mx-3" type='submit'>GO</button>
                    </div>
                </div> 
            </div>
        </form>
    </section>
  )
}

export default Stepper