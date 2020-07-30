console.log("alert");

$(document).ready(function () {
  $("span.w_tle a").mouseover(function () {
    const text = $(this).text();
    $(this).css("background-color", "yellow");
    $.ajax({
      type: "POST",
      url: "http://localhost:5000/",
      contentType: "application/json",
      data: JSON.stringify({ text: text }),
      success: function (response) {
        console.log("Data Loaded: " + response.text + response.message);
      },
    });
  });
});
