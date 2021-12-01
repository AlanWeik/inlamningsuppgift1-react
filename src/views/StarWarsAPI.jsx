import React, { useState, useEffect } from "react";
import axios from "axios";


export const StarWarsAPI = () => {

    const [characters, setCharacters] = useState([]);
    const [loading, setLoading] = useState(true)
    const [id, setId] = useState(1)

    const getCharactersAndStopLoading = (dataResponse) => {
        setCharacters(dataResponse)
        setLoading(false)
    }

    const getStarWarsCharacters = () => {
        axios.get(`https://swapi.dev/api/people/${id}`)
            .then(res => {
                console.log(res)
                setCharacters(res.data)
            })
            .then(function (response) { getCharactersAndStopLoading(response.data.results) })
            .catch(function (error) { console.log(error) })
    }

    useEffect(() => {
        getStarWarsCharacters()
    }, [id])

    /*<button type="button" onClick={handleClick}> Fetch </button>*/

    return (
        <div>
            <h1>Input a number to find a character</h1>
            <input type="text" value={id} onChange={e => setId(e.target.value)} />
            <h1>{characters.name}</h1>
            <h2>Height: {characters.height}</h2>
            <h2>Mass: {characters.mass}</h2>
            <h2>Hair color: {characters.hair_color}</h2>
            <h2>Skin color: {characters.skin_color}</h2>
            <h2>Eye color: {characters.eye_color}</h2>
            <h2>Birth year: {characters.birth_year}</h2>
            <h2>Gender: {characters.gender}</h2>
        </div>
    )
}


export default StarWarsAPI;

