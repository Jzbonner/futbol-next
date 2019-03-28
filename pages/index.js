import React from "react";
import Head from "next/head";
import axios from "axios";
import { Button, Fade, Table } from "reactstrap"; 

import Navbar from "../components/navbar"; 
import StandingsTable from "../components/standings"; 

import "../css/styles.scss";


TODO: 
{/*
✔ 1. Create different pages and routes one for the Premier League and one 
one for the Bundesliga 
✔ 2. Utilize the NavLink component attributes to link to another page that utilizes getInitialProps()
✔ 3. Consider additional page for enhance detail on individual teams (maybe match info)
✔ 4. Set an Active Identifier on the NavLink Items on Page Load 
✔ 7. Create a new branch of the futbol-next app to test the revised API functionality
FIXME: You can pass prop "data" to children components by passing state as props to children components
FIXME: 5. Redo Theme for Futboll App (reactstrap tables, background elements, animations, ✅ color pallette)
FIXME: 6. Migrate this TODO to Trello Board - once completed
*/}

class futbolApp extends React.Component {
  static async getInitialProps() {
    const api =
      "https://api.football-data.org/v2/competitions/PL/standings?standingType=HOME";
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
      tableInfo: this.props.data, 
    };

    this.toggle = this.toggle.bind(this); 
  }

  toggle() {
    this.setState({
      fadeIn: false, 
    })
  }

  render() {

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
          <StandingsTable 
            data={this.state.tableInfo} 
          />
        </Fade>
      </div>
    );
  }
}

export default futbolApp; 


// League Codes (BL1, BL2, BL3, DFB, PL, EL1, ELC, FAC, SA, SB, PD, SD, CDR, FL1, FL2, DED)
// League Codes Cont. (PPL, GSL, CL, EL, EC, WC)
// League Codes that work ~ PL, BL1 
