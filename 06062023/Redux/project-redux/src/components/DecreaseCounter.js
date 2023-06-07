import React,{Component} from "react"
import { decreaseCounter } from "../redux/actions/counterActions"
import {Button} from 'reactstrap'
import { bindActionCreators } from "redux"
import {connect} from "react-redux"
class DecreaseCounter extends Component{
    render(){
        return(<>
        <Button
        color="success"
        onClick={(e)=>this.props.dispatch(decreaseCounter())} >Decrease</Button>
        </>)
    }
}
function mapDispactToProps(dispatch){
    return {actions:bindActionCreators(decreaseCounter,dispatch)};
}

export default connect(mapDispactToProps)(DecreaseCounter)