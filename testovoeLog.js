

let findArticle =() =>{
	let cards = document.querySelectorAll('._product')
	let articles = []

	cards.forEach(card =>{
		articles.push('0' + card.getAttribute('data-product-mini-card'))
	})

	return articles

}




	

let printParametres = () =>{
	let listItem = document.querySelectorAll('.tab-pane-product-parameter-item')
	const regex = /[а-я]{1,}/i
	const parametres = {}

listItem.forEach(item =>{
		let name = item.querySelector('.parameter-name')
		let value = item.querySelector('.parameter-value ').textContent
		
		let nameRegex = name.textContent.match(regex)[0]
		

	parametres[nameRegex] = value
})
console.log(parametres);

}



