import React from 'react';
import {Container, Row, Col, Button, Image} from 'react-bootstrap';
import {withRouter} from 'react-router';
import PropTypes from 'prop-types';
import userLogo from '../../assets/userLogo.ico';

class Header extends React.Component {
  handleSignOutOnClick = () => {
    const {history} = this.props;
    localStorage.token = '';
    localStorage.firstName = '';
    history.push('/login');
  };

  handleTitleOnClick = () => {
    const {history} = this.props;
    history.push('/');
  };

  render() {
    return (
      <Container fluid style={{backgroundColor: '#eee'}}>
        <Container fluid="lg">
          <Row className="align-items-center">
            <Col md="auto">
              <h4>Store</h4>
            </Col>
            <Col style={{color: 'gray'}}>admin panel</Col>
            <Col md="auto" style={{}}>
              <Image src={userLogo} style={{width: '20px', height: '20px', marginRight: '5px'}} />
              {localStorage.firstName}
            </Col>
            <Col md="auto">
              <Button variant="light" onClick={this.handleSignOutOnClick}>
                Sign out
              </Button>
            </Col>
          </Row>
        </Container>
      </Container>
    );
  }
}

Header.propTypes = {
  history: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

export default withRouter(Header);
