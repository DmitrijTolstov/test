<script>
import FiltterSize from './FiltterSize.vue';
import BrandFilter from './UIComponents/BrandFilter.vue';
import CategoryFilter from './UIComponents/categoryFilter.vue';
import FilterPrice from './UIComponents/FilterPrice.vue';


export default {
	name: 'TheFilter',
	components: {
		CategoryFilter,
		FilterPrice,
		BrandFilter,
		FiltterSize,
	},

	data() {
		return {
			category: [
				{
					name: 'Название категории',
					id: 1,
					count: 3
				},
				{
					name: 'Название категории',
					id: 2,
					count: 3
				},
				{
					name: 'Название категории',
					id: 3,
					count: 3
				}
			],

		}
	},
}
</script>
<template>
	<div class="filter">
		<details>
			<summary>Название категории</summary>
			<CategoryFilter :category='category' />
		</details>
		<div class="filter-price">
			<h3 class="filter-price_title">Цена</h3>
			<div class="filter-price-item">
				<FilterPrice />
				<FilterPrice />
			</div>
		</div>
		<BrandFilter />
		<FiltterSize />
	</div>
</template>
<style scoped lang='scss'>
.filter {
	max-width: 280px;

	&-price {
		margin-block-start: 28px;

		&-item {
			display: flex;
			align-items: center;
			gap: 42px;
			justify-content: space-between;
		}


		&_title {
			font-size: 16px;
			text-align: center;
			font-weight: 700;
		}
	}

	details {
		cursor: pointer;

		summary {
			font-size: 16px;
		}
	}

}
</style>