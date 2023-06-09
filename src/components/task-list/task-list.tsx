import "./task-list.css";
export function TaskList(props: any) {
	const list = props.tasks.map((task: any, i: number) => {
		return (
			<div className="list" key={i}>
				<span className="delete-icon-disable">x</span>
				<li className="task">{task}</li>
			</div>
		);
	});
	return <ul className="task-list">{list}</ul>;
}
