const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest; //This line imports the XMLHttpRequest object from the xmlhttprequest library, which allows the client to make HTTP requests.
const API = 'https://api.escuelajs.co/api/v1'; //This line sets the API constant to the base URL of the API being used.

function fetchData(urlApi, callback){ //This line declares the fetchData function, which takes two parameters: the urlApi to fetch data from, and a callback function that will be called when the data is received.
    let xhttp = new XMLHttpRequest(); //This line creates a new XMLHttpRequest object and assigns it to the xhttp variable.

    xhttp.open('GET', urlApi, true); //This line initializes a new request by calling the open() method on the xhttp object. The first argument specifies the HTTP method (in this case, GET), the second argument is the URL to send the request to (urlApi), and the third argument specifies whether the request should be asynchronous (true).
    xhttp.onreadystatechange = function (event){ //This line sets up an event listener for the onreadystatechange event, which will be triggered when the state of the request changes.
        if(xhttp.readyState === 4){ //This line checks if the readyState property of the xhttp object is 4, which indicates that the request has completed.
            if(xhttp.status === 200){ //This line checks if the status property of the xhttp object is 200, which indicates that the request was successful.
                callback(null, JSON.parse(xhttp.responseText)); //This line calls the callback function with the parsed response data as the second argument, and null as the first argument (indicating that there is no error).
            } else {
                const error = new Error('Error: ' + urlApi); //This line creates a new Error object with a message that includes the urlApi parameter, to indicate that an error occurred.
                return callback(error, null); //This line calls the callback function with the Error object as the first argument (indicating that an error occurred), and null as the second argument.
            }
        }
    }
    xhttp.send(); //This line sends the HTTP request to the server.
}

fetchData(`${API}/products`, (error1, data1) => { //This line calls the fetchData function with the ${API}/products URL and a callback function.
    if(error1) return console.log(error1); //This line checks if an error occurred, and logs the error to the console if it did.
    fetchData(`${API}/products/${data1[0].id }`, (error2, data2) => { //This line calls the fetchData function with the ${API}/products/${data1[0].id} URL (which includes the id of the first product returned by the previous request) and a callback function.
        if(error2) return console.error(error2); //This line checks if an error occurred, and logs the error to the console if it did.
        fetchData(`${API}/categories/${data2?.category?.id}`, function (error3, data3){ //This line calls the fetchData() function again with the URL for fetching the category data based on the product's category ID, and a callback function to be executed when the data is received.
            if (error3) return console.log(error3);  //This line checks if there is an error, and if so, logs the error message to the console and returns.
            console.log(data1[0]); //This line logs the first product's data to the console.
            console.log(data2.title); //This line logs the title of the second product to the console.
            console.log(data3.name); //This line logs the name of the category of the second product to the console.
        })
    })
});
