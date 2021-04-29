<template>
	<div class="container">
		<div class="columns">
			<div class="column is-5 is-offset-4">
				<div
					:class="{'notification is-success': !hasData, 'notification is-danger': hasData }"
				>
					<slot name="body"></slot>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		hasData: Boolean,
	},
}
</script>

<style lang="scss" scoped>
.notification {
	margin: 10px;
}
</style>
