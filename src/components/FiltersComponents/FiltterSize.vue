<script>
import CheckboxContainer from '@/components/UIComponents/CheckboxContainer.vue';

export default {
	name: 'filterSize',
	components: {
		CheckboxContainer
	},
	data() {
		return {
			size: [
				{
					id: 1,
					name: 'Атрибут',
					count: 3
				},
				{
					id: 2,
					name: 'Атрибут',
					count: 3
				},
				{
					id: 3,
					name: 'Атрибут',
					count: 3
				},
				{
					id: 4,
					name: 'Атрибут',
					count: 3
				},
				{
					id: 5,
					name: 'Атрибут',
					count: 3
				},
				{
					id: 6,
					name: 'Атрибут',
					count: 3
				},
				{
					id: 7,
					name: 'Атрибут',
					count: 3
				},
				{
					id: 8,
					name: 'Атрибут',
					count: 3
				},
				{
					id: 9,
					name: 'Атрибут',
					count: 3
				},
			]
		}
	},
}
</script>
<template>
	<div class="filterSize">
		<h3 class="filterSize_title">Размер</h3>
		<CheckboxContainer :array='size' />
	</div>
</template>
<style scoped lang='scss'>
.filterSize {
	margin-block-start: 31px;

	&_title {
		font-size: 16px;
		text-align: center;
		font-weight: 700;
	}

}
</style>