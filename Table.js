import { Component } from "react";

function TableHead()
{
    return(
        <thead>
        <tr><th>Name</th><th>Course</th></tr>
        </thead>

    )
}

function TableBody(props)
{
    const {studentsData}=props
    return(
        <tbody>

        </tbody>
    )
}


class Table extends Component
{

    render()
    {
        // const studentsData=this.props.studentsData
        //using destructuring

        const {studentsData}=this.props
        return(
            <div>
                <table className="table">
                    <TableHead/>                    
                    <TableBody data={studentsData}/>
                </table>
            </div>
        )
    }
}
export default Table