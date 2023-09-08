import React, { useState } from 'react';
import ShoppingForm from '../ShoppingForm/ShoppingForm';

function ShoppingItem(props) {
	const [isEditable, setEditable] = useState(false);

	function deleteClicked() {
		props.deleteItem(props.id);
	}

	function updateClicked() {
		setEditable((oldValue) => !oldValue);
	}

	let content = (
		<>
			{props.item} ({props.quantity})
		</>
	);

	if (isEditable) {
		// eslint-disable-next-line no-unused-vars
		content = (
			<ShoppingForm
				mode="Update"
				updatedId={props.id}
				itemDefault={props.item}
				quantityDefault={props.quantity}
				updateItem={props.updateItem}
			/>
		);
	}

	return (
		<form className="list-item">
			<div>
				{content}
				<button className="btn-btn-left">ITEM</button>
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
		</form>
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
