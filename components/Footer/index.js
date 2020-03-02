import React from 'react'
import './Footer.css'

function Footer (props) {
	const result = props.todoList.filter(word => word.active === false);
	const count = result.length;
	const clCmp = props.todoList.filter(word => word.active === true);
	const clResult = clCmp.length;
	return(
		<div className= 'divFooter'>
			<span>{count} items left</span>
			<div className='status-buttons'>
				<button
					className= {props.switch === 'all' ? 'active' : ''}
					onClick= {() => props.onSelectSwitch('all')}
				>All</button>
				<button
					className= {props.switch === 'notCompleted' ? 'active' : ''}
					onClick= {() => props.onSelectSwitch('notCompleted')}
				>Active</button>
				<button
					className= {props.switch === 'completed' ? 'active' : ''}
					onClick= {() => props.onSelectSwitch('completed')}  
				>Completed</button>
			</div>
			<button 
				className= {clResult === 0  ? 'clearOnVision' : ''}
				onClick = {(event) => props.clearCompleted(event)}
			>Clear Completed</button>
		</div>
	)
} 
export { Footer } 