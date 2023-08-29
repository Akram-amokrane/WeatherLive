<template>
	<main
		class="w-full sm:w-1/2 md:w-1/4 flex flex-col gap-8 justify-start items-center bg-white/40 dark:bg-white/40 rounded-2xl drop-shadow-2xl p-4">
		<div class="fixed px-4 w-full z-40">
			<SearchItem />
		</div>
		<div class="w-full h-full mt-20">
			<WeatherItem />
		</div>
	</main>
</template>
<script setup lang="ts">
import WeatherItem from "@/components/WeatherItem.vue";
import SearchItem from "../components/SearchItem.vue"

</script>