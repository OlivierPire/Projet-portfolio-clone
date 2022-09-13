import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";

function App() {
	return (
		<HashRouter>
			<Routes>
				<Route path="/" exact element={<Home />} />
				<Route path="/series" exact element={<Home />} />
				<Route path="/films" exact element={<Home />} />
				<Route path="/news" exact element={<Home />} />
				<Route path="/list" exact element={<Home />} />
			</Routes>
		</HashRouter>
	);
}

export default App;
