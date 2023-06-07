import React,{Component} from "react"
import { increaseByTwoCounter } from "../redux/actions/counterActions"
import {connect} from 'react-redux'
import {Button} from 'reactstrap'
import { bindActionCreators } from "redux"
class IncreaseByTwoCounter extends Component{
    render(){
        return(<>
        <Button
        color="success"
        onClick={(e)=>this.props.dispatch(increaseByTwoCounter())}>
       Increase Two Counter
        </Button>
        </>)
    }
}
function mapDispactToProps(dispatch){
    return {actions:bindActionCreators(increaseByTwoCounter,dispatch)};
}

export default connect(mapDispactToProps)(IncreaseByTwoCounter)