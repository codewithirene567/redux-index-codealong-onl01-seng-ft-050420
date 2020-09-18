import React, { Component } from 'react';
import { connect } from 'react-redux';
import Todo from './Todo'
 
class TodosContainer extends Component {
 
    renderTodos = () => this.props.todos.map((todo, id) => <Todo key = {id} text = {todo} />)
    //defining a method that will take the prop of todo a child component and 
    //will map it by grabbing the text of each of the todo
  render() {
      console.log("this worked")
      
    return(
      <div>
          {this.renderTodos()}
      </div>
    );
  }
};
 
const mapStateToProps = state => {
    return {
        todos: state.todos
    }
}

export default connect(mapStateToProps)(TodosContainer);