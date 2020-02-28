import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      todoList : [],
      inputText : '',
      switch : 'all',
      selectedIndex: null,
      magicBox : true,
    } 
  }
onInput = (event) => {
  this.setState({
    inputText : event.target.value
  })
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

addAllButton = (event) => { 
  let newArray = [...this.state.todoList]
  this.state.todoList.map(function (currentValue) { 
    currentValue.active = event.target.checked
})  
  this.setState({
  todoList : newArray,
  magicBox : event.target.checked,
  })   
}


// Double = (event) => {
//   this.setState({
//     inputText : inputTextNew,
//   })
  
// }
// onEnterNew = (event) => {
//   if (event.key === "Enter" && this.state.inputText !== ""){
//     this.setState({
//       inputText : inputTextNew
//     })
// }
// }

addArray = () =>{
  const all = this.state.todoList;
  const checked = this.state.todoList.filter(word => word.active === true);
  const notChecked = this.state.todoList.filter(word => word.active === false);

  let filteredArray;
  if(this.state.switch === 'all'){
    filteredArray = all;
  }
  if(this.state.switch === 'notCompleted'){
    filteredArray = notChecked;
  }
  if(this.state.switch === 'completed'){
    filteredArray = checked;
  }
  const mapArray = filteredArray.map(
    (todo, index) => {
      console.log(this.onInputNew)
      return(
        <div className= 'clearVision'
        >
          <input 
            type='checkbox'
            className="strikethrough"
            checked= {todo.active}
            onChange={(event) => this.clickBox(event, index)}
          />
          <div
          onDoubleClick= {() =>this.Double()}
          // className= {this.state.switch === '' ? '' : ''}
          >{todo.name}</div>
          <input 
          value = {this.inputTextNew}
          onChange = {this.onInputNew}
          onKeyPress = {this.onEnterNew} 
          />
          <button 
            className={'deleteButton'} 
            onClick= {() => this.onDelete(index)}
          >X</button>
        </div>
      )
    }
  )
  return mapArray
}

clearCompleted = () => {
  const notActive = this.state.todoList.filter(word => word.active === false);
  this.setState({
    todoList : notActive
  })
}

onSelectSwitch = (val) => {
  this.setState({
    switch : val
  })
}
onPool = () => {
  const result = this.state.todoList.filter(word => word.active === false);
  const count = result.length
  const clCmp = this.state.todoList.filter(word => word.active === true);
  const clResult = clCmp.length
  return(
    <div className= {'divFooter'}>
    <span>{count} items left</span>
    <button
      className= {this.state.switch === 'all' ? 'active' : ''}
      onClick= {() => this.onSelectSwitch('all')}
    >All</button>
    <button
      className= {this.state.switch === 'notCompleted' ? 'active' : ''}
      onClick= {() => this.onSelectSwitch('notCompleted')}
    >Active</button>
    <button
      className= {this.state.switch === 'completed' ? 'active' : ''}
      onClick= {() => this.onSelectSwitch('completed')}  
    >Completed</button>
    <button 
      className= {clResult !== 0  ? 'clear' : 'clearOnVision'}
      onClick = {(event) => this.clearCompleted(event)}
    >Clear Completed</button>
    </div>
    )
  } 


 render() { 
  return (
    <div className = {'div_todo'}>
      <div>
        <h1 
        className= {'todos'}
        >todos</h1>
        <input
        type= 'checkbox'
        value= {this.state.magicBox}
        className= {'add_allbutton'}
        onChange= {(event) => this.addAllButton(event)}
        ></input>
        <input
          className = {'add_todo'}
          value = {this.state.inputText}
          onChange = {this.onInput}
          onKeyPress = {this.onEnter} 
          placeholder = 'What needs be done'
        /> 
      </div>  
      <span>{this.addArray()}</span>
      <div>{this.onPool()}</div>
    </div>
  );
 }
}
export default App;
