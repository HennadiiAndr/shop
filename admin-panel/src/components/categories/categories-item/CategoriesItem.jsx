import React from 'react';
import PropTypes from 'prop-types';
import {Form, Button, Alert} from 'react-bootstrap';

class CategoriesItem extends React.Component {
  state = {
    id: 0,
    name: '',
    mainImageUrl: '',
    parentId: 0,
    showDeleteQuestion: false,
  };

  componentDidMount() {
    const {data} = this.props;
    this.setState({
      id: data.id,
      name: data.name,
      mainImageUrl: data.mainImageUrl,
      parentId: data.parentId,
    });
  }

  handleOnChangeName = (event) => {
    this.setState({name: event.target.value});
  };

  handleOnChangeImageURL = (event) => {
    this.setState({mainImageUrl: event.target.value});
  };

  handleOnChangeParentId = (event) => {
    this.setState({parentId: event.target.value});
  };

  handleOnClickSave = () => {
    const {id, name, mainImageUrl, parentId} = this.state;
    const {callback, action} = this.props;
    callback({id, name, mainImageUrl, parentId: +parentId}, action === 'add' ? action : 'save');
  };

  showDeleteQuestion = (show) => {
    this.setState({showDeleteQuestion: show});
  };

  handleOnClickDelete = () => {
    this.showDeleteQuestion(true);
  };

  handleOnClickCancel = () => {
    const {callback} = this.props;
    callback({}, 'cancel');
  };

  handleDeleteCancel = () => {
    this.showDeleteQuestion(false);
  };

  handleDeleteConfirm = () => {
    const {id, name, mainImageUrl, parentId} = this.state;
    const {callback} = this.props;
    callback({id, name, mainImageUrl, parentId: +parentId}, 'delete');
  };

  render() {
    const {id, name, mainImageUrl, parentId, showDeleteQuestion} = this.state;
    const {action} = this.props;
    return (
      <>
        <Alert show={showDeleteQuestion} variant="success" transition={false}>
          <Alert.Heading>Deleting</Alert.Heading>
          <p>Do you want to delete item?</p>
          <hr />
          <div className="d-flex justify-content-end">
            <Button variant="light" onClick={this.handleDeleteCancel}>
              Cancel
            </Button>
            <Button variant="danger" style={{marginLeft: '5px'}} onClick={this.handleDeleteConfirm}>
              Delete
            </Button>
          </div>
        </Alert>

        {showDeleteQuestion ? (
          <span />
        ) : (
          <Form>
            <Button variant="success" onClick={this.handleOnClickSave}>
              Save
            </Button>

            <Button variant="light" style={{marginLeft: '5px'}} onClick={this.handleOnClickCancel}>
              Cancel
            </Button>

            <Button
              variant="danger"
              disabled={action === 'add'}
              className="float-right"
              onClick={this.handleOnClickDelete}>
              Delete
            </Button>

            <div style={{height: '5px'}} />

            <Form.Group controlId="formId">
              <Form.Label>id</Form.Label>
              <Form.Control type="text" disabled value={id} />
            </Form.Group>

            <Form.Group controlId="formName">
              <Form.Label>name</Form.Label>
              <Form.Control type="text" onChange={this.handleOnChangeName} value={name} />
            </Form.Group>

            <Form.Group controlId="formImageURL">
              <Form.Label>image URL</Form.Label>
              <Form.Control type="text" onChange={this.handleOnChangeImageURL} value={mainImageUrl} />
            </Form.Group>

            <Form.Group controlId="formParentId">
              <Form.Label>parent id</Form.Label>
              <Form.Control type="text" onChange={this.handleOnChangeParentId} value={parentId} />
            </Form.Group>
          </Form>
        )}
      </>
    );
  }
}

CategoriesItem.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    mainImageUrl: PropTypes.string,
    parentId: PropTypes.number,
  }).isRequired,
  callback: PropTypes.func.isRequired,
  action: PropTypes.string.isRequired,
};

export default CategoriesItem;
