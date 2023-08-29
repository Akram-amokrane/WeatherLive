import { ref, computed, watch } from 'vue'
import { defineStore } from 'pinia'
import weatherService from '@/services/weather.service'
import type WeatherData from '@/model/weather'

export const useWeatherStore = defineStore('counter', () => {
	const location = ref("London")

	const weather = ref<WeatherData>()

	watch(location, () => {
		weatherService.getWeather(location.value).then((w) => {
			weather.value = w
			console.log(w?.current.is_day);
			document.documentElement.className = w?.current.is_day ? 'light' : 'dark'
		})
	})

	return { location, weather }
})
