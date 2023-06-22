import { useState } from "react";
import "./add-form.css";
import { InputForm } from "./input-field";
import { SubmitButton } from "./submit-button";
function AddForm(props: any) {
	const [input, setInput] = useState<string>("");
	return (
		<form className="AddForm" onSubmit={(e) => e.preventDefault()}>
			<InputForm
				tasks={props.tasks}
				setTasks={props.setTasks}
				setInput={setInput}
				input={input}
			/>
			<SubmitButton
				tasks={props.tasks}
				setTasks={props.setTasks}
				setInput={setInput}
				input={input}
			/>
		</form>
	);
}

export default AddForm;
