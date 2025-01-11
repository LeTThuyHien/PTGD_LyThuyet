const urlBacon = "https://jsonplaceholder.typicode.com/todos/1";
(function(){
    $.ajax({
        url: "https://jsonplaceholder.typicode.com/todos/1",
        beforeSend: function (xhr) {
            xhr.overrideMimeType("text/plain; charset=x-user-defined");
        }

    })
    .done(function(data){
        console.log(data);
    })
    .fail(function(){
        if (console && console.log) {
        console.log("Sample of data:", data.slice(0, 100));
        }            
    })
})()

