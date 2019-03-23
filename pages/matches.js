import React from "react";
import Head from "next/head";
import axios from "axios";
import { Fade } from "reactstrap";

import Navbar from "../components/navbar";
import Card from "../components/card"; 

import "../css/styles.scss";

class matchesTable extends React.Component {
  static async getInitialProps() {
    const api = "https://api.football-data.org/v2/competitions/2021/matches?matchday=1";
    const res = await axios.get(api, {
      headers: { "x-auth-token": `bb59bf677688476183511abee982ecd3` }
    });

    return {
      data: res.data.matches, 
    }; 

  }

  constructor(props) {
    super(props); 
    
    this.state = {
      fadeIn: true, 
    }; 

    this.toggle = this.toggle.bind(this); 

    console.log(this.props.data); 
  }

  toggle() {
    this.setState({
      fadeIn: false, 
    })
  }

  render() { 

    return(
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
        <Card />
      </Fade>
      </div>
    )
  }
}

export default matchesTable; 