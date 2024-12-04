<script>


export default {
	name: 'SearchInput',

}
</script>
<template>
	<div class="searchInput">
		<img src="@/assets/images/icons/loop.png" alt="">
		<input type='search' placeholder='Поиск по 100 000 товаров '>
	</div>
</template>
<style scoped lang='scss'>
@import '@/assets/vars.scss';

.searchInput {
	width: 100%;
	display: flex;
	align-items: center;
	position: relative;


	input {
		border: 1px solid $color-font-second;
		border-radius: $border-radius;
		padding-inline-start: 44px;
		padding-inline-end: 16px;
		min-height: 48px;
		width: 100%;
		height: 100%;

		&:focus {
			border-color: $color-brand;
		}
	}

	img {
		position: absolute;
		left: 16px;
		width: 24px;
		height: 24px;
	}
}
</style>