<script>


export default {
	name: 'mobileCard',
	props: {
		brand: String,
		text: String,
		image: String,
		oldPrice: String,
		newPrice: String,
		sale: Boolean,
		availability: Boolean
	}
}


</script>
<template>
	<div class="card">
		<div class="card-image">
			<div v-if='!availability' class="availability">
				<p>Нет в наличии</p>
			</div>
			<img :src="require(`@/assets/images/${image}`)" alt="">
			<div v-if='sale' class="sale">
				25%
			</div>
		</div>
		<div class="card-content">
			<p class="card-content_brand">{{ brand }}</p>
			<p class="card-content_text">{{ text }}</p>
		</div>
		<div class="card-price">
			<p class="newPrice">{{ newPrice }}₽</p>
			<p class="oldPrice">{{ oldPrice }}₽</p>
		</div>
		<Button v-if='availability' class='card-btn' :title='"Купить"' />
		<Button v-else class='card-btn__availability' :title='"Сообщить о поступлении"'></Button>
	</div>
</template>
<style scoped lang='scss'>
@import '@/assets/vars';

.card {
	display: flex;
	flex-direction: column;
	gap: 4px;
	width: calc(100% / 2 - 12px);
	cursor: pointer;
	max-height: 280px;

	img {
		width: 100%;
		height: 100%;
	}

	&-image {
		position: relative;

		.availability {
			position: absolute;
			border-radius: 4px;
			margin: 0 auto;
			content: '';
			top: 10px;
			right: 15px;
			background-color: $color-white;
			padding-block: 4px;
			padding-inline: 6px;
			font-size: 12px;
		}

		.sale {
			position: absolute;
			border-radius: 4px;
			content: '';
			top: 10px;
			left: 12px;
			background-color: $color-brand;
			color: $color-white;
			padding-block: 4px;
			padding-inline: 6px;
		}
	}

	&-content {
		display: flex;
		flex-direction: column;
		gap: 8px;

		&_brand {
			color: $color-font-second;
		}

		&_text {
			text-overflow: ellipsis;
			display: -webkit-box;
			overflow: hidden;
			-webkit-line-clamp: 3;
			-webkit-box-orient: vertical;
		}

	}

	&-price {
		display: flex;
		gap: 8px;
		align-items: center;

		.newPrice {
			font-size: 16px;
		}

		.oldPrice {
			color: $color-font-second;
		}
	}

	&-btn {
		width: 75px;
	}
}
</style>