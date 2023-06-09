import { useState } from "react";
import "./App.css";
import AddForm from "./components/add-form/add-form";
import { TaskList } from "./components/task-list/task-list";

function App() {
	const [tasks, setTasks] = useState<string[]>([]);
	return (
		<div className="App">
			<div className="App-container">
				<AddForm tasks={tasks} setTasks={setTasks} />
				<TaskList tasks={tasks} setTasks={setTasks} />
			</div>
		</div>
	);
}

export default App;
