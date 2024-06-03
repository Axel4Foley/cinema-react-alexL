import { useState } from "react";

export function CreateCinema() {
    
        const url = "http://localhost:3000/cinema"
        const [cinema, setCinema] = useState({
            nome: "",
            indirizzo: "",
            città: "",
            cap: "",
            nazione: "",
            orario_apertura: "",
            orario_chiusura: "",
            ragione_sociale: "",
            email: "",
            telefono: ""
        });

        const handleChange = (event) => {
            const { name , value } = event.target;
            const newCinema = {
                ...cinema,
                [name] : value
            };
            console.log(newCinema)
            setCinema(newCinema)
        }

        const handleSubmit = (event) => {
            event.preventDefault();
            console.log('handling submit')
            
            fetch ( url , {
                method: 'POST',
                headers : { "Content-Type" : "application/json"},
                body : JSON.stringify(cinema, null, 2)
            })
            .then(res => {
                if (res.ok) {
                    console.log("response is ok")
                }

            })
            .catch(err => console.log(err))

        }

        return(
            <>
            <h1>Create New Cinema</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Cinema Name: <input type="text" name="nome" value={cinema.nome} onChange={handleChange}/>
                </label>

                <label>
                    Cinema Address: <input type="text" name="indirizzo" value={cinema.indirizzo} onChange={handleChange}/>
                </label>

                <label>
                    Cinema City: <input type="text" name="città" value={cinema.città} onChange={handleChange}/>
                </label>

                <label>
                    Cinema CAP: <input type="text" name="cap" value={cinema.cap} onChange={handleChange}/>
                </label>

                <label>
                    Cinema Nation: <input type="text" name="nazione" value={cinema.nazione} onChange={handleChange}/>
                </label>

                <label>
                    Cinema Opening Time: <input type="text" name="orario_apertura" value={cinema.orario_apertura} onChange={handleChange}/>
                </label>

                <label>
                    Cinema Closing Time: <input type="text" name="orario_chiusura" value={cinema.orario_chiusura} onChange={handleChange}/>
                </label>

                <label>
                    Cinema Buisness Name: <input type="text" name="ragione_sociale" value={cinema.ragione_sociale} onChange={handleChange}/>
                </label>

                <label>
                    Cinema Email: <input type="text" name="email" value={cinema.email} onChange={handleChange}/>
                </label>

                <label>
                    Cinema Telephone: <input type="text" name="telefono" value={cinema.telefono} onChange={handleChange}/>
                </label>
                <div className="divSubmit">
                    <input className="submit" type="submit" />
                </div>
            </form>
            
            
            
            
            
            </>
        )
    }