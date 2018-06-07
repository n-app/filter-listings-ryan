import React from 'React';

const BedroomsCounter = (props) => {
  return (
    <div>
      <div>
        <span>Beds</span>
        <button id='decrease-btn' onClick={props.decreaseBedCount}>-</button>
        <span id='bed-count'>{props.bedMin}+</span>
        <button id='increase-btn' onClick={props.increaseBedCount}>+</button>
      </div>

      <button onClick={()=>props.clearFilter('BedroomsCounter')}>
        Clear
      </button>

      <button onClick={props.applyFilters}>
        Apply
      </button>
    </div>
  )
}

export default BedroomsCounter;
