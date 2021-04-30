<template>
	<pm-loader v-if="loading" />
	<div class="card" v-if="track && track.album">
		<div class="card-image">
			<figure class="image is-1by1">
				<img :src="track.album.images[0].url" alt="" />
			</figure>
		</div>
		<div class="card-content">
			<div class="media">
				<div class="media-left">
					<figure class="image is-48x48">
						<img :src="track.album.images[0].url" alt="" />
					</figure>
				</div>
				<div class="media-content">
					<p class="title is-6">
						<strong>{{ track.name }}</strong>
					</p>
					<p class="subtitle is-6">
						{{ track.artists[0].name }}
					</p>
				</div>
			</div>
			<div class="content">
				<small>{{ $filters.msToMm(track.duration_ms) }}</small>
				<nav class="level">
					<div class="level-left">
						<button
							v-blur="track.preview_url"
							@click="selectTrack"
							class="level-item button is-primary"
						>
							▶️
						</button>
						<button
							v-blur="track.preview_url"
							@click="goToTrack(track.id)"
							class="level-item button is-warning"
						>
							🌎
						</button>
					</div>
				</nav>
			</div>
		</div>
	</div>
</template>

<script>
import PmLoader from "@/components/shared/Loader"

export default {
	components: {
		PmLoader,
	},

	props: {
		track: { type: Object, required: true },
		loading: Boolean,
	},

	methods: {
		selectTrack() {
			if (!this.track.preview_url) {
				return
			}
			this.$emit("select", this.track.id)
		},

		goToTrack(id) {
			if (!this.track.preview_url) {
				return
			}
			this.$router.push(`/track/${id}`)
		},
	},
}
</script>
