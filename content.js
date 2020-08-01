chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(message, sender, sendResponse) {
  //console.log(message.txt);

  if (message.txt === "hello") {
    alert(
      "Click on Yellow boxes\nBlue - POSITIVE\nRed - NEGATIVE\nGreen - NORMAL"
    );

    $(document).ready(function () {
      $("li").mouseover(function () {
        const element = $(this);
        const text = $(this).text();
        $("a").bind("click", false);

        $(this).addClass("yellow");
        function handleData(response) {
          var sentiment = response.body.Sentiment;
          console.log(sentiment);

          if (sentiment === "NEGATIVE") {
            element.css({
              "background-color": "Tomato",
              "border-radius": "6%",
            });
          }
          if (sentiment === "POSITIVE") {
            element.css({
              "background-color": "#3399ff",
              "border-radius": "6%",
            });
          }
          if (sentiment === "NEUTRAL") {
            element.css({ "background-color": "green", "border-radius": "6%" });
          }
        }

        element.one("click", function () {
          $.ajax({
            type: "POST",
            url:
              "https://cexm3qgnp3.execute-api.us-east-1.amazonaws.com/dev/simple",
            contentType: "application/json",
            crossDomain: true,
            data: JSON.stringify({ text: text }),
            success: handleData,
          });
        });
        $(this)
          .find("a")
          .one("click", function () {
            $.ajax({
              type: "POST",
              url:
                "https://cexm3qgnp3.execute-api.us-east-1.amazonaws.com/dev/simple",
              contentType: "application/json",
              crossDomain: true,
              data: JSON.stringify({ text: text }),
              success: handleData,
            });
          });
      });

      $("li").mouseout(function () {
        $(this).removeClass("yellow");
      });
    });
  }
}
