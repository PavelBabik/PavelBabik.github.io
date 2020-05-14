import React, { Component } from "react";
import NewItem from "./components/NewItem";
import ListItems from "./components/ListItems";
import { defaultState } from "./data";

const list = defaultState;

class App extends Component {
  constructor() {
    super();
  }
  state={
    items: []
  }

  addItems = (val, id, pack) => {
    const item= {value: val, id: id, packed: pack}
    this.setState( ({items} )=>{
      return{
        items: [item, ...items]
      }
    })
  }
  changePack = (e) => {
    this.setState({ packed: e })
  }

  deleteItem = (id) => {
    this.setState(({ items }) => ({
      items: items.filter(item => item.id !== id)
    }));
  }

  render() {
    return (
      <div className="container py-3">
        <NewItem addIt= { this.addItems }/>
        <div className="row">
          <div className="col-md-5">
            <ListItems items={this.state.items.filter(v => v.packed === false)} delFunc={this.deleteItem} func={this.changePack}/>
          </div>
          <div className="offset-md-2 col-md-5">
            <ListItems items={this.state.items.filter(v => v.packed === true)} delFunc={this.deleteItem} func={this.changePack}/>
            <button onClick={this.allUnpac} className="btn btn-danger btn-lg btn-block">
              Mark All As Unpacked
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
