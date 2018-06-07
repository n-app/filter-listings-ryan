import React from 'React';

const BedroomsCounter = (props) => {
  return (
    <div>
      <div>
        <span>Beds</span>
        <button onClick={props.decreaseBedCount}>-</button>
        <span>{props.bedMin}+</span>
        <button onClick={props.increaseBedCount}>+</button>
      </div>

      <button onClick={props.applyFilters}>
        Apply
      </button>
    </div>
  )
}

export default BedroomsCounter;