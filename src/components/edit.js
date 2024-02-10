import { Link, Navigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
export default function Edit() {
    const { id } = useParams();
    
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

    useEffect(() => {
        axios.get('https://sportweb.onrender.com/run/' + id).then(res => {
            
            setValues({ ...values, ticket: res.data[0].TicketID, date: res.data[0].Date, time: res.data[0].Time, totalstake: res.data[0].TotalStake, totalodds: res.data[0].TotalOdds, maxbonus: res.data[0].MaxBonus, potwin: res.data[0].PotWin, booking: res.data[0].BookingCode, gameid1: res.data[0].GameID, gametime1: res.data[0].GameTime1, team1: res.data[0].TeamName1, team2: res.data[0].TeamName2, ftscore1: res.data[0].FTScore1, odds1: res.data[0].Odds1, gameid2: res.data[0].GameID2, gametime2: res.data[0].GameTime2, team3: res.data[0].TeamName3, team4: res.data[0].TeamName4, ftscore2: res.data[0].FTScore2, odds2: res.data[0].Odds2 })
        }).catch(err => console.log(err))
    })

    const handleUpdate = (event) => {
        event.preventDefault();
        axios.patch('https://sportweb.onrender.com/update/' + id, values)
            .then(res => {
                Navigate("/")
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
                <div className="run"> Edit Ticket Details</div>
                <form onSubmit={handleUpdate}>
                    <input type="text" placeholder="TicketID: 814448" className="inputType" onChange={event => setValues({ ...values, ticket: event.target.value })} value={values.ticket} />
                    <input type="text" placeholder="Date: 24/11" className="inputType" onChange={event => setValues({ ...values, date: event.target.value })} value={values.date} />
                    <input type="text" placeholder="Time: 22:44" className="inputType" onChange={event => setValues({ ...values, time: event.target.value })} value={values.time} />
                    <input type="text" placeholder="Total Stake" className="inputType" onChange={event => setValues({ ...values, totalstake: event.target.value })} value={values.totalstake} />
                    <input type="text" placeholder="Total odds" className="inputType" onChange={event => setValues({ ...values, totalodds: event.target.value })} value={values.totalodds} />
                    <input type="text" placeholder="Max Bonus" className="inputType" onChange={event => setValues({ ...values, maxbonus: event.target.value })} value={values.maxbonus} />
                    <input type="text" placeholder="Pot Win" className="inputType" onChange={event => setValues({ ...values, potwin: event.target.value })} value={values.potwin} />
                    <input type="text" placeholder="Booking Code" className="inputType" onChange={event => setValues({ ...values, booking: event.target.value })} value={values.booking} />
                    <p>first team</p>
                    <input type="text" placeholder="GameId: 12343" className="inputType" onChange={event => setValues({ ...values, gameid1: event.target.value })} value={values.gameid1} />
                    <input type="text" placeholder="Game Time: 02:00" className="inputType" onChange={event => setValues({ ...values, gametime1: event.target.value })} value={values.gametime1} />
                    <input type="text" placeholder="Team name1" className="inputType" onChange={event => setValues({ ...values, team1: event.target.value })} value={values.team1} />
                    <input type="text" placeholder="Team name2" className="inputType" onChange={event => setValues({ ...values, team2: event.target.value })} value={values.team2} />
                    <input type="text" placeholder="FT score: 0:0" className="inputType" onChange={event => setValues({ ...values, ftscore1: event.target.value })} value={values.ftscore1} />
                    <input type="text" placeholder="Odds 14.71" className="inputType" onChange={event => setValues({ ...values, odds1: event.target.value })} value={values.odds1} />
                    <p>Second team</p>
                    <input type="text" placeholder="GameId: 12343" className="inputType" onChange={event => setValues({ ...values, gameid2: event.target.value })} value={values.gameid2} />
                    <input type="text" placeholder="Game Time: 02:00" className="inputType" onChange={event => setValues({ ...values, gametime2: event.target.value })} value={values.gametime2} />
                    <input type="text" placeholder="Team name3" className="inputType" onChange={event => setValues({ ...values, team3: event.target.value })} value={values.team3} />
                    <input type="text" placeholder="Team name4" className="inputType" onChange={event => setValues({ ...values, team4: event.target.value })} value={values.team4} />
                    <input type="text" placeholder="FT score: 0:0" className="inputType" onChange={event => setValues({ ...values, ftscore2: event.target.value })} value={values.ftscore2} />
                    <input type="text" placeholder="Odds 14.71" className="inputType" onChange={event => setValues({ ...values, odds2: event.target.value })} value={values.odds2} />
                    <button className="inputType btn" >Update</button>
                </form>
            </div>
        </>
    )
}
