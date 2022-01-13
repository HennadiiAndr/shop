function initMap() {
    const uluru = { lat: -25.344, lng: 131.036 };
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 4,
      center: uluru,
    });
    const marker = new google.maps.Marker({
      position: uluru,
      map: map,
    });
  }

  fetch('https://api.justin.ua/justin_pms/hs/v2/runRequest', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: {
      "keyAccount": "FOP_BabychIY",
      "sign": "91cbebc20b1576fc092a78f8d7a8bee484256b5a",
      "request": "getData",
      "type": "request",
      "name": "req_DepartmentsLang",
      "language": "RU",
      "TOP": 50,
      "params": {
          "language": "RU"
      },
      "filter": []
    }
  })
  
  .then(answer => answer.json())
  .then((data) => {
    console.log(data);
  });