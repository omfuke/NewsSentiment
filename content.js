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
      $("li").mouseover(function () {
        const element = $(this);
        const text = $(this).text();

        $(this).find("span.w_tle").addClass("red");

        function handleData(response) {
          console.log(response);
        }

        element.click(function () {
          $.ajax({
            type: "POST",
            url:
              "https://cexm3qgnp3.execute-api.us-east-1.amazonaws.com/dev/simple",
            contentType: "application/json",

            data: JSON.stringify({ text: text }),
            success: handleData,
          });
        });
      });

      $("li").mouseout(function () {
        $(this).find("span.w_tle").removeClass("red");
      });
    });
  }
}

//span.w_tle a
