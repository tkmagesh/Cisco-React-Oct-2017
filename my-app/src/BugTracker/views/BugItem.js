import React from 'react';

let BugItem = ({bug, toggle}) => {
	let bugStyle = bug.isClosed ? 'bugname closed' : 'bugname';
	return (
		<li>
			<span className={bugStyle} onClick={() => toggle(bug)}>
				{bug.name}
			</span>
			<div>[{bug.isClosed.toString()}]</div>
		</li>
	);
};
export default BugItem;
