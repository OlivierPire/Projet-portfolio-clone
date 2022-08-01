import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Series from "./Pages/Series";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" exact element={<Home />} />
				{/* <Route path="/series" exact element={<Series />} /> */}
			</Routes>
		</BrowserRouter>
	);
}

export default App;
