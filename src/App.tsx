import "./App.css";
import AddForm from "./components/add-form/add-form";
import { TaskList } from "./components/task-list/task-list";

function App() {
	return (
		<div className="App">
			<div className="App-container">
				<AddForm />
				<TaskList />
			</div>
		</div>
	);
}

export default App;
