import React, { useState, useEffect } from "react";
import CharacterData from "../components/CharacterData";
import axios from "axios";


export const StarWarsAPI = () => {

    const [character, setCharacters] = useState([]);
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
            <CharacterData character={character} />
        </div>
    )
}


export default StarWarsAPI;

