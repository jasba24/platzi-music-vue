<template>
	<pm-header></pm-header>
	<router-view />
	<pm-footer></pm-footer>
</template>

<script>
import PmFooter from "@/components/layout/Footer"
import PmHeader from "@/components/layout/Header"

export default {
	name: "App",

	components: {
		PmFooter,
		PmHeader,
	},
}
</script>

<style lang="scss">
@import "scss/main.scss";
</style>
