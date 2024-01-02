import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import House from "../img/hous.svg";
import Chart from "../img/chart.svg";

export default function Run() {
    const { id } = useParams();
    const [tick, setTick] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:3001/run/' + id).then(res => {
            setTick(res.data[0]);
        }).catch(err => console.log(err))
    })
    return (
        <>
            <div className="header">
                <div className="Hicon">
                    <Link to="/" style={{ color: "#fff" }}> <div className="bck"><i className="fa fa-arrow-left"></i></div></Link>
                    <div className="bck1">Ticket Details</div>
                </div>
                <div className="Hicon hm"><img src={House} width='24px' alt="" /></div>
            </div>
            {/* here started */}
            <div className="header2 d3">
                <div className="headcover">

                    <div className="cover">
                        <div className="tid">Ticket ID: {tick.TicketID}</div>
                        <div className="tid">{tick.Date} {tick.Time}</div>
                    </div>
                    <div className="cover two">
                        <div className="tid bold">Multiple</div>
                        <div className="tid bold won" style={{ color: "#fff" }}>Running</div>
                    </div>
                    <div className="cover two">
                        <div className="tid">Total Return</div>
                        <div className="tid bold2" style={{ color: "#fff" }}>--</div>
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
                    <div className="cover">
                        <div className="tid">Max Bonus</div>
                        <div className="tid bold4">{tick.MaxBonus}</div>
                    </div>
                    <div className="cover">
                        <div className="tid">Pot. Win</div>
                        <div className="tid bold4">{tick.PotWin}</div>
                    </div>
                    <div className="line l2"></div>
                    <div className="book">
                        <div className="code">Booking Code: {tick.BookingCode} &nbsp;<span className="code"><i className="fa fa-copy"></i></span> <span className="code"><i className="fa fa-share-alt"></i></span></div>
                        <div className="code1">Rebet</div>
                    </div>
                </div>
            </div>
            {/* end started */}

            <div className="header3">
                <div className="heady">
                    <div className="hd h">Not Start</div>
                    <div className="hdcontent">
                        <div className="list">
                            <p className="game">Game ID: {tick.GameID} | {tick.Date} {tick.GameTime1}</p>
                            <p>{tick.TeamName1} <span style={{ color: '#9CA0AB' }}>v</span> {tick.TeamName2}</p>
                            <p className="chart"><img src={Chart} alt="" width="20px" /> Match Tracker</p>
                            <div className="gy">
                                <p className="pck">Pick: <span className="pck1"> {tick.FTScore1} @{tick.Odds1}</span></p>
                                <p>Market: <span className="cs">Correct Score</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="header3">
                <div className="heady">
                    <div className="hd h">Not Start</div>
                    <div className="hdcontent">
                        <div className="list">
                            <p className="game">Game ID: {tick.GameID2} | {tick.Date} {tick.GameTime2}</p>
                            <p>{tick.TeamName3} <span style={{ color: '#9CA0AB' }}>v</span> {tick.TeamName4}</p>
                            <p className="chart"><img src={Chart} alt="" width="20px" />  Match Tracker</p>
                            <div className="gy">
                                <p className="pck">Pick: <span className="pck1"> {tick.FTScore2} @{tick.Odds2}</span></p>
                                <p>Market: <span className="cs">Correct Score</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bets">
                <div className="bt">
                    <div className="nb">Number of Bets: 1</div>
                    <div className="Bb" style={{ color: "#32CE62" }}>Bet Details</div>
                </div>
            </div>
            <div className="bets">
                <div className="bt">
                    <div className="nb">Check Transaction History</div>
                    <div className="Bb" style={{ color: "#32CE62" }}><i className="fa fa-chevron-right"></i></div>
                </div>
            </div>
            <div className="bets">
                <div className="bt cn">
                    <div className="Bb cn" style={{ color: "#e41827"}}>Delete Ticket</div>
                </div>
            </div>
            <div className="bets">
                <div className="bt" style={{ height: 70 }}>

                </div>
            </div>
        </>
    )
}