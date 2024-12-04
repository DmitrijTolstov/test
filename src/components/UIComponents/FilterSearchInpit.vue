<script>

export default {
	name: 'filterSearchInput',

}
</script>
<template>
	<div class="filterSearchInput">
		<img src="@/assets/images/icons/loop.png" alt="">
		<input type='search' placeholder='Поиск '>
	</div>
</template>
<style scoped lang='scss'>
@import '@/assets/vars.scss';

.filterSearchInput {
	width: 100%;
	padding-block: 10px;
	padding-inline: 12px;
	border: 1px solid $color-font-second;
	border-radius: $border-radius;
	display: flex;
	align-items: center;
	gap: 6px;
	position: relative;
	max-height: 48px;
	margin-block-start: 12px;

	img {
		width: 12px;
		height: 12px;
	}


}
</style>