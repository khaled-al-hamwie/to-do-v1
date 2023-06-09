import addTask from "./add-task";

export function InputForm(props: any) {
	return (
		<input
			type="text"
			id="text"
			name="text"
			placeholder="Add a Task"
			onChange={(e) => props.setInput(e.target.value)}
			onKeyDown={(e) => {
				if (e.key === "Enter") {
					addTask(props.tasks, props.setTasks, props.input);
					props.setInput("");
					e.currentTarget.value = "";
				}
			}}
		/>
	);
}
