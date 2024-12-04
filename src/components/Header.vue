<script>
import Button from './UIComponents/Button.vue';
import MobileSearchInput from './MobileSearchInput.vue';
import SearchInput from './UIComponents/SearchInput.vue';


export default {
	name: "TheHeader",
	components: {
		Button,
		SearchInput,
		MobileSearchInput
	},

}
</script>
<template>
	<header class="header">
		<nav class="nav">
			<p class="nav-logo">Logo</p>
			<Button class='header-btn' :title='"Каталог"' />
			<SearchInput />
			<ul class="nav-links">
				<li>
					<a class='nav_link'>Информация о компании</a>
				</li>
				<li>
					<a class='nav_link'>Контакты</a>
				</li>
				<li>
					<a class='nav_link'>Полезные ссылки</a>
				</li>
			</ul>
		</nav>
		<MobileSearchInput class='mobile' />
	</header>
</template>
<style scoped lang='scss'>
@import '@/assets/vars';

.header {
	padding-block: 12px;

	.nav {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 24px;

		&-logo {
			margin-inline-end: 8px;
		}

		&-links {
			display: flex;
			gap: 20px;
			min-width: 400px;
		}

	}

	&-btn {
		color: $color-font-main !important;
	}

	.mobile {
		display: none;
	}
}



@media(max-width:375px) {
	.header {

		.nav {
			display: none;
		}

		.mobile {
			display: flex;
		}
	}

}
</style>