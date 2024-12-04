<script>
import CheckboxContainer from '../CheckboxContainer.vue';
import FilterSearchInpit from './FilterSearchInpit.vue';
import FiltersHeader from './FiltersHeader.vue';


export default {
	name: 'brandFilter',
	components: {
		FilterSearchInpit,
		CheckboxContainer,
		FiltersHeader
	},
	data() {
		return {
			brand: [
				{
					id: 10,
					name: 'Атрибут',
					count: 3
				},
				{
					id: 11,
					name: 'Атрибут',
					count: 3
				},
				{
					id: 12,
					name: 'Атрибут',
					count: 3
				},
				{
					id: 13,
					name: 'Атрибут',
					count: 3
				},
				{
					id: 14,
					name: 'Атрибут',
					count: 3
				},
				{
					id: 15,
					name: 'Атрибут',
					count: 3
				},
				{
					id: 16,
					name: 'Атрибут',
					count: 3
				},
				{
					id: 17,
					name: 'Атрибут',
					count: 3
				},
				{
					id: 18,
					name: 'Атрибут',
					count: 3
				},
			]
		}
	},

}
</script>
<template>
	<div class="brandFilter">
		<FiltersHeader :title='"Бренд"' />
		<FilterSearchInpit />
		<CheckboxContainer :array='brand' />
	</div>
</template>
<style scoped lang='scss'>
@import '@/assets/vars';
</style>