<template>
	<div class="w-full relative flex flex-col justify-start items-center">
		<div class="w-full relative flex justify-center items-center">
			<input type="text" placeholder="Location" v-model="searchValue"
				class="peer w-full px-2 py-3 bg-slate-100/40 text-slate-600 placeholder:text-slate-600 rounded-2xl outline-none hover:bg-slate-200/60 focus:border-2 border-purple-400 duration-300 transition-colors">
			<MagnifyingGlassIcon class="w-7 h-7 absolute right-2 peer-focus:text-purple-700" />
		</div>
		<div class="w-[95%] max-h-52 bg-slate-50/40 rounded-b-2xl overflow-y-auto scale-y-0 origin-top"
			:class="{ 'scale-y-100': showAutoComplete }">
			<div @click="setSelectedValue(s.name)"
				class="w-full flex justify-start items-center gap-3 p-2 hover:bg-slate-100/40 cursor-pointer"
				v-for="s in data" :key="s.id">
				<MapPinIcon class="w-6 h-6" />
				<div class="flex flex-col w-full">
					<div class="flex justify-between items-center w-full">
						<div class="flex justify-between items-center gap-3">
							<div>{{ s.name }}</div>
							<ChevronRightIcon class="w-4 h-4" />
							<div>{{ s.region }}</div>
							<ChevronRightIcon class="w-4 h-4" />
							<div>{{ s.country }}</div>
						</div>
					</div>
					<div class="flex  items-center gap-2 text-xs font-light text-slate-400">
						<div>Lat : {{ s.lat }}</div>
						<div>Lon : {{ s.lon }}</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { MagnifyingGlassIcon, MapPinIcon, ChevronRightIcon } from "@heroicons/vue/24/outline"
import SearchData from "../model/search"
import SearchService from "@/services/search.service";
import { ref, watch } from "vue";
import { useWeatherStore } from "@/stores/weather";


const showAutoComplete = ref(false)
const data = ref<SearchData[]>()
const searchValue = ref("")
const selected = ref("")
const weatherStore = useWeatherStore()


function getAutoComplete() {
	if (searchValue.value != "") {
		SearchService.getAutoComplete(searchValue.value).then((d) => {
			data.value = d
			showAutoComplete.value = true
		})

	} else {
		showAutoComplete.value = false
	}
}

function setSelectedValue(v: string) {
	selected.value = v
	weatherStore.location = v
	showAutoComplete.value = false
}

watch(searchValue, () => {
	getAutoComplete()
})

</script>

