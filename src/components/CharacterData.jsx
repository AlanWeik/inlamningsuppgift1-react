import React from "react";

export const CharacterData = (props) => {
    const character = props.character;
    console.log(props, character);

    return (
        <div className="character-data">
            <h1>{character.name}</h1>
            <h2>{character.length}</h2>
            <h2>Height: {character.height}</h2>
            <h2>Mass: {character.mass}</h2>
            <h2>Hair color: {character.hair_color}</h2>
            <h2>Skin color: {character.skin_color}</h2>
            <h2>Eye color: {character.eye_color}</h2>
            <h2>Birth year: {character.birth_year}</h2>
            <h2>Gender: {character.gender}</h2>
        </div>
    )
}

export default CharacterData;