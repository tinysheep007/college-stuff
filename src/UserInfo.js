import React, { Component } from "react";


class UserInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      SAT: this.props.user.SAT,
      GPA: this.props.user.GPA,
    };
    this.handleOnChangeSAT = this.handleOnChangeSAT.bind(this);
    this.click = this.click.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleOnChangeGPA = this.handleOnChangeGPA.bind(this);
  }
  handleOnChangeSAT(e) {
    let sat = e.target.value;
    this.setState({
      SAT: sat,
    });
  }
  handleOnChangeGPA(e) {
    let gpa = e.target.value;
    this.setState({
      GPA: gpa,
    });
  }
  click() {
    console.log("wait");
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log("called submit");
    this.props.handleUpdateSAT(this.state.SAT, this.state.GPA);
  }
  render() {
    const { user } = this.props;
   
    return (
      <div>
        SAT: {user.SAT}
        <br />
        GPA: {user.GPA}
        <form onSubmit={this.handleSubmit}>
          <label>SAT: </label>
          <input
            value={this.state.SAT}
            onChange={this.handleOnChangeSAT}
          ></input>
          <button>Submit</button>
          <br />
          <label>GPA: </label>
          <input
            value={this.state.GPA}
            onChange={this.handleOnChangeGPA}
          ></input>
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default UserInfo;
