import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";



import "../../styles/demo.css";

export const Character = () => {
	

	return (
		<div className="container">
						
			<Link to="/">
				<button className="btn btn-primary">Back home</button>
			</Link>
		</div>
	);
};
