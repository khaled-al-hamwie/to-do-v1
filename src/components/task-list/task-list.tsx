import { List } from "./list";
import "./task-list.css";
export function TaskList(props: any) {
	const list = props.tasks.map((task: any, i: number) => {
		return (
			<List
				task={task}
				tasks={props.tasks}
				setTasks={props.setTasks}
				index={i}
				key={i}
			/>
		);
	});
	return <ul className="task-list">{list}</ul>;
}
