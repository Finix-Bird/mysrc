function Home()
{
    return (
        <div>
            <h1>Welcome to Movie application 😊🍿</h1>
            <h1>Welcome </h1>
        </div>
    )
}
export default Home



// ----------------------------------------------------------------
// import { Component } from "react";

// class Home extends Component
// {
//     constructor()
//     {
//         super()
//         this.state={course:"React",students:[{id:1,name:"Rajkumar"},{id:2,name:"Pandi"},{id:3,name:"Karthi"},{id:4,name:"Balaji"},{id:5,name:"Guru"},{id:6,name:"Pagul"}]}
//     }
//     updatecourse=()=>
//     {
//         // console.log('course updated');
//         // this.state.course="Python"
//         this.setState({course:"Python"})

//         console.log(this.state.course);
//     }
//     render()
//     {
//         return(
//             <div>
//                 <h2>Welcome {this.props.name}</h2>
//                 <h2>Course:{this.state.course}</h2>
//                 <button onClick={this.updatecourse}>updateCourse</button>
//                 <table>
//                     <thead>
//                         <tr><th>Name</th><th>Course</th></tr>
//                     </thead>
//                     {
//                         console.log(this.state.course)
//                     }
//                     <tbody>
//                         {
//                             this.state.students.map(s=><tr key={s.id}><td>{s.name}</td><td>{this.state.course}</td></tr>)
//                         }
//                     </tbody>
//                 </table>
//             </div>
//         )
//     }
// }
// export default Home