function addListItem() {
	let item = $('#itemTextBox').val();

	if(item !== "") {
		let itemTemplate =
		`<li class="listItem">
			<h2>${item}</h2>
			<button class="checkButton">Check</button>
			<button class="deleteButton">Delete</button>
		</li>`;

		$('#shoppingList').append(itemTemplate);
		$('#itemTextBox').val("");

		let checkButton = $(".checkButton:last");

		checkButton.on("click", event =>{
			checkButton.siblings('h2').toggleClass('checked');
		});

		let deleteButton = $(".deleteButton:last");

		deleteButton.on("click", event =>{
			deleteButton.parent().remove();
		});
	}
}

$("#addButton").on("click", event=>{
	event.preventDefault();

	addListItem();
});