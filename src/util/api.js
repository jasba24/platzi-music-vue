import trae from "trae"
const BASE_URL = "https://platzi-music-api.herokuapp.com/"

const platziMusicService = trae.create({
	baseUrl: BASE_URL,
})

const trackService = {}

trackService.search = function(q) {
	const type = "track"

	return platziMusicService
		.get("/search", {
			params: { q, type },
		})
		.then(res => res.data)
}

trackService.getById = function(id) {
	return platziMusicService.get(`/tracks/${id}`).then(res => res.data)
}

export default trackService
