<script>
import Button from './UIComponents/Button.vue';


export default {
	name: "mobileSearch",
	components: {
		Button
	},
}
</script>
<template>
	<div class="mobileSearch">
		<img src="@/assets/images/icons/arrow-left.svg" alt="">
		<div class="mobileSearch-input">
			<input type="search" placeholder='Запрос'>
			<Button class='mobileSearch-input_btn' :title='"Найти"' :active='true' />
		</div>
	</div>
</template>
<style scoped lang='scss'>
@import '@/assets/vars';

.mobileSearch {
	display: flex;
	align-items: center;

	&-input {
		display: flex;
		width: 100%;
		position: relative;

		input {
			padding-inline-end: 95px;
			height: 48px;
			border-bottom: 1px solid $color-border;

			&:focus {
				border-color: $color-brand;
			}
		}

		&_btn {
			position: absolute;
			right: 0;
			top: 50%;
			transform: translateY(-50%);
			height: 38px;
		}
	}

	img {
		margin-inline-end: 12px;
	}
}
</style>