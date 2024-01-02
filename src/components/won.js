import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Congrat from "../img/congrat.png";
import House from "../img/hous.svg";
import Chart from "../img/chart.svg";
import Wan from "../img/trophy.svg";

export default function Won() {
    const { id } = useParams();
    const [tick, setTick] = useState([]);
    useEffect(() => {
        axios.get('https://sportweb.onrender.com/won/' + id).then(res => {
            setTick(res.data[0]);
        }).catch(err => console.log(err))
    })

    return (
        <>
         <div className="header">
            <div className="Hicon">
                <Link to="/" style={{color: "#fff"}}> <div className="bck"><i className="fa fa-arrow-left"></i></div></Link>
                <div className="bck1">Ticket Details</div>
            </div>
            <div className="Hicon hm"><img src={House} alt="" width='24px' style={{backgroundColor: ""}}/></div>
         </div>
         <div className="header2">
                <div className="headcover">

                    <div className="cover">
                        <div className="tid">Ticket ID: {tick.TicketID}</div>
                        <div className="tid">{tick.Date} {tick.Time}</div>
                    </div>
                    <div className="cover two">
                        <div className="tid bold">Multiple</div>
                        <div className="tid bold won"> <img src={Wan} alt="" width={20}></img> Won</div>
                    </div>
                    <div className="cover two">
                        <div className="tid">Total Return</div>
                        <div className="tid bold2">{tick.PotWin}</div>
                    </div>
                    <div className="line"></div>

                    <div className="cover two tp">
                        <div className="tid">Total Stake</div>
                        <div className="tid bold3">{tick.TotalStake}</div>
                    </div>
                    <div className="cover">
                        <div className="tid">Total Odds</div>
                        <div className="tid bold4">{tick.TotalOdds}</div>
                    </div>
                    <div className="line l2"></div>
                    <div className="bookk">
                     <img src={Congrat} alt=""/>
                       
                    </div>
                </div>
            </div>
            <div className="header3">
                <div className="heady">
                    <div className="hd"><i className="fa fa-check"></i></div>
                    <div className="hdcontent">
                        <div className="list">
                            <p className="game">Game ID: {tick.GameID} | {tick.Date} {tick.GameTime1}</p>
                            <p>{tick.TeamName1} <span style={{color:'#9CA0AB' }}>v</span> {tick.TeamName2}</p>
                            <p className="chart"><img src={Chart} alt="" width="20px"/> Match Tracker</p>
                            <p style={{ color: "gray" }}>FT Score: <span className="sc">{tick.FTScore1}</span></p>
                            <div className="gy">
                                <p className="pck">Pick: <span className="pck1"> {tick.FTScore1} @{tick.Odds1}</span> &nbsp;<i className="fa fa-check"></i></p>
                                <p>Market: <span className="cs">Correct Score</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="header3">
                <div className="heady">
                    <div className="hd"><i className="fa fa-check"></i></div>
                    <div className="hdcontent">
                        <div className="list">
                            <p className="game">Game ID: {tick.GameID2} | {tick.Date} {tick.GameTime2}</p>
                            <p>{tick.TeamName3} <span style={{color:'#9CA0AB' }}>v</span> {tick.TeamName4}</p>
                            <p className="chart"><img src={Chart} alt="" width="20px"/> Match Tracker</p>
                            <p style={{ color: "gray" }}>FT Score: <span className="sc">{tick.FTScore2}</span></p>
                            <div className="gy">
                                <p className="pck">Pick: <span className="pck1"> {tick.FTScore2} @{tick.Odds2}</span> &nbsp;<i className="fa fa-check"></i></p>
                                <p>Market: <span className="cs">Correct Score</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bets">
                <div className="bt">
                    <div className="nb">Number of Bets: 1</div>
                    <div className="Bb" style={{color: "#32CE62"}}>Bet Details</div>
                </div>
            </div>
            <div className="bets">
                <div className="bt">
                    <div className="nb">Check Transaction History</div>
                    <div className="Bb" style={{color: "#32CE62"}}><i className="fa fa-chevron-right"></i></div>
                </div>
            </div>
            <div className="bets">
                <div className="bt cn">
                    <div className="Bb cn" style={{color: "#e41827"}}>Delete Ticket</div>
                </div>
            </div>
            <div className="bets">
                <div className="bt" style={{height: 70}}>
      
                </div>
            </div>
        </>
    )
}
