// Sử dụng API miễn phí thay thế
var url = "https://jsonplaceholder.typicode.com/users";
var xhr = new XMLHttpRequest();
xhr.open('GET', url, true);
xhr.onload = function () {
    var users = JSON.parse(xhr.responseText);
    if (xhr.readyState == 4 && xhr.status == 200) {
        console.table(users);
    } else {
        console.error("Error:", xhr.responseText);
    }
};
xhr.send(null);
