$('button').on("click", function() {
    let id = $('.input').val()
    $.ajax({
        method: "GET",
        url: 'https://www.googleapis.com/books/v1/volumes?q=isbn:'+id,
        success: function (data) {
            console.log(data)
        },
        error: function (xhr, text, error) {
            console.log(text)
        }
    })
  });
const fetch = function (id) {
   
}