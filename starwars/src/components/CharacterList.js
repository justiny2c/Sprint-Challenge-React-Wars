import React from 'react';
// import Character from "./Character"

function CharacterList (props){
    return (
        <div className ="character-list">
            {props.characters.map(person => {
            return (
                <div className = "person">
                    <p>{person.name}</p>
                </div>
                
            )})}
        </div>
         
    )
}

export default CharacterList