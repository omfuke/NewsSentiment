// $(document).ready(function () {
//   $("li").click(function () {
//     const text = $(this).text();
//     var color = $(this).find("span.w_tle a").css("background-color");
//     $(this).find("span.w_tle a").css("background-color", "yellow");

//     if (color != "yellow") {
//       $.ajax({
//         type: "POST",
//         url: "http://localhost:5000/",
//         contentType: "application/json",
//         data: JSON.stringify({ text: text }),
//         success: function (response) {
//           console.log("Data Loaded: " + response.text + response.message);
//         },
//       });
//     }
//   });
// });

chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(message, sender, sendResponse) {
  console.log(message.txt);

  if (message.txt === "hello") {
    alert("Blue - NORMAL");

    $(document).ready(function () {
      $("li").click(function () {
        const element = $(this);
        const text = $(this).text();
        var color = $(this).find("span.w_tle a").css("background-color");
        $(this).find("span.w_tle a").css("background-color", "yellow");
        console.log($(this));

        function handleData(response) {
          console.log(response);
          if (response.message === "hello") {
            element.find("span.w_tle").css("border", "2px solid green");
          }
        }

        if (color != "yellow") {
          $.ajax({
            type: "POST",
            url: "http://localhost:5000/",
            contentType: "application/json",
            data: JSON.stringify({ text: text }),
            success: handleData,
          });
        }
        // $(this).find("span.w_tle").css("border", color);
      });
    });
  }
}

//span.w_tle a
