// 1. create a new XMLHttpRequest object -- an object like any other!
var myRequest = new XMLHttpRequest();
// 2. open the request and pass the HTTP method name and the resource as parameters
myRequest.open('GET', 'orders');
// 3. write a function that runs anytime the state of the AJAX request changes
myRequest.onreadystatechange = function () { 
    // 4. check if the request has a readyState of 4, which indicates the server has responded (complete)
    if (myRequest.readyState === 4) {
        // 5. insert the text sent by the server into the HTML of the 'ajax-content'
        console.log("hua");
    }
};

function sendTheAJAX() {
    myRequest.send();
}

var pusher = new Pusher('key', {
    cluster: 'from web site',
    forceTLS: true
  });

// Subscribe to poll trigger
var orderChannel = pusher.subscribe('my-channel');

// Listen to 'order placed' event
// var order = document.getElementById('order-count')
orderChannel.bind('my-event', function(data) {
    var parent = document.getElementById("messages-container");
    var newElem = document.createElement("div");
    newElem.innerHTML = data["data"];
    parent.appendChild(newElem);
});