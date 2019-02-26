function bold(){
    $("#paragraphe").css("fontWeight","bold")
}
function italic(){
    $("#paragraphe").css("fontStyle","italic")
}
function underlined(){
    $("#paragraphe").css("textDecoration","underline")
}
function Select1(){
let size = $("#id1").val()
$("#paragraphe").css("fontSize", size)
}
function fontfam(){
    let font = $("#id2").val()
    $("#paragraphe").css("fontFamily", font)
}
