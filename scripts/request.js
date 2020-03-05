function request(){
    fetch('http://www.json-generator.com/api/json/get/cfQCylRjuG')
    .then(response => response.json())
    .then(data => {
        const {getUsersData} = data
        if(getUsersData){
          return fetch('http://www.json-generator.com/api/json/get/cfVGucaXPC')
        }
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error))
}
request()