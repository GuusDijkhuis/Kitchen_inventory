import './App.css';

import Header from './components/modules/Header/Header';
import Footer from './components/modules/Footer/Footer';
import Inventory from './components/modules/Inventory/Inventory';

function App() {
	return (
		<div className="App">
			<Header />
			<Inventory />
			<Footer />
		</div>
	);
}

export default App;
