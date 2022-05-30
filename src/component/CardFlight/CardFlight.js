import * as React from 'react';
import { Box } from '@mui/system';
import Card from '@mui/material/Card';
import { Container } from '@mui/system';

import CardContent from '@mui/material/CardContent';

import Typography from '@mui/material/Typography';

const CardFlight = ({ FlightData }) => {
	return (
		<Container>
			<Card className="cardFlight" sx={{ maxWidth: 345 }}>
				<CardContent className="cardText">
					<Box sx={{ p: 2, border: '1px dashed grey' }}>
						<Typography variant="h2" component="div">
							Vuelo : {FlightData.response.flight_iata}
						</Typography>
					</Box>
					<Box>
						<Typography variant="h6" component="div">
							Partida : {FlightData.response.dep_iata}
						</Typography>
						<Typography variant="h6" component="div">
							Arribo : {FlightData.response.arr_iata}
						</Typography>
					</Box>
					<Box>
						<Typography variant="h5" component="div">
							Hora despegue : {FlightData.response.dep_time}
						</Typography>
						<Typography variant="h5" component="div">
							Hora Arribo : {FlightData.response.arr_time}
						</Typography>
					</Box>

					<Box>
						<Typography variant="h5" component="div">
							Estado : {FlightData.response.status}
						</Typography>
						<Typography variant="h5" component="div">
							Duracion : {FlightData.response.duration}
						</Typography>
						<Typography variant="h5" component="div">
							Demora : {FlightData.response.delayed}
						</Typography>
					</Box>
					<Box>
						<Typography variant="h5" component="div">
							Partió de PUERTA : {FlightData.response.dep_terminal}
						</Typography>
						<Typography variant="h5" component="div">
							Arribado en TERMINAL : {FlightData.response.arr_terminal}
						</Typography>
						<Typography variant="h5" component="div">
							Avion : {FlightData.response.aircraft_icao}
						</Typography>
					</Box>
				</CardContent>
			</Card>
		</Container>
	);
};

export default CardFlight;
