import React from 'react';
import { Link } from 'react-router-dom';
import {Nav} from 'react-bootstrap';
import Title from '../title';

// eslint-disable-next-line react/prefer-stateless-function
class DictionariesList extends React.Component {
  render() {
    return (
      <div>
        <Title title="Dictionaries" />
        <Nav defaultActiveKey="/сategories" className="flex-column">
          <Nav.Link as={Link} to="/сategories">
            Categories
          </Nav.Link>
        </Nav>
      </div>
    );
  }
}

export default DictionariesList;
