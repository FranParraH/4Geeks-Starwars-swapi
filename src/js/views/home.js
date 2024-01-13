import React from "react";

import "../../styles/home.css";
import Card from "../component/card";

export const Home = () => (
	<div className="text-center mt-5">
		<h1>Blog Starwars
		</h1>
		<div>
			<Card/>
		</div>
		<a href="#" className="btn btn-success">
			boton 
		</a>
	</div>
);
