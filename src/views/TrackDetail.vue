<template>
	<div class="container">
		<div class="columns">
			<div class="column is-5 is-offset-4">
				<pm-track :track="track" :loading="isLoading" />
			</div>
		</div>
	</div>
</template>

<script>
import trackService from "@/util/api"
import PmTrack from "@/components/Track"
export default {
	name: "TrackDetail",

	components: {
		PmTrack,
	},

	data() {
		return {
			track: {},
			isLoading: true,
		}
	},

	created() {
		const id = this.$route.params.id
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
