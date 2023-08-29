<template>
	<div class="flex flex-col justify-start w-full h-full">
		<div class="flex justify-center items-end">
			<div class="text-7xl text-blue-700 cursor-pointer" @click.prevent="celUnit = !celUnit">{{ celUnit ?
				weather?.current.temp_c : weather?.current.temp_f }}°{{
		celUnit ? 'C' : 'F' }}</div>
		</div>
		<div class="flex flex-col justify-center items-center mt-12">
			<img :src="`https://${weather?.current.condition.icon}`" :alt="weather?.current.condition.text" srcset="">
			<div class="font-semibold text-base text-slate-700">{{ weather?.current.condition.text }}</div>
		</div>
		<div class="flex flex-col justify-center items-center mt-12">
			<div class="flex justify-start items-center gap-8">
				<img class="w-8 h-8" src="https://img.icons8.com/sf-regular/48/wind.png" alt="wind" />
				<div class="text-lg font-semibold text-purple-600 cursor-pointer" @click.prevent="kphUnit = !kphUnit">{{
					kphUnit ? weather?.current.wind_kph : weather?.current.wind_mph }} {{ kphUnit ? 'kph' : 'mph' }}</div>
				<div class="flex justify-center items-center gap-1 text-xs">
					<ArrowUpIcon class="w-6 h-6" :style="{ transform: `rotate(${weather?.current.wind_degree}deg)` }" />

				</div>
			</div>
			<div class="w-36 flex justify-between items-center  gap-8 mt-4">
				<img class="w-8 h-8" src="https://img.icons8.com/sf-regular/48/cloud.png" alt="cloud" />
				<div class="font-semibold text-lg text-indigo-600">{{ weather?.current.cloud }}%</div>
			</div>
			<div class="w-36 flex justify-between items-center  gap-8">
				<img class="w-8 h-8" src="https://img.icons8.com/sf-regular/48/hygrometer.png" alt="hygrometer" />
				<div class="font-semibold text-lg text-indigo-600">{{ weather?.current.humidity }}%</div>
			</div>
			<div class="w-36 flex justify-between items-center  gap-8">
				<img class="w-8 h-8" src="https://img.icons8.com/sf-regular/48/barometer-gauge.png" alt="barometer-gauge" />
				<div class="font-semibold text-lg text-indigo-600 cursor-pointer" @click="mbUnit = !mbUnit">{{
					mbUnit ? weather?.current.pressure_mb : weather?.current.pressure_in }} {{ mbUnit ? 'mb' : 'in' }}</div>
			</div>
		</div>
		<div class="w-full flex justify-between items-center mt-10 ">
			<div class="flex justify-center items-center gap-1">
				<MapPinIcon class="w-6 h-6" />
				<div class="text-sm">{{ weather?.location.name }}</div>
			</div>

			<div class="text-sm">
				{{ weather?.location.lat }},{{ weather?.location.lon }}
			</div>

			<div class="flex justify-center items-center gap-1">
				<ArrowPathRoundedSquareIcon class="w-6 h-6" />
				<div class="text-sm">{{ weather?.current.last_updated }}</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import type WeatherData from '@/model/weather';
import { useWeatherStore } from '@/stores/weather';
import { ArrowPathRoundedSquareIcon, ArrowUpIcon, MapPinIcon } from '@heroicons/vue/24/outline';
import { storeToRefs } from 'pinia';
import { computed, onMounted, ref, watch } from 'vue';


const weatherStore = useWeatherStore()
const { weather } = storeToRefs(weatherStore)

const celUnit = ref(true)
const kphUnit = ref(true)
const mbUnit = ref(true)


onMounted(() => {
	weatherStore.location = "Bejaia"
})

</script>
