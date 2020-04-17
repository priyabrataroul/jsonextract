function getJsonData() {
  fetch("https://randomuser.me/api/?results=10")
  .then((response) => {
    if (response.status === 200) {
      return response.json();
    }
  })
  .then((data) => {
    manipulateJsonObject(data);
    return data;
  })
  .catch(e => {
    console.error('Error:', e);
  });
}
function manipulateJsonObject(data) {
  console.log(data);
  var listOfNames = document.getElementById("listOfNames");
  data && data.results.map(result => {
    if (result.name) {
      const addList = document.createElement("li");
      const valueObj = document.createTextNode(`${result.name.first} ${result.name.last}`);
      addList.appendChild(valueObj);
      listOfNames.appendChild(addList);
    }
  });
}
getJsonData();
// manipulateJsonObject();
