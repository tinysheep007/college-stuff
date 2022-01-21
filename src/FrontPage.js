import React, { Component } from "react";
import axios from "axios";
import UserInfo from "./UserInfo";
import SchoolTable from "./SchoolTable";

class FrontPage extends Component {
  constructor(props) {
    super(props);
    this.apiKey = "ww6EUqUDZIz1bv7934zbe3Aa4tISNFJ10HoBPkFu";
    this.state = {
      metaData: {
        page: 0,
        total: 0,
        per_page: 0,
      },
      schools: [],
      user: {
        GPA: 3.7,
        SAT: 1400,
      },
    };
    this.handleUpdateSAT = this.handleUpdateSAT.bind(this);
  }
  async componentDidMount() {
    let response = await axios.get(
      `https://api.data.gov/ed/collegescorecard/v1/schools.json?school.name=New+York+University&fields=id,school.name,2019.student.size,2019.admissions.sat_scores.average.overall,2019.admissions.admission_rate.overall,2019.cost.attendance.academic_year&api_key=${this.apiKey}`
    );
    //ww6EUqUDZIz1bv7934zbe3Aa4tISNFJ10HoBPkFu
    let data = response.data.results;
    let metaData = response.data.metadata;
    let page = metaData.page;
    let total = metaData.total;
    let per_page = metaData.per_page;
    const schools = data.map((d) => {
      return {
        name: d["school.name"],
        id: d.id,
        mid_SAT: d["2019.admissions.sat_scores.average.overall"],
        acceptanceRate: d["2019.admissions.admission_rate.overall"],
        studentSize: d["2019.student.size"],
        aveCostPerYear: d["2019.cost.attendance.academic_year"]
      };
    });
    this.setState(
      (prevState) => ({
        ...prevState,
        schools,
        metaData: {
          ...prevState.metaData,
          page,
          total,
          per_page,
        },
      }),
      () => console.log(this.state)
    );
  }

  handleUpdateSAT(newSAT, newGPA) {
    console.log("updated called");
    console.log("newSAT: " + newSAT);
    this.setState((prevState) => ({
      user: {
        ...prevState.user,
        SAT: newSAT,
        GPA: newGPA,
      },
    }));
  }

  render() {
    return (
      <div>
        <div>metadata: {this.state.metaInfo}</div>
        <div>data:{this.state.dataInfo}</div>
        {this.state.schools.map((school) => (
          <div>
            {school.name}-{school.id}
          </div>
        ))}
        <UserInfo
          user={this.state.user}
          handleUpdateSAT={this.handleUpdateSAT}
        />
        <button>Compute</button>

        <div>
          <SchoolTable schools={this.state.schools} />
        </div>
      </div>
    );
  }
}

export default FrontPage;
