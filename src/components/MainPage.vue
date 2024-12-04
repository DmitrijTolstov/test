<script>
import Card from './Card.vue';
import Header from './Header.vue';
import Filters from './Filters.vue'

export default {
	name: 'MainPage',
	components: {
		Header,
		Card,
		Filters
	},
	data() {
		return {
		}
	},
}
</script>
<template>
	<section class="mainPage">
		<div class="container">
			<Header />
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
		}
	}
}





@media(max-width:375px) {
	.mainPage {

		&-container {
			display: block;

			&-cards {
				width: 100%;
			}

			&-filters {
				display: none;
			}
		}


	}


}
</style>