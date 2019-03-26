import React from "react";
import { Button, Table } from "reactstrap";

import "../css/styles.scss";

export default class standingsTable extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "Barclay's Premier League",
    };

    this.onClick = this.onClick.bind(this); 
  }

  // YOU HAVE ES6 FOR A REASON LOL 
  onClick() {
    if (this.state.title === "Barclay's Premier League") {
      this.setState({
        title: "Bundesliga"
      })
    } else if (this.state.title === "Bundesliga") {
      this.setState({
        title: "Barclay's Premier League"
      })
    }
  }

  render() {

    return(
    <div className="row main-content">
      <div className="col-sm-2" />
      <div className="col-sm-8">
        <h3> {this.state.title} </h3>
        <Table borderless hover responsive className="table">
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
                      <th>{value.position}</th>
                      <td>
                        <img
                          className="logoStyle"
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
        <Button 
          onClick={this.onClick}
          outline
          size="sm" 
          className="league-switch"
        >
          <img 
            className="league-logo"
            src="https://github.com/Jzbonner/futbol-next/blob/master/img-media/premier-league.png?raw=true"
            alt="league-logo"
          />
        </Button>
        <Button 
          onClick={this.onClick}
          outline
          size="sm" 
          className="league-switch"
        >
          <img 
            className="league-logo-bl"
            src="https://github.com/Jzbonner/futbol-next/blob/master/img-media/bundesliga.png?raw=true"
            alt="league-logo"
          />
        </Button>              
      </div>
    </div>
    )
  }
}
