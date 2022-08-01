import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" exact element={<Home />} />
				<Route path="/series" exact element={<Home />} />
				<Route path="/films" exact element={<Home />} />
				<Route path="/news" exact element={<Home />} />
				<Route path="/list" exact element={<Home />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
