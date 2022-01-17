import React, { Component } from "react";
import axios from "axios";
class FrontPage extends Component {
  constructor(props) {
    super(props);
    this.apiKey = "ww6EUqUDZIz1bv7934zbe3Aa4tISNFJ10HoBPkFu";
    this.state = {
      metaPage: "",
      total: "",
      per_Page: "",
      schoolID: [],
      schoolName: [],
    };
  }
  async componentDidMount() {
    let response = await axios.get(
      `https://api.data.gov/ed/collegescorecard/v1/schools.json?school.name=New%20York%20University&fields=id,school.name,2013.student.size&api_key=${this.apiKey}`
    );
    let dataCollectID = [];
    let dataCollectSchoolName = [];
    let data = response.data.results;
    console.log(Array.isArray(data));
    data.forEach((d) => {
      dataCollectSchoolName.push(d["school.name"]);
      dataCollectID.push(d.id);
    });
    console.log(dataCollectSchoolName);
    console.log(typeof dataCollectSchoolName);

    this.setState({
      schoolID: dataCollectID,
      schoolName: dataCollectSchoolName,
    });
  }
  render() {
    let schoolsContent = "";

    return (
      <div>
        <div>metadata: {this.state.metaInfo}</div>
        <div>data:{this.state.dataInfo}</div>
        {this.state.schoolName.map((name, index) => (
          <div>
            {name}-{this.state.schoolID[index]}
          </div>
        ))}
      </div>
    );
  }
}

export default FrontPage;
