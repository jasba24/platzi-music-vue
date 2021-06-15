import { createStore } from "vuex"
 import trackService from "@/util/api"

export default createStore({
	state: {
		track: {},
	},
	mutations: {
		setTrack(state, track) {
			state.track = track
		},
	},
	actions: {
		getTrackById(context, payload) {
			return trackService.getById(payload.id).then(res => {
				context.commit("setTrack", res)
				return res
			})
		},
	},
	getters: {
		trackTitle(state) {
			if (!state.track.name) {
				return ""
			}
			return `${state.track.name} - ${state.track.artists[0].name}`
		},
	},
})
