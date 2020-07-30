console.log("alert");

$(document).ready(function () {
  $("li").click(function () {
    const text = $(this).text();
    var color = $(this).find("span.w_tle a").css("background-color");
    $(this).find("span.w_tle a").css("background-color", "yellow");

    if (color != "yellow") {
      $.ajax({
        type: "POST",
        url: "http://localhost:5000/",
        contentType: "application/json",
        data: JSON.stringify({ text: text }),
        success: function (response) {
          console.log("Data Loaded: " + response.text + response.message);
        },
      });
    }
  });
});

//span.w_tle a
