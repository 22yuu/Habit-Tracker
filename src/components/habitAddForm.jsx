import React, { Component } from "react";

class HabitAddForm extends Component {
  formRef = React.createRef();
  inputRef = React.createRef();

  onSubmit = (event) => {
    event.preventDefault();
    // form 기본 기능인 submit이 될 때 새로고침되는 것을 방지
    const name = this.inputRef.current.value;
    name && this.props.onAdd(name);
    // 습관 add 후 input value 없애기
    // this.inputRef.current.value = "";
    // 정석대로는 아래처럼
    this.formRef.current.reset();
  };
  render() {
    return (
      <form className="add-form" onSubmit={this.onSubmit} ref={this.formRef}>
        <input
          ref={this.inputRef}
          type="text"
          className="add-input"
          placeholder="Habit"
        />
        <button className="add-button">Add</button>
      </form>
    );
  }
}

export default HabitAddForm;
