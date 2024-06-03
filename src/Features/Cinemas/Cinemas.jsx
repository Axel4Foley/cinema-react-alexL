import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export function Cinemas() {
    const [cinemas, setCinemas] = useState()
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState()

    useEffect(() => {
        fetch("http://localhost:3000/cinema")
            .then(res => res.json())
            .then(res => {
                setCinemas(res)
                setLoading(false)
            })

            .catch(err => {
                setError(err)
                setLoading(false)
            })
    },[])

    return (
        <>
        <div style={{width:"100%"}}>
            <h1>Lista dei Cinema</h1>
            {loading && 
                <p>Sto caricando i dati</p>
            }

            {error &&
                <p>Si è verificato un errore durante la chiamata, riprovare!</p>
            }

            {cinemas &&
            cinemas.map((c)=> {
                return (
                    <div style={{width:"100%", display:"flex", alignItems:"baseline", justifyContent:"center"}} key={c.id}>
                        <Link to={String(c.id)}>
                            <button style={{margin:"10px"}}>
                                
                                    {c.nome + ", " + c.indirizzo + ", " + c.città }
                                
                            </button>
                        </Link>
                        

                    </div>
                )

            })
            }

            <button>
                <Link to={"create"}>Crea nuovo cinema</Link>
            </button>


            <button>
                <Link to={"/"}>Torna alla home</Link>
            </button>

        </div>
        </>
    )
}