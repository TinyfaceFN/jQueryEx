$().ready(function () {
    console.log("Let's get ready to party with jQuery!")
})

$('img').addClass('image-center')
$('p').last().remove()

let randomNum = Math.floor(Math.random() * 101)
$('#title').css(`font-size`, ` ${randomNum}px`)
$('<li>this is an addition!</li>').appendTo('ol')
$('aside').replaceWith('<p class="col-sm-4"> Sorry for this list, it was a mistake.</p>')

let r = 255
let g = 255
let b = 255
$('.form-control').eq(0).on('change', function () {
    r = $(this).val()
    $('body').css('background-color', `rgb(${r},${g},${b})`)
})
$('.form-control').eq(1).on('change', function () {
    g = $(this).val()
    $('body').css('background-color', `rgb(${r},${g},${b})`)
})
$('.form-control').eq(2).on('change', function () {
    b = $(this).val()
    $('body').css('background-color', `rgb(${r},${g},${b})`)
})

$('img').on('click', function () {
    $(this).remove()
})
