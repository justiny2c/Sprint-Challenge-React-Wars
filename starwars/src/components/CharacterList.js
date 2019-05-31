import React from 'react';
// import Character from "./Character"

function CharacterList (props){
    return (
        <div className ="character-list">
            {props.characters.map(person => {
            return (
                <div className = "person">
                    <p>{person.name}</p>
                    <p className = "birth-year">Birth: {person.birth_year}</p>
                </div>
                
            )})}
        </div>
         
    )
}

export default CharacterList