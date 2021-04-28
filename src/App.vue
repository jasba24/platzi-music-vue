<template>
	<pm-header></pm-header>

	<section class="section">
		<nav class="navbar">
			<div class="container">
				<input
					type="text"
					placeholder="Buscar canciones"
					class="input is-large"
					v-model="searchQuery"
				/>
				<a @click.prevent="search" class="button is-info is-large">Buscar</a>
				<a class="button is-danger is-large">&times;</a>
			</div>
		</nav>
		<pm-loader v-show="isLoading"></pm-loader>
		<div class="container">
			<div class="columns is-multiline">
				<div class="column is-one-quarter" v-for="t in tracks">
					<pm-track :class="{ 'is-active': t.id === selectedTrack }" @select="setSelectedTrack" :track="t"></pm-track>
				</div>
			</div>
		</div>
		<div class="container">
			<p>
				<small>{{ searchMessage }}</small>
			</p>
		</div>
	</section>
	<pm-footer></pm-footer>
</template>

<script>
import trackService from "@/util/api"
import PmFooter from "@/components/layout/Footer"
import PmHeader from "@/components/layout/Header"
import PmTrack from "@/components/Track"
import PmLoader from "@/components/shared/Loader"

export default {
	name: "App",

	components: {
		PmFooter,
		PmHeader,
		PmTrack,
		PmLoader,
	},

	data() {
		return {
			searchQuery: "",
			tracks: [],
			isLoading: false,
			selectedTrack: "",
		}
	},

	computed: {
		searchMessage() {
			return `Encontrados: ${this.tracks.length}`
		},
	},

	methods: {
		search() {
			if (!this.searchQuery) return

			this.isLoading = true

			trackService.search(this.searchQuery).then(res => {
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
@import "scss/main.scss";
.colum {
	display: flex;
}
.is-active {
	border: 3px solid #23d160;
}
</style>
