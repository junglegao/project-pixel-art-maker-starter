// Select color input
// Select size input
var colorPicker = $('#colorPicker');
var inputHeight = $('#inputHeight');
var inputWeight = $('#inputWeight');
var table = $('#pixelCanvas');

// add submit event listener
$('#sizePicker').on('submit', makeGrid);
// When size is submitted by the user, call makeGrid()

function makeGrid(event) {
    // Your code goes here!
    event.preventDefault();
    // 初始化绘画区
    $(".canvas-row").remove();

    var color = colorPicker.val();
    var height = inputHeight.val();
    var weight = inputWeight.val();
    console.log("color: "+ color + " height: " + height + " weight: " + weight);

    for (var x=0; x<height; x++) {
        // 新增每一行
        table.append("<tr class='canvas-row'></tr>");
        var canvasRow = $('table').find('tr')[x];
        console.log(typeof canvasRow);
        for (var y=0; y<weight; y++) {
            // 新增每一行的单元格
            var cell = document.createElement("td");
            canvasRow.append(cell);
        }
    }
}

$('table').on('click', 'td', function(event) {
    // 监听单元格上的点击事件，
    event.preventDefault();
    var color = colorPicker.val();
    if ($(event.target).hasClass('marked')) {
        // 单击已标记单元格会重置颜色为白色
        $(event.target).css("background", '#FFFFFF');
        $(event.target).removeClass('marked');
    } else {
        // 单击未标记单元格会填充颜色，
        $(event.target).css("background", color);
        $(event.target).addClass('marked');
    }

});

colorPicker.on('change', function(event) {
    // 用新颜色填充已经标记的单元格
    var color = colorPicker.val();
    $('.marked').css("background", color);
});

