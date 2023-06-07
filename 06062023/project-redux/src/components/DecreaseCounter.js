import { Component } from "react";
import {Button} from "reactstrap"
import { decreaseCounter } from "../redux/actions/counterActions";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

class DecreaseCounter extends Component{
    render(){
        return(
        <>
        <Button color="success" onClick={(e)=>this.props.dispatch(decreaseCounter())}>
            Decrease
        </Button>
        </>
            )
    }
}

function mapDispatchToProps(dispatch){
    return {actions:bindActionCreators(decreaseCounter,dispatch)}
}


export default connect(mapDispatchToProps)(DecreaseCounter)
