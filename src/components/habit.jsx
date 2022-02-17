import React, { Component } from "react";

class Habit extends Component {
  state = {
    count: 0,
  };
  handleIncrement = () => {
    // state 오브젝트 안에 있는 count를 증가 한뒤 state를 업데이트 해야함.
    this.setState({ count: this.state.count + 1 });
    /*
        this.state.count++, this.state.count += 1 처럼 카운트를 증가시켜주면 되지 않나 라는 의문을 가질 수 있는데,
        위의 방법처럼 오브젝트 안에 있는 데이터를 업데이트하게 되면 리액트에서 해당 데이터의 값이 업데이트 되었는지 안되었는지
        알 수 없다.
        그래서 꼭 리액트에서 데이터를 업데이트할 때는 setState()라는 함수를 사용해야 한다.
    */
  };
  handleDecrement = () => {
    const count = this.state.count - 1;
    this.setState({ count: count < 0 ? 0 : count });
  };
  render() {
    const { name, count } = this.props.habit;
    return (
      <li className="habit">
        <span className="habit-name">{name}</span>
        <span className="habit-count">{count}</span>
        <button
          className="habit-button habit-increase"
          onClick={this.handleIncrement}
        >
          <i class="fa-solid fa-square-plus"></i>
        </button>
        <button
          className="habit-button habit-decrease"
          onClick={this.handleDecrement}
        >
          <i class="fa-solid fa-square-minus"></i>
        </button>
        <button className="habit-button habit-delete">
          <i class="fas fa-trash"></i>
        </button>
      </li>
    );
  }
}

export default Habit;
