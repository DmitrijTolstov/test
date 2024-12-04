<script>

export default {
	name: 'filterHeader',
	props: {
		title: String
	}
}
</script>
<template>

	<div class="filterHeader">
		<h3 class="filterHeader_title">{{ title }}</h3>
		<button class='filterHeader-btn'><a>Очистить</a></button>
	</div>


</template>
<style scoped lang='scss'>
@import '@/assets/vars';

.filterHeader {
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-block-start: 28px;

	&_title {
		font-weight: 700;
		font-size: 16px;
	}

	&-btn {
		color: $color-font-second;
		transition: color .4s linear;

		a {
			text-decoration: underline;
		}

		&:active {
			color: $color-font-main;
		}
	}
}
</style>