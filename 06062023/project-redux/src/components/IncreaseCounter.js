import { Component } from "react";
import {Button} from "reactstrap"
import { increaseCounter } from "../redux/actions/counterActions";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
class IncreaseCounter extends Component{
    render(){
        return(
        <>
        <Button color="success" onClick={(e)=>this.props.dispatch(increaseCounter())}>
            Incraese
        </Button>
        </>)
    }
}
function mapDispatchToProps(dispatch){
    return {actions:bindActionCreators(increaseCounter,dispatch)}
}

export default connect(mapDispatchToProps)(IncreaseCounter)