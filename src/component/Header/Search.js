import React from 'react';
import { TextField } from '@mui/material';
import axios from 'axios';
import CardFlight from '../CardFlight/CardFlight';

import { useState } from 'react';
import '././Search.css';

function Search() {
	const [Flight, setFlight] = useState('');
	const [FlightData, setFlightData] = useState({});

	console.log(FlightData);

	const handleOnChange = (e) => {
		setFlight(e.target.value);
	};

	const handleOnSubmit = (e) => {
		e.preventDefault();
		const flightInput = Flight.toLocaleUpperCase().replace(/\s/g, '');
		if (flightInput) {
			axios(
				`https://airlabs.co/api/v9/flight?flight_iata=${flightInput}&api_key=97480f00-4f12-4c47-9f72-5f31e977d823`
			).then((res) => setFlightData(res.data));
		}
		setFlight('');
	};

	return (
		<>
			<div>
				<form className="Form" onSubmit={handleOnSubmit}>
					<h4>Check Flight</h4>
					<div>
						<TextField
							placeholder="Ej: EK15"
							variant="outlined"
							className="text-field"
							onChange={handleOnChange}
							value={Flight}
							label="Numero de Vuelo"
						/>
						<button className="btn">Buscar</button>
					</div>
				</form>
				{FlightData.response && <CardFlight FlightData={FlightData} />}
			</div>
		</>
	);
}

export default Search;
