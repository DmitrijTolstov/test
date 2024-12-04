<script>
</script>
<template>
	<div class="sliderFilter">
		<p class="sliderFilter_text">от</p>
		<input type="text" placeholder='5 500 ₽'>
	</div>
</template>
<style scoped lang='scss'>
@import '@/assets/vars';

.sliderFilter {
	display: flex;
	gap: 6px;
	align-items: center;
	border: 1px solid $color-border;
	padding-block: 10px;
	padding-inline: 5px;
	margin-block-start: 16px;
	border-radius: 4px;
	max-width: 120px;

	&_text {
		font-size: $small-font;
		color: $color-font-second ;
	}

	input {
		width: 100%;


		&::placeholder {
			color: $color-font-main;
		}
	}
}
</style>