import { useState } from "react";

export function Years() {
    const [cittadino, setCittadino] = useState({
        username: '',
        age: 10
    });

    const handleChange = (event) => {
        const name = event.target.name; // "username"
        const value = event.target.value // tombolini;
        const cittadinoPartial = { 
            ...cittadino, 
            [name]: value // username: "tombolini"
        };
        console.log(cittadinoPartial)
        setCittadino(cittadinoPartial)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("type submit" + cittadino.age, cittadino.username)    
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Enter your name:
                <input
                    type="text"
                    name="username"
                    value={cittadino.username}
                    onChange={handleChange}
                />
            </label>
            <label>Enter your age:
                <input
                    type="number"
                    name="age"
                    value={cittadino.age}
                    onChange={handleChange}
                />
            </label>
            <input type="submit" />
        </form>
    )
}