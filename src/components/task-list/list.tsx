import { useState } from "react";
export function List(props: any) {
	const [isClicked, setIsClicked] = useState(false);
	return (
		<div className="list">
			<span
				className={isClicked ? "delete-icon" : "delete-icon-disable"}
				onClick={(e) => {
					let newTask = [...props.tasks];
					newTask.splice(props.index, 1);
					props.setTasks(newTask);
					setIsClicked(false);
				}}>
				x
			</span>
			<li
				className={isClicked ? "task task-focus" : "task"}
				onClick={(e) => {
					isClicked ? setIsClicked(false) : setIsClicked(true);
				}}>
				{props.task}
			</li>
		</div>
	);
}
