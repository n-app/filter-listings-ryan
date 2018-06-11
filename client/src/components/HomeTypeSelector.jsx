import React from 'react';

const HomeTypeSelector = (props) => {
  return (
    <div id="home-type-selector-content">
        <div>
          <div>
            <input type="checkbox" className="checkbox" name="entirePlace" id="entirePlace" onChange={props.toggleHomeType} checked={props.entirePlace}></input>
            <div className="checkbox-text">
              <label htmlFor="entirePlace">
                <span className="home-type-main-text">Entire Place</span>
                <span className="sub-text">Have a place to yourself</span>
              </label>
            </div>
          </div>
        </div>

        <div>
          <div>
            <input type="checkbox" className="checkbox" name="privateRoom" id="privateRoom" onChange={props.toggleHomeType} checked={props.privateRoom}></input>
            <div className="checkbox-text">
              <label htmlFor="privateRoom">
                <span className="home-type-main-text">Private Room</span>
                <span className="sub-text">Have your own room and share some common spaces</span>
              </label>
            </div>   
          </div>
        </div>

        <div>
          <div>
            <input type="checkbox" className="checkbox" name="sharedRoom" id="sharedRoom" onChange={props.toggleHomeType} checked={props.sharedRoom}></input>
            <div className="checkbox-text">
              <label htmlFor="sharedRoom">
                <span className="home-type-main-text">Shared Room</span>
                <span className="sub-text">Stay in a shared space, like a common room</span>
              </label>
            </div>
          </div>
        </div>

      {(props.entirePlace === false 
        && props.privateRoom === false
        && props.sharedRoom === false
      ) ? null : (
        <button className="clear-btn" name="HomeTypeSelector" onClick={props.clearFilter}>
          Clear
        </button>
      )}

      <button className="apply-btn" onClick={props.applyFilters}>
        Apply
      </button>
    </div>
  )
}

export default HomeTypeSelector;