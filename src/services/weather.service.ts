import type WeatherData from "@/model/weather";
import axios from "axios";

class WeatherService {

	async getWeather(location: string) {
		try {
			return (await axios.get<WeatherData>("/current.json", { params: { q: location } })).data
		} catch (error) {
			console.log(error);
		}
	}

}

export default new WeatherService()