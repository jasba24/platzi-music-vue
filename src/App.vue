<template>
	<section class="section">
		<nav class="navbar has-shadow">
			<div class="container">
				<input
					type="text"
					placeholder="Buscar canciones"
					class="input is-large"
					v-model="searchQuery"
				/>
				<a @click.prevent="search" href="" class="button is-info is-large"
					>Buscar</a
				>
				<a href="" class="button is-danger is-large">&times;</a>
			</div>
		</nav>
		<div class="container">
			<div class="colums">
				<div class="column" v-for="t in tracks">
					{{ t.name }} - {{ t.artist }}
				</div>
			</div>
		</div>
				<p><small>{{searchMessage}}</small></p>
	</section>
</template>

<script>
const tracks = [
	{
		name: "Muchacha",
		artist: "Luis Alberto Spinetta",
	},
	{
		name: "Hoy aca en el baile",
		artist: "El pepo",
	},
	{
		name: "I was made for loving yo",
		artist: "Kiss",
	},
]
export default {
	name: "App",

	data() {
		return {
			searchQuery: "",
			tracks: [],
		}
	},

	computed: {
		searchMessage() {
			return `Encontrados: ${this.tracks.length}`
		}
	},

	methods: {
		search() {
			this.tracks = tracks
		},
	},
}
</script>

<style lang="scss">
@import "scss/main.scss";
</style>
