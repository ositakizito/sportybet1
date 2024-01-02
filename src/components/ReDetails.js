import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
export default function RunDetails() {
  const [values, setValues] = useState({
    ticket: '',
    date: '',
    time: '',
    totalstake: '',
    totalodds: '',
    maxbonus: '',
    potwin: '',
    booking: '',
    gameid1: '',
    gametime1: '',
    team1: '',
    team2: '',
    ftscore1: '',
    odds1: '',
    gameid2: '',
    gametime2: '',
    team3: '',
    team4: '',
    ftscore2: '',
    odds2: ''

  })
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3001/ticket', values)
      .then(res => {
        navigate("/")
      })
      .catch(err => console.log(err))
  }
  return (
    <>
      <div className="header">
        <div className="Hicon">
          <Link to="/" style={{ color: "#fff" }}> <div className="bck"><i className="fa fa-arrow-left"></i></div></Link>
          <div className="bck1">Ticket Details</div>
        </div>
        <div className="Hicon hm"><img src='' alt="" width='24px' style={{ backgroundColor: "" }} /></div>
      </div>
      <div className="for">
        <div className="run"> Create Ticket Details</div>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="TicketID: 814448" className="inputType" onChange={e => setValues({ ...values, ticket: e.target.value })} />
          <input type="text" placeholder="Date: 24/11" className="inputType" onChange={e => setValues({ ...values, date: e.target.value })} />
          <input type="text" placeholder="Time: 22:44" className="inputType" onChange={e => setValues({ ...values, time: e.target.value })} />
          <input type="text" placeholder="Total Stake" className="inputType" onChange={e => setValues({ ...values, totalstake: e.target.value })} />
          <input type="text" placeholder="Total odds" className="inputType" onChange={e => setValues({ ...values, totalodds: e.target.value })} />
          <input type="text" placeholder="Max Bonus" className="inputType" onChange={e => setValues({ ...values, maxbonus: e.target.value })} />
          <input type="text" placeholder="Pot Win" className="inputType" onChange={e => setValues({ ...values, potwin: e.target.value })} />
          <input type="text" placeholder="Booking Code" className="inputType" onChange={e => setValues({ ...values, booking: e.target.value })} />
          <p>first team</p>
          <input type="text" placeholder="GameId: 12343" className="inputType" onChange={e => setValues({ ...values, gameid1: e.target.value })} />
          <input type="text" placeholder="Game Time: 02:00" className="inputType" onChange={e => setValues({ ...values, gametime1: e.target.value })} />
          <input type="text" placeholder="Team name1" className="inputType" onChange={e => setValues({ ...values, team1: e.target.value })} />
          <input type="text" placeholder="Team name2" className="inputType" onChange={e => setValues({ ...values, team2: e.target.value })} />
          <input type="text" placeholder="FT score: 0:0" className="inputType" onChange={e => setValues({ ...values, ftscore1: e.target.value })} />
          <input type="text" placeholder="Odds 14.71" className="inputType" onChange={e => setValues({ ...values, odds1: e.target.value })} />
          <p>Second team</p>
          <input type="text" placeholder="GameId: 12343" className="inputType" onChange={e => setValues({ ...values, gameid2: e.target.value })} />
          <input type="text" placeholder="Game Time: 02:00" className="inputType" onChange={e => setValues({ ...values, gametime2: e.target.value })} />
          <input type="text" placeholder="Team name3" className="inputType" onChange={e => setValues({ ...values, team3: e.target.value })} />
          <input type="text" placeholder="Team name4" className="inputType" onChange={e => setValues({ ...values, team4: e.target.value })} />
          <input type="text" placeholder="FT score: 0:0" className="inputType" onChange={e => setValues({ ...values, ftscore2: e.target.value })} />
          <input type="text" placeholder="Odds 14.71" className="inputType" onChange={e => setValues({ ...values, odds2: e.target.value })} />
          <input type="submit" className="inputType btn" />
        </form>
      </div>
    </>
  )
}