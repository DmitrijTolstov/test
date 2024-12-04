<script>
import Button from './UIComponents/Button.vue';


export default {
	name: 'TheCard',
	components: {
		Button
	},
	props: {
		brand: String,
		text: String,
		image: String,
		oldPrice: String,
		newPrice: String,
		hit: Boolean,
		sale: Boolean,
		availability: Boolean
	}

}
</script>
<template>
	<div class="card">
		<div class="card-image">
			<div v-if='hit' class="hit">
				<p>Хит продаж</p>
				<img src="@/assets/images/icons/fire.svg" alt="">
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
	gap: 16px;
	width: calc(100% / 4);
	cursor: pointer;
	max-height: 380px;


	&:hover {

		.card-content_text {
			color: $color-font-hover
		}
	}

	img {
		width: 100%;
		height: 100%;
	}

	&-image {
		position: relative;

		.hit {
			position: absolute;
			align-items: center;
			border-radius: 4px;
			content: '';
			top: 12px;
			left: 12px;
			display: flex;
			gap: 4px;
			background-color: $color-white;
			padding: 8px;

			img {
				width: 15px;
				height: 15px;
			}
		}

		.sale {
			position: absolute;
			border-radius: 4px;
			content: '';
			bottom: 12px;
			left: 12px;
			background-color: $color-brand;
			color: $color-white;
			padding-block: 6px;
			padding-inline: 10px;
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
			-webkit-line-clamp: 2;
			-webkit-box-orient: vertical;
			transition: color .3s ease;
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

		&__availability {
			border-color: $color-border ;
			color: $color-font-second !important;
		}
	}
}
</style>