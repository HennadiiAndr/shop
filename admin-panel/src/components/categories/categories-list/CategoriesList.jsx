import React from 'react';
import {ListGroup, Button} from 'react-bootstrap';
import {getList, getItem, patchItem, addItem, deleteItem} from '../../../api/categories';
import Title from '../../title';
import CategoriesItem from '../categories-item/CategoriesItem';

class CategoriesList extends React.Component {
  state = {
    list: [],
    activeItem: {},
    action: 'list',
  };

  componentDidMount() {
    getList().then(this.setList);
  }

  setList = (list) => {
    this.setState({list});
  };

  setActiveItem = (activeItem) => {
    this.setState({activeItem});
  };

  handleOnItemClick = (id) => {
    const action = 'edit';
    getItem(id).then((activeItem) => {
      this.setState({activeItem, action});
    });
  };

  handleOnClickAdd = () => {
    this.setState({
      activeItem: {
        id: 0,
        name: '',
        mainImageUrl: '',
        parentId: 0,
      },
      action: 'add',
    });
  };

  callback = (activeItem, action) => {
    if (action === 'add') {
      addItem(activeItem).then(() => {
        getList().then(this.setList);
      });
    }

    if (action === 'save') {
      patchItem(activeItem).then(() => {
        getList().then(this.setList);
      });
    }

    if (action === 'delete') {
      deleteItem(activeItem).then(() => {
        getList().then(this.setList);
      });
    }

    this.setState({action: 'list'});
  };

  render() {
    const {list, activeItem, action} = this.state;

    let render = <CategoriesItem data={activeItem} callback={this.callback} action={action} />;

    if (action === 'list') {
      render = (
        <>
          <Button variant="success" onClick={this.handleOnClickAdd}>
            Add
          </Button>

          <div style={{height: '5px'}} />

          <ListGroup>
            {list.map((item) => (
              <ListGroup.Item
                key={item.id}
                action
                onClick={() => {
                  this.handleOnItemClick(item.id);
                }}>
                {item.name}
              </ListGroup.Item>
            ))}
          </ListGroup>
        </>
      );
    }

    return (
      <>
        <Title title="Categories" />
        {render}
      </>
    );
  }
}

export default CategoriesList;
