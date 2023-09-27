import React, { Component } from 'react'

class Lcm extends Component
 {
    constructor()
    {
        super()
        this.state={
            name:"Pandi"
        }
        console.log('LCM Constr()');
    }
    updateName=()=>{
    this.setState({name:"Balaji"})
        
    }
componentDidMount()
{
    console.log('CDM in LCM');
}
shouldComponentUpdate(nextProps,nextState)
{
     return (nextState.name=="Balaji"?true:false)

}
componentDidUpdate()
{
    console.log('Update in LCM');
}
componentWillUnmount()
{
    console.log('LCM Removed');
}
 render()
 {
    return (
        <div>
            <h1>{console.log('LCM render()')}</h1>
            <h2>{this.state.name}</h2>
            <button onClick={this.updateName}>Update</button>
        </div>
      )
 }
}

export default Lcm