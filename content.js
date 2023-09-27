import React,{ Component } from "react";

class Content extends Component
{
    constructor()
    {
        super()
        this.state={

            msg:"Goodmorning",
            txt:"hello"
        }
    }
    // updateContent=()=>
    // {
        // console.log(this);
        // this.state.msg='Welcome All'//--won't re-render
        // this.setState({msg:"Welcome All"},()=>setTimeout(()=>console.log('msg updated'),3000))

        // this.setState({msg:"Learn React"})//--static data
    //     this.setState({msg:this.state.txt})
    // }

    render()
    {
        return(
            <div>
                <h1>{this.state.msg}</h1>
                <h2>{this.props.greetings}</h2>
                <h2>{this.state.txt}</h2>
                <input type="text" onChange={e=>this.setState({txt:e.target.value})} value={this.state.txt}></input>
                
                <button onClick={()=>this.props.updateParent(this.state.txt)}>ChangeMsgFromChild</button>

            </div>
         )
    }
}
export default Content
