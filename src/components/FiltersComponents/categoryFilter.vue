<script>

export default {
	name: 'categoryFilter',
	props: {
		category: Array
	}
}

</script>
<template>
	<div class="category">
		<div class="category-item" v-for='item in category' :key='item.id'>
			<p class='category-item_name'>{{ item.name }}</p>
			<p>{{ item.count }}</p>
		</div>
	</div>
</template>
<style scoped lang='scss'>
@import '@/assets/vars';

.category {

	&-item {
		display: flex;
		align-items: center;
		justify-content: space-between;

		&:not(:last-child) {
			margin-block-end: 14px;
		}

		&::selection {
			background-color: $selection-font ;
		}


		&_name {
			margin-inline-start: 32px;



			&:hover {
				color: $color-font-hover
			}

		}

		&:first-child {
			margin-block-start: 14px;
		}

	}
}
</style>