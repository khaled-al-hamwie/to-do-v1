import addTask from "./add-task";

export function SubmitButton(props: any) {
	return (
		<input
			type="button"
			value="Add"
			onClick={(e) => {
				const inputForm = document.querySelector(
					"#text"
				) as HTMLInputElement;
				addTask(props.tasks, props.setTasks, props.input);
				if (inputForm) inputForm.value = "";
			}}
		/>
	);
}
