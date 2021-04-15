// Header
let configs = {
  nodeAddress: "127.0.0.1",
  nodePort: 5500,
};

// Body
$(document).ready(function () {
  setInterval(() => {
    $.ajax({
      type: "get",
      url: `http://${configs.nodeAddress}:${configs.nodePort}/cpu`,
      success: function (response) {
        // console.log(response);
        $("#cpuBar").css("width", response.toString());
        $("#cpuBarLabel").html(response.toString());
      },
    });
  }, 1000);

  setInterval(() => {
    $.ajax({
      type: "get",
      url: `http://${configs.nodeAddress}:${configs.nodePort}/mem`,
      success: function (response) {
        // console.log(response);
        $("#memBar").css("width", response.toString());
        $("#memBarLabel").html(response.toString());
      },
    });
  }, 1000);

  setInterval(() => {
    $.ajax({
      type: "get",
      url: `http://${configs.nodeAddress}:${configs.nodePort}/disk`,
      success: function (response) {
        // console.log(response);
        $("#diskBar").css("width", response.toString());
        $("#diskBarLabel").html(response.toString());
      },
    });
  }, 1000);

  $("#send").click((ev) => {
    $.ajax({
      type: "post",
      url: `http://${configs.nodeAddress}:${configs.nodePort}/cmd`,
      data: { value: $("#cmd").val() },
      dataType: "text",
      success: function (response) {
        $("#console").html(response.replace("\n", "<br>"));
      },
    });
  });
});
