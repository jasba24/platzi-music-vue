<template>
	<pm-header></pm-header>
	<section class="section">
		<nav class="navbar has-shadow">
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
		<div class="container">
			<div class="colums">
				<div class="column" v-for="t in tracks">
					{{ t.name }} - {{ t.artists[0].name }}
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

export default {
	name: "App",

	components: {
		PmFooter,
		PmHeader,
	},

	data() {
		return {
			searchQuery: "",
			tracks: [],
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

			trackService
				.search(this.searchQuery)
				.then(res => (this.tracks = res.tracks.items))
		},
	},
}
</script>

<style lang="scss">
@import "scss/main.scss";
</style>
