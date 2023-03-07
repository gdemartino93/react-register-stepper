import React, {useRef} from 'react'

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
            <form>
            <label>Nome</label>
            <input type="text"></input>
            <a className="btn btn-success" onClick={()=>handleRef(cognome)}>GO</a>
            </form>
        </div>
        <div className="step d-flex justify-content-center align-items-center">
            <form>
            <label>cognome</label>
            <input ref={cognome} type="text"></input>
            <a className="btn btn-success" onClick={()=>handleRef(dateOB)}>GO</a>
            </form>
        </div>
        <div className="step d-flex justify-content-center align-items-center">
            <form>
            <label>eta</label>
            <input type="text" ref={dateOB}></input>
            <a className="btn btn-success" onClick={()=>handleRef(city)}>GO</a>

            </form>
        </div>
        <div className="step d-flex justify-content-center align-items-center">
            <form>
            <label>Citta</label>
            <input type="text" ref={city}></input>
            <a className="btn btn-success" onClick={()=>handleRef(city)}>Registrati</a>

            </form>
        </div>
    </section>
  )
}

export default Stepper