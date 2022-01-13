import React from 'react';
import {Row, Col, Container} from 'react-bootstrap';
import Header from '../../components/header';
import DictionariesList from '../../components/dictionaries-list/DictionariesList';

function Home() {
  return (
    <div>
      <Header />
      <Container fluid="lg">
        <Row>
          <Col md="auto">
            <DictionariesList />
          </Col>
          <Col />
        </Row>
      </Container>
    </div>
  );
}

export default Home;
