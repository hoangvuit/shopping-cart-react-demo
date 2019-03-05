import React from "react";

const colors = ["red", "green", "blue", "orange"];

class Performance extends React.Component {
  state = {
    items: Array(10000).fill(0)
  };

  deleteItem = index => {
    let items = [...this.state.items];
    items.splice(index, 1);
    this.setState({ items });
  };

  render() {
    return (
      <div>
        {this.state.items.map((item, index) => {
          const value = Math.floor(Math.random() * Math.floor(3));
          return (
            <div
              className="box"
              style={{ backgroundColor: colors[value] }}
              key={index}
              onClick={() => this.deleteItem(index)}
            >
              {index}
            </div>
          );
        })}
      </div>
    );
  }
}

export default Performance;
