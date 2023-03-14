import React from "react";
import {StateDropDown, RegionDropDown} from 'react-indian-state-region-selector';
class DropDown extends React.Component{
  constructor(props){
    super(props);
    this.state={state:'', region:''}
  }
  selectStateVar(val){
    this.setState({state:val})
  }
  selectRegionVar(val){
    this.setState({region:val})
  }
  render(){
    const {state, region} = this.state;
    return(
      <div>
        <StateDropDown 
        value={state}
        onChange={(val) => this.selectRegionVar(val)}
        />
        <RegionDropDown 
        state={state}
        value={region}   
        onChange={(val)=> this.selectRegionVar(val)}     
        />
      </div>
    )
  }
}

export default DropDown;