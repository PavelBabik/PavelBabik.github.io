import React, { Component } from "react";
import { generate as id } from "shortid";

class NewItem extends Component {
  constructor(props){
    super(props);
  }
  state = {
    value: "",
    id:'',
    packed: false
  };

  handleChange = ({ target }) => {
    this.setState({value: target.value, id: id() })
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addIt(this.state.value, this.state.id, this.state.packed)
    this.setState(  {value: "", id:"", packed: false} )
  };

  render() {
    //const { value } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="row">
          <div className="col-md-10">
            <input className="form-control mb-3" type="text" onChange={this.handleChange} value={this.state.value} />
          </div>
          <div className="col-md-2">
            <button className="btn btn-success" type={'submit'}>Add item</button>
          </div>
        </div>
      </form>
    );
  }
}

export default NewItem;
