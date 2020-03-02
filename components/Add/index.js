import React from 'react'
import './Add.css'

function Add(props){
	return(
		<div className= 'todo-item'>
			<input
			type= 'checkbox'
			value= {props.magicBox}
			className= 'checkbox'
			onChange= {(event) => props.addAllButton(event)}
			/>
			<input
			className = 'add_todo'
			value = {props.inputText}
			onChange = {props.onInput}
			onKeyPress = {props.onEnter} 
			placeholder = 'What needs be done'
			/> 
		</div>
	)
}
export { Add } 