console.log("Starting XMLHttpRequest RESTful GET");
// Sử dụng API miễn phí thay thế
var url = "https://jsonplaceholder.typicode.com/users";
var xhr = new XMLHttpRequest()
xhr.open('GET', url + '/1', true)
xhr.onload = function () {
    var users = JSON.parse(xhr.responseText);
    if (xhr.readyState == 4 && xhr.status == "200") {
        console.table(users);
    } else {
        console.error(users);
    }
}
xhr.send(null);
