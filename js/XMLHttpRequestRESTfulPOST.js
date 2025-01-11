var data = {};
var json = JSON.stringify(data);

var xhr = new XMLHttpRequest();
xhr.open("POST", url, true);
xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');

xhr.onload = function () {
    if (xhr.readyState == 4 && xhr.status == 201) {
        try {
            var users = JSON.parse(xhr.responseText);
            console.table(users); 
        } catch (e) {
            console.error("Lỗi phân tích cú pháp JSON:", e);
            console.error("Dữ liệu phản hồi không hợp lệ:", xhr.responseText);  
        }
    } else {
        console.error("Lỗi yêu cầu:", xhr.status);  
    }
};

xhr.send(json);
