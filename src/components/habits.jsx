import React, { Component } from "react";
import Habit from "./habit";

class Habits extends Component {
  state = {
    habits: [
      { id: 1, name: "Reading", count: 0 },
      { id: 2, name: "Running", count: 0 },
      { id: 3, name: "Coding", count: 0 },
    ],
  };

  handleIncrement = (habit) => {
    console.log(`handleIncrement ${habit.name}`);
    habit.count += 1;
    console.log(`count ${habit.count}`);
  };

  handleDecrement = (habit) => {
    console.log(`handleDecrement ${habit.name}`);
    habit.count -= 1;
  };

  handleDelete = (habit) => {
    const idx = this.state.habits.findIndex((e) => e.id === habit.id);
    let array = [...this.state.habits];
    array.splice(idx, 1);
  };

  render() {
    return (
      <ul>
        {this.state.habits.map((habit) => (
          <Habit
            key={habit.id}
            habit={habit}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onDelete={this.handleDelete}
          />
        ))}
      </ul>
    );
  }
}

export default Habits;
