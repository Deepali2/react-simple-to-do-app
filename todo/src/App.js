import React, { Component } from 'react';
import './App.css';

const ToDoItem = ({text}) => (
  <li>{text}</li>
);

class App extends Component {
  constructor(props) {
    super(props);    
    this.state={newToDo: '', todos:[]};

    this.handleSubmit = this.handleSubmit.bind(this);
  } 

  handleSubmit(e) {
    e.preventDefault();
    const todos = [...this.state.todos, this.state.newToDo];
    this.setState({todos, newToDo: ''});

  }

  render() {
    const {newToDo} = this.state;
    const todos = this.state.todos.map((todo, index) => (
      <ToDoItem key={index} text={todo}/>
    ));
    return (
      <div className="App">      
        <h1>Simple To Do App</h1>
        <form onSubmit={this.handleSubmit}>
          <input 
            type='text'
            name='newToDo'
            value={newToDo}
            placeholder='What needs to be done?'
            autoComplete='off'
            className='todo-input'
            onChange={(e) => this.setState({[e.target.name]:e.target.value})}
          />
          <button type='submit' className='save-button'>SAVE</button>
        </form>
        <div className='todo-content'>
          <ol>
            {todos}
          </ol>      
        </div>
      </div>
    );
  }
}

export default App;
