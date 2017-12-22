window.onload = function() {
    var canvas = document.getElementById('tshirtCanvas');
    if (canvas.getContext) {
      var context = canvas.getContext("2d");
      context.fillRect(10, 10, 100, 100 );
    }
    else {
      alert("Hey you!: update your browser");
    }

    var selectObj = document.getElementById('backgroundColor');
    var index = selectObj.selectedIndex;
    var bgColor = selectObj[index].value;
    alert(selectObj);
    alert(index);
    alert(bgColor);

    var selectObj = document.getElementById('shape');
    var index = selectObj.selectedIndex;
    var shape = selectObj[index].value;
    alert(selectObj);
    alert(index);
    alert(shape);

    var selectObj = document.getElementById('foreGroundColor');
    var index = selectObj.selectedIndex;
    var fgColor = selectObj[index].value;
    alert(selectObj);
    alert(index);
    alert(fgColor);
};
