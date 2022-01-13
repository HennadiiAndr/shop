export function getList() {
  return fetch(`${process.env.REACT_APP_API_SERVER}/categories`, {
    headers: {
      acception: 'application/json',
    },
  }).then((response) => {
    if (response.ok) return response.json();
    throw new Error("Can't get a categories list");
  });
}

export function getItem(id) {
  return fetch(`${process.env.REACT_APP_API_SERVER}/categories/${id}`, {
    headers: {
      acception: 'application/json',
    },
  }).then((response) => {
    if (response.ok) return response.json();
    throw new Error(`Can't get category whith id ${id}`);
  });
}

export function patchItem(item) {
  return fetch(`${process.env.REACT_APP_API_SERVER}/categories/${item.id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
      Authorization: `Bearer ${localStorage.token}`,
    },
    body: JSON.stringify(item),
  }).then((response) => {
    if (response.ok) return {};
    throw new Error(`Can't patch category whith id ${item.id}`);
  });
}

export function addItem(_item) {
  const item = _item;
  delete item.id;
  return fetch(`${process.env.REACT_APP_API_SERVER}/categories`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
      Authorization: `Bearer ${localStorage.token}`,
    },
    body: JSON.stringify(item),
  }).then((response) => {
    if (response.ok) return {};
    throw new Error(`Can't post new category`);
  });
}

export function deleteItem(item) {
  return fetch(`${process.env.REACT_APP_API_SERVER}/categories/${item.id}`, {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${localStorage.token}`,
    },
  }).then((response) => {
    if (response.ok) return {};
    throw new Error(`Can't patch category whith id ${item.id}`);
  });
}
