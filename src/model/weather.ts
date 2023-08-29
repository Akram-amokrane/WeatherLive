export default class WeatherData {
	location!: Location;
	current!: Current;
}

class Location {
	name!: string;
	region!: string;
	country!: string;
	lat!: number;
	lon!: number;
}

class Current {
	last_updated!: string;
	temp_c!: number;
	temp_f!: number;
	is_day!: boolean;
	condition!: {
		text: string,
		icon: string
	};
	wind_mph!: number;
	wind_kph!: number;
	wind_degree!: number;
	wind_dir!: string;
	cloud!: number;
	humidity!: number;
	pressure_mb!: number;
	pressure_in!: number
}