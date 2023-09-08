import React, { useState, useEffect } from 'react';
import './App.css';
import ShoppingList from './Components/ShoppingList/ShoppingList';
import ShoppingForm from './Components/ShoppingForm/ShoppingForm';
function App() {
	const [shoppingList, setShoppingList] = useState([]);

	const loadData = () => {
		fetch('https://xp2cjk-8080.csb.app/api/items')
			.then((x) => x.json())

			.then((response) => {
				setShoppingList(response);
			});
	};

	useEffect(loadData, []);

	const addItem = (item, quantity) => {
		fetch('https://xp2cjk-8080.csb.app/api/items/new', {
			method: 'POST',
			body: JSON.stringify({
				item,
				quantity,
			}),

			headers: {
				'Content-type': 'application/json; charset=UTF-8',
			},
			mode: 'cors',
		}).then(loadData);
	};

	function deleteItem(id) {
		fetch('https://xp2cjk-8080.csb.app/api/items/' + id, {
			method: 'DELETE',
			headers: {
				'Content-type': 'application/json; charset=UTF-8',
			},
			mode: 'cors',
		}).then(loadData);
	}

	function updateItem(id, item, quantity) {
		fetch('https://xp2cjk-8080.csb.app/api/items/' + id, {
			method: 'PUT',
			body: JSON.stringify({
				item,
				quantity,
			}),
			headers: {
				'Content-type': 'application/json; charset=UTF-8',
				'Access-Control-Alow-Origin': '*',
			},
			mode: 'cors',
		}).then(loadData);
	}

	return (
		<div className="App">
			<header className="App-header">
				<h1>Shopping List</h1>
			</header>
			<main>
				<ShoppingForm
					className="additem"
					addItem={addItem}
					mode="Add"
				/>

				<ShoppingList
					className="deleteitem"
					shoppingList={shoppingList}
					deleteItem={deleteItem}
					updateItem={updateItem}
				/>
			</main>
		</div>
	);
}
export default App;
