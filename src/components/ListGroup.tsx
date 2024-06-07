import { Fragment } from "react/jsx-runtime";
import { MouseEvent } from "react";

function ListGroup() {
  let items = [
    'New York',
    'San Francisco',
    'Tokyo',
    'Lodon',
    'Paris'
  ];

//Event handler
const handleClick = (event: MouseEvent) => console.log(event);

    return  (
      <Fragment>
        <h1>List</h1>
        {items.length === 0 ? <p>No Items found</p> : null}
        {items.length === 0 && <p>No Items found</p>}
        <ul className="list-group">
        {items.map((item, index) => 
          <li 
            className = "list-group-item" 
            key = {item} 
            onClick={handleClick}
            >
              {item}
            </li>
          )}
        </ul>
      </Fragment>
    )
}

export default ListGroup;