import React,{Component} from "react"
import { increaseCounter } from "../redux/actions/counterActions"
import {connect} from 'react-redux'
import {Button} from 'reactstrap'
import { bindActionCreators } from "redux"
class IncreaseCounter extends Component{
    render(){
        return(<>
        <Button
        color="success"
        onClick={(e)=>this.props.dispatch(increaseCounter())}>
       Increase
        </Button>
        </>)
    }
}
function mapDispactToProps(dispatch){
    return {actions:bindActionCreators(increaseCounter,dispatch)};
}

export default connect(mapDispactToProps)(IncreaseCounter)