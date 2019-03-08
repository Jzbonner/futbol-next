import React from "react";
import Head from "next/head";
import Link from "next/link";
import axios from "axios";

import Navbar from "../components/navbar"; 

import "../css/styles.scss";


TODO: 
{/*
1. Create different pages and routes one for the Premier League and one 
one for the Bundesliga
2. Utilize the NavLink component attributes to link to another page that utilizes getInitialProps()
3. Consider additional page for enhance detail on individual teams (maybe match info)
4. Set an Active Identifier on the NavLink Items on Page Load 
5. Migrate this TODO to Trello Board - once completed
*/}

class futbolApp extends React.Component {
  static async getInitialProps() {
    const api =
      "https://api.football-data.org/v2/competitions/PL/standings?standingType=HOME";
    const res = await axios.get(api, {
      headers: { "x-auth-token": `bb59bf677688476183511abee982ecd3` }
    });
    return { 
      api: api, 
      data: res.data.standings 
    };
  }

  render() {
    const logoStyle = {
      width: "30px"
    };

    return (
      <div className="container-fluid main-container">
        <Head>
          <title> League Table </title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          <link
            rel="stylesheet"
            href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          />
          <link 
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Raleway" 
          />
        </Head>
    
        <Navbar />
          <div className="row">
            <div className="col-sm-2" />
            <div className="col-sm-8">
              <h1> Barclay's Premiere League </h1>
              <table className="table">
                <thead>
                  <tr>
                    <th>Position</th>
                    <th>Team</th>
                    <th>Points</th>
                    <th>Games</th>
                    <th>Wins</th>
                    <th>Draws</th>
                    <th>Losses</th>
                  </tr>
                </thead>
                {this.props.data.map(standings => {
                  return (
                    <tbody>
                      {standings.table.map((value, index) => {
                        return (
                          <tr key={index}>
                            <td>{value.position}</td>
                            <td>
                              <img
                                style={logoStyle}
                                src={value.team.crestUrl}
                              />
                            </td>
                            <td>{value.points}</td>
                            <td>{value.playedGames}</td>
                            <td>{value.won}</td>
                            <td>{value.draw}</td>
                            <td>{value.lost}</td>
                          </tr>
                        );
                      })}
                    </tbody>
                  );
                })}
              </table>
            </div>
            <div className="col-md-2" />
          </div>
      </div>
    );
  }
}

export default futbolApp; 


// League Codes (BL1, BL2, BL3, DFB, PL, EL1, ELC, FAC, SA, SB, PD, SD, CDR, FL1, FL2, DED)
// League Codes Cont. (PPL, GSL, CL, EL, EC, WC)
// League Codes that work ~ PL, BL1 
