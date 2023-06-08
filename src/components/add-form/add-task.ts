import { useState } from "react";

const addTask = async (
	tasks: string[],
	setTasks: React.Dispatch<React.SetStateAction<string[]>>,
	input: string
) => {
	if (input.length > 0) {
		setTasks([...tasks, input]);
	}
};
export default addTask;
