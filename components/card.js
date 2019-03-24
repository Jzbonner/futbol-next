import React from "react"; 
import { Card, CardHeader, CardFooter, CardTitle, CardText, Row, Col } from 'reactstrap';

export default class cardView extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};

    console.log(this.props); 
  }

  render() {

    return(
      <Row className="match-table">
        <Col sm="2" />
        <Col sm="4">
          <Card className="card-view" body>
          <CardHeader>Team 1 vs Team 2</CardHeader>
          <CardTitle>Score of Match with image accents</CardTitle>
            <CardText>
              Supporting information: Match information, Game Time, etc. 
                <img 
                  className="league-logo"
                  src="https://github.com/Jzbonner/futbol-next/blob/master/img-media/premier-league.png?raw=true"
                  alt="league-logo"
                />
            </CardText>
            <CardFooter>Location and Stadium of Match</CardFooter>
          </Card>
        </Col>
        <Col sm="4">
        <Card className="card-view" body>
          <CardHeader>Team 1 vs Team 2</CardHeader>
          <CardTitle>Score of Match with image accents</CardTitle>
            <CardText>
              Supporting information: Match information, Game Time, etc. 
                <img 
                  className="league-logo"
                  src="https://github.com/Jzbonner/futbol-next/blob/master/img-media/premier-league.png?raw=true"
                  alt="league-logo"
                />
            </CardText>
            <CardFooter>Location and Stadium of Match</CardFooter>
          </Card>
        </Col>
        <Col sm="2" />
      </Row> 
    )
  }
      
}