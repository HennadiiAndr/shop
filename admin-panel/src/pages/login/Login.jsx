import React from 'react';
import {Form, Button, Card} from 'react-bootstrap';
import {withRouter} from 'react-router';
import PropTypes from 'prop-types';
import {auth} from '../../utils/auth';
import './login.css';

class Login extends React.Component {
  state = {
    email: '',
    password: '',
  };

  componentDidMount() {
    localStorage.token = '';
    localStorage.firstName = '';
  }

  handleOnClick = () => {
    const {email, password} = this.state;
    const {history} = this.props;
    auth.authenticate(email, password).then(() => {
      if (auth.isAuthenticated) {
        auth.checkToken().then(() => {
          history.push('/');
        });
      }
    });
  };

  handleChangeEmail = (event) => {
    this.setState({email: event.target.value});
  };

  handleChangePassword = (event) => {
    this.setState({password: event.target.value});
  };

  render() {
    const {email, password} = this.state;
    return (
      <div className="container">
        <div className="center">
          <Card>
            <Card.Body>
              <Card.Title>Authentication</Card.Title>
              <Form>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    onChange={this.handleChangeEmail}
                    value={email}
                  />
                  <Form.Text className="text-muted">We&apos;ll never share your email with anyone else.</Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    autoComplete="on"
                    onChange={this.handleChangePassword}
                    value={password}
                  />
                </Form.Group>

                <Button className="float-right" variant="primary" onClick={this.handleOnClick}>
                  Sign in
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  history: PropTypes.element.isRequired,
};

export default withRouter(Login);
