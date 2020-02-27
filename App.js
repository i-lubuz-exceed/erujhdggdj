import React from 'react';
import './App.css';
import { array } from 'prop-types';

class App extends React.Component {
  constructor(props){
    super(props);
  this.state = {
    todoList : [],
    inputText : '',
    } 
  }
onInput = (event) => {
  this.setState({
    inputText : event.target.value
  }
  )
}

onEnter = (event) => {
  if (event.key === "Enter" && this.state.inputText !== ""){
    const newTodo= {
      name : this.state.inputText,
      active : false 
  }
    const newArray = [...this.state.todoList, newTodo]
    this.setState({
      todoList : newArray,
      inputText : '',
    })
  }
}
clickBox = (event, index) => {
  const newArray = [ ...this.state.todoList]
  newArray[index].active = event.target.checked;
  this.setState({
    todoList : newArray,
  })
}

onDelete = (index) => {
  const newArray = [...this.state.todoList]
  newArray.splice(index, 1)
  this.setState({
      todoList : newArray
  })
}

addArray = () =>{
  const mapArray = this.state.todoList.map(
    (todo, index) => {
      return(
      <p>
        <input 
        type='checkbox'
        class="strikethrough"
        checked= {todo.active}
        onChange={(event) => this.clickBox(event, index)}
        />
        <span>{todo.name}</span>
        <button 
        className={'deletebutton'} 
        onClick= {() => this.onDelete(index)}
        >Delete</button>
      </p>
    )
  }
)
  return mapArray
}

onPool = () => {
  console.log('hello')
  const onCounter = this.state.todoList.length;
  return(
    <div className= {'divFooter'}>
    <span>{onCounter} items left</span>
    <button>All</button>
    <button>Active</button>
    <button>Completed</button>
    <button className= {'clear'}>Clear Completed</button>

    </div>
    )
  }


 render() { 
  return (
    <div className = {'div_todo'}>
    <input
    className = {'add_todo'}
    value = {this.state.inputText}
    onChange = {this.onInput}
    onKeyPress= {this.onEnter} 
    placeholder= 'What needs be done'/> 
    <span>{this.addArray()}</span>
    <div>{this.onPool()}</div>
    </div>
  );
 }
}
export default App;
