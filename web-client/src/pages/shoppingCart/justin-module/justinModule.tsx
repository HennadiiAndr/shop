import React, {Component} from "react";
import {connect, ConnectedProps} from "react-redux";

import "./styles.scss";
import {justinModuleSetRegion} from "../../../store/justinModule/justinRegionSet";
import {RootState} from "../../../store/root";
import {justinRegionType} from "../../../api/@types";

const mapState = (state: RootState) => ({
  setRegion: state.setRegion
});

const mapDispatch = {
  justinModuleSetRegion
};

const connector = connect(mapState, mapDispatch);

export type PropsFromRedux = ConnectedProps<typeof connector>;

type justinRegionState = {
  justinRegionData: {
    data: Array<justinRegionType>;
  };
};

class JustinModule extends Component<PropsFromRedux, justinRegionState> {
  componentDidMount() {
    const req = {
      request: "getData",
      type: "catalog",
      name: "cat_Region",
      language: "RU"
    };
    fetch("https://dev.itismy.space/api/runRequest", {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(req)
    })
      .then(answer => answer.json())
      .then(data => {
        this.setState({
          justinRegionData: data
        });
        //eslint-disable-next-line
        console.log(data);
      });
  }

  render() {
    if (!this.state?.justinRegionData) {
      return null;
    }
    return (
      <select
        onChange={event => {
          this.props.justinModuleSetRegion(event.target.value);
        }}
        value={this.props.setRegion}>
        {this.state.justinRegionData.data.map(item => (
          <option key={item.fields.descr} value={item.fields.descr}>
            {item.fields.descr}
          </option>
        ))}
      </select>
    );
  }
}
export default connector(JustinModule);
