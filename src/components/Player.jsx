import { useState } from "react";

export default function Player({ initisalName, symbol,isActive , onChangeName }) {
    const [isEditing, setIsEditing] = useState(false);
    const [playerName, setPlayerName] = useState(initisalName);

    function handelEditing() {
        setIsEditing((editing) => !editing);
        if (isEditing) {
            onChangeName(symbol, playerName);
        }
    }
    function handelChange(event) {
        setPlayerName(event.target.value);
    }
    let editablePlayerName = <span className="player-name">{playerName}</span>;
    let btnCaption = "Edit";
    if (isEditing) {
        editablePlayerName  = <input type="text " required value={playerName} onChange={handelChange} />
    }
    return (
        <li className={isActive?'active':undefined}>
            <span className="player">
                {editablePlayerName }
                <span className="player-symbol">{ symbol}</span>
            </span>
            <button onClick={handelEditing}>{isEditing?'Save':'Edit'}</button>
        </li>
    );
}