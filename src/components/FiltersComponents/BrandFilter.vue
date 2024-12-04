<script>
import CheckboxContainer from '@/components/UIComponents/CheckboxContainer.vue';
import FilterSearchInpit from '@/components/UIComponents/FilterSearchInpit.vue';
import FiltersHeader from '@/components/UIComponents/FiltersHeader.vue';


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
			],
			inputValue: ''
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