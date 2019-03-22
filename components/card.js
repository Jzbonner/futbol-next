import React from "react"; 
import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';

class cardView extends React.Component {
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

    };
  }

  render() {

    return(
      <Row className="match-table">
        <Col sm="2" />
        <Col sm="4">
          <Card className="card-view" body>
          <CardTitle>Match Card</CardTitle>
            <CardText>
              With supporting text below as a natural lead-in to additional content.
                <img 
                  className="league-logo"
                  src="https://github.com/Jzbonner/futbol-next/blob/master/img-media/premier-league.png?raw=true"
                  alt="league-logo"
                />
            </CardText>
          </Card>
        </Col>
        <Col sm="4">
          <Card className="card-view" body>
          <CardTitle>Match Card</CardTitle>
            <CardText>
              With supporting text below as a natural lead-in to additional content.
                <img 
                  className="league-logo"
                  src="https://github.com/Jzbonner/futbol-next/blob/master/img-media/premier-league.png?raw=true"
                  alt="league-logo"
                />
            </CardText>
          </Card>
        </Col>
        <Col sm="2" />
      </Row> 
    )
  }
      
}

export default cardView; 