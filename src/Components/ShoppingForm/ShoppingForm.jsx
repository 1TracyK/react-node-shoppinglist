import React, { useState } from 'react';

export default function ShoppingForm({
	addItem,
	mode,
	updatedId,
	itemDefault,
	quantityDefault,
	updateItem,
}) {
	const [item, setItem] = useState(itemDefault ?? '');
	const [num, setNum] = useState(quantityDefault ?? '');

	function handleSubmit(event) {
		event.preventDefault();
		if (mode === 'Add') {
			addItem(item, num);
			setItem('');
			setNum('');
		} else if (mode === 'Update') {
			updateItem(updatedId, item, num);
		}
	}

	function handleItemChange(event) {
		setItem(event.target.value);
	}

	function handleQuantityChange(event) {
		setNum(event.target.value);
	}

	return (
		<form
			action="#"
			method="POST"
			onSubmit={handleSubmit}>
			<label htmlFor="item"></label>
			<input
				className="item"
				placeholder="Name your item"
				type="text"
				id="item"
				name="item"
				value={item}
				onChange={handleItemChange}
				required
				maxLength="20"
			/>
			<label htmlFor="quantity"></label>
			<input
				className="quantity"
				placeholder="How many?"
				type="number"
				id="quantity"
				name="quantity"
				value={num}
				onChange={handleQuantityChange}
				required
				max={1000}
			/>
			<button
				className="Add"
				type="Add">
				{mode}
			</button>
		</form>
	);
}
