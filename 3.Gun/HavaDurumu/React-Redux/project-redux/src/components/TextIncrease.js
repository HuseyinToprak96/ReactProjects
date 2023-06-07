import React,{Component} from "react"
import { textByCounter } from "../redux/actions/counterActions"
import {connect} from 'react-redux'
import { bindActionCreators } from "redux"

class TextIncrease extends Component{
    render() {  
        return(
<>
<input type="number" onChange={(e)=>this.props.dispatch(textByCounter(e.target.value))} />
</>
    )}
}

function mapDispactToProps(dispatch){
    return {actions:bindActionCreators(textByCounter,dispatch)};
}

export default connect(mapDispactToProps)(TextIncrease)