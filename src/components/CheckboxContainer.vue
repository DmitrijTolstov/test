<script>
export default {
	name: 'checkboxContainer',
	props: {
		array: Array
	}
}
</script>
<template>
	<div class="checkboxContainer">
		<div class="checkboxContainer-item" v-for='item in array' :key='item.id'>
			<input type="checkbox" :id="item.id">
			<label :for="item.id">{{ item.name }}</label>
			<div class="count">
				<p>{{ item.count }}</p>
			</div>
		</div>
	</div>
</template>
<style scoped lang='scss'>
@import '@/assets/vars';

.checkboxContainer {
	& {
		display: flex;
		flex-direction: column;
		margin-block-start: 12px;
		gap: 12px;
		max-height: 180px;
		overflow-x: hidden;
		padding-inline-end: 10px;


		&::-webkit-scrollbar {
			width: 3px;
		}

		&::-webkit-scrollbar-track {
			background: transparent;
		}

		&::-webkit-scrollbar-thumb {
			background-color: $scroll-bar;
			border-radius: 10px;
		}

	}

	&-item {
		display: flex;
		justify-content: space-between;
	}
}
</style>