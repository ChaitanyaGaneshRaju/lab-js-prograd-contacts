//selecting the element button and message
var button = document.querySelector("#btnGet");
var message = document.querySelector("#message");

//button onclick action
button.onclick = () => {
    //fetching the api
    fetch("https://jsonplaceholder.typicode.com/users")
        //if the fetch is successfull then convert the data into json
        .then(response => response.json()
            //then getting the array of contacts in api as the array of objects
            .then(contacts => {
                var contact = '<h2>List of Users</h2>'
                //looping through the array and creating person contact info
                for (const person of contacts) {
                    contact +=
                        `<div class="player">
                         <div class="strength">Name : ${person.name}</div>
                         <div>Email   : ${person.email}</div>
                         <div>Phone   : ${person.phone}</div>
                         <div>Website : ${person.website}</div>
                         <div>Company : ${person.company.name}</div>
                         <div>City    : ${person.address.city}</div>
                         <div>Zipcode : ${person.address.zipcode}</div>
                         </div>`
                }
                //embedding the contact details of persons to the message
                message.innerHTML = contact;
            })
        )
        //if the fetch is unsuccessfull then display the error
        .catch(err => console.error(err))
}