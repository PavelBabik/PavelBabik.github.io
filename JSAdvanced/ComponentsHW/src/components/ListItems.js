import React, { Component } from "react";
import Item from "./Item";
import Filter from "./Filter";
import { ThemeProvider } from "styled-components";

class ListItems extends Component {
  constructor(props){
    super(props);
  }
  state = {
    title: '',
    items:this.props.items
  };
  
  updateFilter = ( {searchTerm} ) => {
    this.setState({ filter: searchTerm.value})
  };

  

  render() {
    return (
      <section>
        <h3 className="mb-3">Title</h3>
        <Filter filter={this.state.filter} onChange={this.updateFilter} />
        <ul className="mb-3 p-0">
          {this.props.items.map(i=><Item key={i.id} item={i} delFunc={this.props.delFunc} func ={this.props.func}/>)}
        </ul>
      </section>
    );
  }
}

export default ListItems;
