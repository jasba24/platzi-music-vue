<template>
	<section class="section">
		<nav class="navbar">
			<div class="container mb-20">
				<input
					type="text"
					:placeholder="$t('input')"
					class="input is-large"
					v-model="searchQuery"
					@keyup.enter="search"
				/>
				<a @click.prevent="search" class="button is-info is-large">{{
					$t("search")
				}}</a>
				<a class="button is-danger is-large">&times;</a>
			</div>
		</nav>
		<transition name="move">
			<pm-notification :hasData="hasData">
				<template v-slot:body v-show="showNotification">
					<p v-if="hasData">No se encontraron resultados</p>
					<p v-else>{{ searchMessage }}</p>
				</template>
			</pm-notification>
		</transition>
		<transition name="move">
			<pm-loader v-show="isLoading"></pm-loader>
		</transition>
		<div class="container">
			<div class="columns is-multiline">
				<div
					class="column is-one-quarter"
					v-for="t in tracks"
					v-blur="t.preview_url"
					:class="{ 'is-active': t.id === selectedTrack }"
				>
					<pm-track @select="setSelectedTrack" :track="t"></pm-track>
				</div>
			</div>
		</div>
		<div class="container"></div>
	</section>
</template>

<script>
import trackService from "@/util/api"
import PmTrack from "@/components/Track"
import PmLoader from "@/components/shared/Loader"
import PmNotification from "@/components/shared/Notification"

export default {
	name: "Search",

	components: {
		PmTrack,
		PmLoader,
		PmNotification,
	},

	data() {
		return {
			searchQuery: "",
			tracks: [],
			isLoading: false,
			selectedTrack: "",
			showNotification: false,
			hasData: false,
		}
	},

	computed: {
		searchMessage() {
			return `${this.$t('find')}: ${this.tracks.length}`
		},
	},

	watch: {
		showNotification() {
			if (this.showNotification) {
				setTimeout(() => {
					this.showNotification = false
				}, 3000)
			}
		},
	},

	methods: {
		search() {
			if (!this.searchQuery) return

			this.isLoading = true

			trackService.search(this.searchQuery).then(res => {
				this.showNotification = res.tracks.total === 0
				this.hasData = res.tracks.total === 0
				this.tracks = res.tracks.items
				this.isLoading = false
			})
		},

		setSelectedTrack(id) {
			this.selectedTrack = id
		},
	},
}
</script>

<style lang="scss">
.colum {
	display: flex;
}
.is-active {
	border: 3px solid #23d160;
}
.mb-20 {
	margin-bottom: 20px;
}
</style>
