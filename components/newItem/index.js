import React from 'react'
import './NewItem.css'

function NewItem (props){
  const all = props.todoList;
  const checked = props.todoList.filter(word => word.active === true);
  const notChecked = props.todoList.filter(word => word.active === false);

  let filteredArray;
  if(props.switch === 'all'){
    filteredArray = all;
  }
  if(props.switch === 'notCompleted'){
    filteredArray = notChecked;
  }
  if(props.switch === 'completed'){
    filteredArray = checked;
  }
  const mapArray = filteredArray.map(
    (todo, index) => {
      return(
        <div className= 'todo-item'>
          <input 
          type='checkbox'
          className= 'checkbox'
          checked= {todo.active}
          onChange= {(event) => props.clickBox(event, index)}
          />
          { todo.showInput ? 
            (
              <input 
              className = 'todo-input'
              value = {todo.name}
              onChange = {(event) => props.onInputNew(event, index)}
              onKeyPress = {(event) => props.onEnterNew(event, index)}
              onBlur= {() => props.hideInput(index)} />
            ) : (
              <div
              className = 'todo-input'
              onDoubleClick= {() => props.double(index)}
              >{todo.name}</div>
            )
          }
          <button 
          className='deleteButton'
          onClick= {() => props.onDelete(index)}
          >X</button>
        </div>
      )
    }
  )
  return mapArray
}
export { NewItem } 