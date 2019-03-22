import React from "react";
import Head from "next/head";
import axios from "axios";
import { Fade, Table } from "reactstrap"; 

import Navbar from "../components/navbar";

import "../css/styles.scss";

class bundesLiga extends React.Component {
  static async getInitialProps() {
    const api =
      "https://api.football-data.org/v2/competitions/BL1/standings?standingType=HOME";
    const res = await axios.get(api, {
      headers: { "x-auth-token": `bb59bf677688476183511abee982ecd3` }
    });
    return {
      data: res.data.standings,
    };
  }

  constructor(props) {
    super(props);
    
    this.state = {
      fadeIn: true, 
    }; 
    this.toggle = this.toggle.bind(this); 
  }

  toggle() {
    this.setState({
      fadeIn: false, 
    })
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
          <link 
            rel="shortcut icon" 
            type="image/png" 
            href="https://github.com/Jzbonner/futbol-next/blob/master/img-media/soccer.png?raw=true"
          />
        </Head>

        <Navbar />
        <Fade in={this.state.fadeIn}>
          <div className="row">
            <div className="col-sm-2" />
            <div className="col-sm-8">
              <h3> Bundesliga </h3>
              <Table dark hover responsive className="table">
                <thead>
                  <tr className="table-row">
                    <th>Pos.</th>
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
                          <tr key={index} className="table-row-view">
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
              </Table>
            </div>
            <div className="col-md-2">
                  <img 
                    className="league-logo-bl"
                    src="https://github.com/Jzbonner/futbol-next/blob/master/img-media/bundesliga.png?raw=true"
                    alt="league-logo"
                  />
              </div>
          </div>
        </Fade>
      </div>
    );
  }
}

export default bundesLiga; 