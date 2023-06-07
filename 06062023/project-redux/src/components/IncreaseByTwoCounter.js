import React,{ Component } from "react";
import { Button } from "reactstrap";
import { increaseByTwoCounter } from "../redux/actions/counterActions";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

class IncreaseByTwoCounter extends Component{
    render(){
        return(
        <>
        <Button color="success"
        onClick={(e)=>this.props.dispatch(increaseByTwoCounter())}
        >
Increase By Two
        </Button>
        </>)
    }
}

function mapDispatchToProps(dispatch){
    return {actions:bindActionCreators(increaseByTwoCounter,dispatch)}
}

export default connect(mapDispatchToProps)(IncreaseByTwoCounter)