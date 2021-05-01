<template>
		<pm-loader v-if="isLoading" />
	<div class="container" v-if="!isLoading">
		<div class="columns">
			<div class="column is-3 has-text-centered">
				<figure class="media-left">
					<p class="image">
						<img :src="track.album.images[0].url" alt="" />
					</p>
					<p>
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
							{{ track.name }}
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
import trackService from "@/util/api"
import trackMixin from "@/mixins/track"
import PmLoader from "@/components/shared/Loader"

export default {
	name: "TrackDetail",

	components: {
		PmLoader,
	},

	mixins: [trackMixin],

	data() {
		return {
			track: {},
			isLoading: false,
		}
	},

	created() {
		const id = this.$route.params.id
		this.isLoading = true
		trackService.getById(id).then(res => {
			this.track = res
			this.isLoading = false
		})
	},
}
</script>

<style lang="scss" scoped>
.columns {
	margin: 20px;
}
</style>
