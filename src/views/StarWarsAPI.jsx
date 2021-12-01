import React, { useState, useEffect } from "react";
import axios from "axios";


export const StarWarsAPI = () => {

    const [characters, setCharacters] = useState([]);
    const [loading, setLoading] = useState(true)

    const getCharactersAndStopLoading = (dataResponse) => {
        setCharacters(dataResponse)
        setLoading(false)
    }

    const getStarWarsCharacters = () => {
        axios.get('https://swapi.dev/api/people/1/')
            .then(res => {
                console.log(res)
                setCharacters(res.data)
            })
            .then(function (response) { getCharactersAndStopLoading(response.data.results) })
            .catch(function (error) { console.log(error) })
    }

    useEffect(() => {
        getStarWarsCharacters()
    }, [])


    return (
        <div>
            <button onClick={() => console.log(characters)} >Fetch a character</button>
            <ul>
                <h1>{characters.name}</h1>

            </ul>
        </div>
    )
}


export default StarWarsAPI;

