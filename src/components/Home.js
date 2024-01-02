import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Home() {
    const [data, setData] = useState([])

    useEffect(() => {
        axios.get("https://sportweb.onrender.com/")
            .then(res => setData(res.data))
            .catch(err => console.log(err))
    }, [])

    const handleDelete = (id) =>{
        axios.delete("https://sportweb.onrender.com/" + id)
        .then(res => {
          document.location.reload(true)
        })
        .catch(err => console.log(err))
    }

    return (
        <>
            <div className="header3">
                <div className="table">
                    <Link to="/createRun"> <button className="create">Create+</button></Link>
                    <table>
                        <thead>
                            <th>ID</th>
                            <th>TicketID</th>
                            <th>Action</th>
                        </thead>
                        <tbody>
                            {data.map((ticket, index) => {
                                return <tr key={index}>
                                    <td>{ticket.ID}</td>
                                    <td>{ticket.TicketID}</td>
                                    <td><Link to={`/run/${ticket.ID}`}>Running</Link></td>
                                    <td><Link to={`/won/${ticket.ID}`}>Won</Link></td>
                                    <td><Link to={`/edit/${ticket.ID}`}>Edit</Link></td>
                                    <button onClick={()=> handleDelete(ticket.ID)}>Delete</button>
                                </tr>
                            })}

                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}
