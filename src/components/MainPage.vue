<script>
import Card from './Card.vue';
import Header from './Header.vue';
import Filters from './Filters.vue'
import MobileCard from './mobileCard.vue';

export default {
	name: 'MainPage',
	components: {
		Header,
		Card,
		Filters,
		MobileCard
	},
	data() {
		return {
			inputValue: ''
		}
	},
}
</script>
<template>
	<section class="mainPage">
		<div class="container">
			<Header @mobileInputValue='(value) => inputValue = value' />
			<div class="search-title">
				<p> {{ inputValue }}</p>
			</div>
			<main class="mainPage-container">
				<div class="mainPage-container-filters">
					<Filters />
				</div>
				<div class="mainPage-container-cards">
					<Card :brand='"Бренд"' :availability='true' :hit='true' :sale='true'
						:text='"Полное название товара в несколько строк для вида с обрывом в конце"'
						:new-price='"5 990"' :old-price='"5 990"' :image='"image.png"' />
					<Card :brand='"Бренд"' :availability='false' :hit='true' :sale='true'
						:text='"Полное название товара в несколько строк для вида с обрывом в конце"'
						:new-price='"5 990"' :old-price='"5 990"' :image='"image.png"' />
				</div>

				<div class="mainPage-container-mobileCards">
					<MobileCard :brand='"Бренд"' :availability='false' :sale='true'
						:text='"Полное название товара в несколько строк для вида с обрывом в конце"'
						:new-price='"5 990"' :old-price='"5 990"' :image='"image.png"' />
					<MobileCard :brand='"Бренд"' :availability='true' :sale='true'
						:text='"Полное название товара в несколько строк для вида с обрывом в конце"'
						:new-price='"5 990"' :old-price='"5 990"' :image='"image.png"' />
					<MobileCard :brand='"Бренд"' :availability='false' :sale='true'
						:text='"Полное название товара в несколько строк для вида с обрывом в конце"'
						:new-price='"5 990"' :old-price='"5 990"' :image='"image.png"' />
				</div>

			</main>
		</div>
	</section>
</template>
<style scoped lang='scss'>
@import '@/assets/vars';

.mainPage {

	&-container {
		display: flex;
		justify-content: space-between;
		gap: 24px;
		margin-block-start: 24px;

		&-cards {
			display: flex;
			gap: 24px;
			width: 80%;
			flex-wrap: wrap;
		}

		&-mobileCards {
			display: none;
			gap: 12px;
			width: 100%;
			flex-wrap: wrap;

		}
	}

	.search-title {
		height: 30px;
		display: none;
		margin-inline-start: 12px;

		p {
			font-size: 22px;
		}

	}
}





@media(max-width:375px) {
	.mainPage {

		&-container {
			display: block;
			margin-block-start: 10px;

			&-cards {
				display: none;
			}

			&-mobileCards {
				display: flex;
			}

			&-filters {
				display: none;
			}
		}

		.search-title {
			display: block;
		}


	}


}
</style>