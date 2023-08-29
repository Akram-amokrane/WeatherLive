import SearchData from "@/model/search";
import axios from "axios";

class SearchService {

	async getAutoComplete(str: string) {
		try {
			return (await axios.get<SearchData[]>("/search.json", { params: { q: str } })).data
		} catch (error) {
			console.log(error);
		}
	}

}

export default new SearchService()