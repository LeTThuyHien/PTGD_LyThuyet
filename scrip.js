const urlBacon = "https://jsonplaceholder.typicode.com/todos/1";
(function(){
    $.ajax({
        url: "https://jsonplaceholder.typicode.com/todos/1",
        datatype: "json",

    })
    .done(function(data){
        console.log(data);
    })
    .fail(function(){
        alert("no good");
    })
})()
