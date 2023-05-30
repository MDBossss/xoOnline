import React, { useState } from "react";
import Rooms from "../Rooms/Rooms";
import { BsGithub } from "react-icons/bs";

const JoinRoom = ({ socket, handleJoin, opponentLeft, connectedToSocket }) => {
	const [inputText, setInputText] = useState();
	const backgroundClass = connectedToSocket ? "connected" : "disconnected";

	return (
		<div className="join-room">
			<a href="https://github.com/MDBossss" target="_blank" className="github">
				<BsGithub className="icon" />
			</a>
			<div className="connection">
				<div className={`circle ${backgroundClass}`}></div>
				{connectedToSocket ? <p>Online</p> : <p>Offline</p>}
			</div>
			<h2>room code</h2>
			<input type="text" onChange={(e) => setInputText(e.target.value)} />
			<button onClick={() => handleJoin(inputText)} className="join-button">
				Join room
			</button>
			{opponentLeft && <p>Opponent left the game...</p>}
			<Rooms socket={socket} handleJoinRoom={handleJoin} />
		</div>
	);
};

export default JoinRoom;
