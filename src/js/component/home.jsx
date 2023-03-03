import React from "react";
import Semaforo from "./semaforo.jsx";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div className="container">
			<Semaforo/>
		</div>
	);
};

export default Home;
