import React, { memo } from "react";

/*
    Class Component에서는 PureComponent가 있으면,
    Function Component에서는 memo가 있음

    props가 변경이 되지 않으면 memo 안에 있는 함수가 호출되지 않는다.
*/
const HabitAddForm = memo((props) => {
  const formRef = React.createRef();
  const inputRef = React.createRef();

  const onSubmit = (event) => {
    event.preventDefault();
    const name = inputRef.current.value;
    name && props.onAdd(name);
    formRef.current.reset();
  };
  return (
    <form className="add-form" onSubmit={onSubmit} ref={formRef}>
      <input
        ref={inputRef}
        type="text"
        className="add-input"
        placeholder="Habit"
      />
      <button className="add-button">Add</button>
    </form>
  );
});

export default HabitAddForm;
