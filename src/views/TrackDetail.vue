<template>
	<pm-loader v-if="isLoading" />
	<div class="container" v-if="track && track.album && !isLoading">
		<div class="columns">
			<div class="column is-3 has-text-centered">
				<figure class="media-left">
					<p class="image">
						<img :src="track.album.images[0].url" alt="" />
					</p>
					<p class="button-bar">
						<a class="button is-primary">
							<span class="icon" @click="selectTrack">▶️</span>
						</a>
					</p>
				</figure>
			</div>
			<div class="column is-8">
				<div class="panel">
					<div class="panel-heading">
						<h1 class="title">
							{{ trackTitle }}
						</h1>
					</div>
					<div class="panel-block">
						<article class="media">
							<div class="media-content">
								<div class="content">
									<ul v-for="(v, k) in track">
										<li>
											<strong> {{ k }}:&nbsp; </strong>
											<span>
												{{ v }}
											</span>
										</li>
									</ul>
								</div>
							</div>
							<nav class="level">
								<div class="level-left">
									<a class="level-item"></a>
								</div>
							</nav>
						</article>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { mapState, mapActions, mapGetters } from "vuex"
import trackService from "@/util/api"
import PmLoader from "@/components/shared/Loader"
import trackMixin from "@/mixins/track"

export default {
	name: "TrackDetail",

	components: {
		PmLoader,
	},

	data() {
		return {
			isLoading: false,
		}
	},

	mixins: [trackMixin],

	computed: {
		...mapState(["track"]),
		...mapGetters(["trackTitle"])
	},

	created() {
		const id = this.$route.params.id
		this.isLoading = true
		if (!this.track || !this.track.id || this.track.id !== id) {
			this.getTrackById({ id }).then(() => {
				console.log("Track Loaded ..")
				this.isLoading = false
			})
		}
	},

	methods: {
		...mapActions(["getTrackById"]),
	},
}
</script>

<style lang="scss" scoped>
.columns {
	margin: 20px;
}

.button-bar {
	margin-top: 20px;
}
</style>
