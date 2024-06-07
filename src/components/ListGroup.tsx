import { useState } from "react";
import { Fragment } from "react/jsx-runtime";

interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({items, heading, onSelectItem}: Props) {

  // Hook
  const [selectedIndex, setSelectedIndex] = useState(-1);
  
    return  (
      <Fragment>
        <h1>{heading}</h1>
        {items.length === 0 ? <p>No Items found</p> : null}
        {items.length === 0 && <p>No Items found</p>}
        <ul className="list-group">
        {items.map((item, index) => 
          <li 
            className = { selectedIndex === index ? 'list-group-item active' : "list-group-item"} 
            key = {item} 
            onClick = {() => { 
              setSelectedIndex(index) 
              onSelectItem(item);
            }}
            >
              {item}
            </li>
          )}
        </ul>
      </Fragment>
    )
}

export default ListGroup;