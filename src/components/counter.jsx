import React from "react";

const Counter = (props) => {
  const {value} = props;

  const formatValue = () => {
    return value === 0 ? "empty" : value;
  };
  const getBadgeClasses = () => {
    let classes = "badge m-2 ";
    classes += value === 0 ? "bg-warning" : "bg-primary";
    return classes;
  };

  return (
    <div>
      <span>{props.name}</span>
      <span className={getBadgeClasses()}>{formatValue()}</span>
      <button
        className='btn btn-primary btn-sm m-2'
        onClick={() => props.onIncrement(props.id)}
      >
        +
      </button>
      <button
        className='btn btn-primary btn-sm m-2'
        onClick={() => props.onDecrement(props.id)}
      >
        -
      </button>

      <button className="btn-danger btn btn-sm m-2" onClick={() => props.onDelete(props.id)}>Удалить</button>
    </div>
  );
};

export default Counter;
