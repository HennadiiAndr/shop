import React from 'react';
import {Row, Col, Container} from 'react-bootstrap';
import CategoriesList from '../../components/categories';
import Header from '../../components/header';
import DictionariesList from '../../components/dictionaries-list/DictionariesList';

function Сategories() {
  return (
    <div>
      <Header />
      <Container fluid="lg">
        <Row>
          <Col md="auto">
            <DictionariesList />
          </Col>
          <Col>
            <CategoriesList />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Сategories;
