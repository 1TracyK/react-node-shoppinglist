import './App.css';
import ShoppingList from './Components/ShoppingList/ShoppingList';
import ShoppingForm from './Components/ShoppingForm/ShoppingForm';
function App() {
	return (
		<div className="App">
			<header className="App-header"></header>
			<h1>Shopping List</h1>
			<main>
				<ShoppingList />
				<ShoppingForm />
			</main>
		</div>
	);
}

export default App;
