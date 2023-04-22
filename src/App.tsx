import {HashRouter, Route} from "react-router-dom";
import {Outlet, Routes} from "react-router";
import Home from "./pages/Home/Home";
import Header from "./ui/Header"
import OpeningQuiz from "./pages/Quizzes/OpeningQuiz"


export default function App() {
	return (
		<div>
			<Header />
			<HashRouter>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/OpeningQuiz' element={<OpeningQuiz />} />
				</Routes>
			</HashRouter>
		</div>
	);
}


