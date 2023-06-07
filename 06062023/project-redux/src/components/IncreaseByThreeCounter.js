import React,{ Component } from "react";
import { Button } from "reactstrap";
import { increaseByThreeCounter } from "../redux/actions/counterActions";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

class IncreaseByThreeCounter extends Component{
    render(){
        return(
        <>
        <Button color="success"
        onClick={(e)=>this.props.dispatch(increaseByThreeCounter())}
        >
Increase By Three
        </Button>
        </>)
    }
}

function mapDispatchToProps(dispatch){
    return {actions:bindActionCreators(increaseByThreeCounter,dispatch)}
}

export default connect(mapDispatchToProps)(IncreaseByThreeCounter)