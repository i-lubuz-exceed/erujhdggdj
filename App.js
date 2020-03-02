import React from 'react'
import { Add }  from './components/Add'
import { NewItem }  from './components/newItem'
import { Footer } from './components/Footer'
import './App.css'

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      todoList : [],
      inputText : '',
      switch : 'all',
      magicBox : true,
      selectedIndex: null,
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
        active : false,
        showInput : false
    }
      const newArray = [...this.state.todoList, newTodo];
      this.setState({
        todoList : newArray,
        inputText : '',
      })
    }
  }
  clickBox = (event, index) => {
    const newArray = [ ...this.state.todoList];
    newArray[index].active = event.target.checked;
    this.setState({
      todoList : newArray,
    })
  }
  onDelete = (index) => {
    const newArray = [...this.state.todoList];
    newArray.splice(index, 1)
    this.setState({
      todoList : newArray
    })
  }
  addAllButton = (event) => { 
    let newArray = [...this.state.todoList];
    this.state.todoList.map(function (currentValue) { 
      currentValue.active = event.target.checked
  })  
    this.setState({
      todoList : newArray,
      magicBox : event.target.checked,
    })   
  }
  double = (index) => {
    const newArray = [ ...this.state.todoList];
    newArray[index].showInput = true;
    this.setState({
      todoList : newArray,
    })
  }
  onInputNew = (event, index) => {
    const newArray = [ ...this.state.todoList];
    newArray[index].name = event.target.value;
    this.setState({
      todoList : newArray,
    })
  }
  onEnterNew = (event, index) => {
    if (event.key === "Enter") {
      this.hideInput(index)
    }
  }
  hideInput = (index) => {
    if (this.state.todoList[index].name !== ""){
      const newArray = [ ...this.state.todoList];
      newArray[index].showInput = false;
      this.setState({
        todoList : newArray,
      })
    } else {
      this.onDelete(index)
    }
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
  render() { 
    return (
      <div className= 'div_todo'>
        <h1 className= 'todos'>todos</h1>
        <div className='todo-body'>
          <Add 
          inputText= {this.state.inputText}
          magicBox= {this.state.magicBox}
          addAllButton = {this.addAllButton}
          onInput = {this.onInput} 
          onEnter = {this.onEnter}
          />
          <NewItem 
          todoList= {this.state.todoList}
          switch= {this.state.switch}
          clickBox= {this.clickBox}
          onInputNew= {this.onInputNew}
          onEnterNew= {this.onEnterNew}
          hideInput= {this.hideInput}
          double= {this.double}
          onDelete= {this.onDelete}
          />
          <Footer 
          todoList= {this.state.todoList}
          switch= {this.state.switch}
          onSelectSwitch= {this.onSelectSwitch}
          clearCompleted= {this.clearCompleted}
          />
        </div>  
      </div>
    );
  }
}
export default App;
