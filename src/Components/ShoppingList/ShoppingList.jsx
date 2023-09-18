import React, { useState } from 'react';
import ShoppingForm from '../ShoppingForm/ShoppingForm';

function ShoppingItem(props) {
	const [isEditable, setEditable] = useState(false);

	function deleteClicked(e) {
		e.preventDefault();
		props.deleteItem(props.id);
	}

	function updateClicked(e) {
		e.preventDefault();
		setEditable((oldValue) => !oldValue);
	}

	function updateHandler(id, item, num) {
		props.updateItem(id, item, num);
		setEditable(false);
	}

	let content = (
		<>
			{props.item} ({props.quantity})
		</>
	);

	if (isEditable) {
		content = (
			<ShoppingForm
				mode="Update"
				updatedId={props.id}
				itemDefault={props.item}
				quantityDefault={props.quantity}
				updateItem={updateHandler}
			/>
		);
	}

	return (
		<li className="list-item">
			{content}
			<div item-container>
				<div item-buttons>
					<button
						onClick={deleteClicked}
						className="btn-btn-middle">
						DELETE
					</button>

					<button
						onClick={updateClicked}
						className="btn-btn-right">
						{isEditable ? 'CANCEL' : 'EDIT'}
					</button>
				</div>
			</div>
		</li>
	);
}

export default function ShoppingList({ shoppingList, deleteItem, updateItem }) {
	const itemsJsx = shoppingList.map((listItem) => (
		<ShoppingItem
			key={listItem.id}
			id={listItem.id}
			item={listItem.item}
			quantity={listItem.quantity}
			deleteItem={deleteItem}
			updateItem={updateItem}
		/>
	));

	return <ul>{itemsJsx}</ul>;
}
