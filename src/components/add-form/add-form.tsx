import { useState } from "react";
import "./add-form.css";
import { InputForm } from "./input-field";
import { SubmitButton } from "./submit-button";
function AddForm() {
	const [tasks, setTasks] = useState<string[]>([]);
	const [input, setInput] = useState<string>("");
	return (
		<form className="AddForm" onSubmit={(e) => e.preventDefault()}>
			<InputForm
				tasks={tasks}
				setTasks={setTasks}
				setInput={setInput}
				input={input}
			/>
			<SubmitButton tasks={tasks} setTasks={setTasks} input={input} />
		</form>
	);
}

export default AddForm;
