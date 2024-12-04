<script>

export default {
	name: "TheButton",
	props: {
		title: {
			type: String,
			required: true
		},
		active: Boolean
	}
}
</script>
<template>
	<button :style='{ backgroundColor: active ? "#7397F5" : "#FFFFFF", color: active ? "#FFFFFF" : "#7397F5" }'
		class='btn'>
		{{ title }}
	</button>
</template>
<style scoped lang='scss'>
@import '@/assets/vars';

.btn {
	max-width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	padding-block: 15px;
	padding-inline: 24px;
	font-family: 'Inter';
	border: 1px solid $color-brand;
	border-radius: $border-radius;
	color: $color-font-main ;
	font-weight: 700;

}
</style>