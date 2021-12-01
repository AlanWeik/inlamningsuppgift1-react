
import React, {useState, useEffect } from 'react'
import axios from 'axios'

export const  StarWarsAPI2 = () => {
    const [character, setCharacter] = useState({})
    const [id, setId] = useState(2)
    const [idFromButtonClick, setIdFromButtonClick] = useState(1)

    const handleClick = () => {
        setIdFromButtonClick(id)
    }

    /*<button type="button" onClick={handleClick}> Fetch </button>*/


    useEffect(() => {
        axios
        .get(`https://swapi.dev/api/people/${idFromButtonClick}`)
        .then(res => {
            console.log(res)
            setCharacter(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    }, [idFromButtonClick])

    return(
        <div>
            <h1>Input a number & press fetch to find a character</h1>
            <input type="text" value={id} onChange={e => setId(e.target.value)} />
            <button type="button" onClick={handleClick}> Fetch </button>
            <h1>{character.name}</h1>
            <div>
                <h2>{character.length}</h2>
                <h2>Height: {character.height}</h2>
                <h2>Mass: {character.mass}</h2>
                <h2>Hair color: {character.hair_color}</h2>
                <h2>Skin color: {character.skin_color}</h2>
                <h2>Eye color: {character.eye_color}</h2>
                <h2>Birth year: {character.birth_year}</h2>
                <h2>Gender: {character.gender}</h2>

            </div>
        </div>
    )

}

export default StarWarsAPI2;