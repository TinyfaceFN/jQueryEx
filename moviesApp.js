$('#submit').on('click', function (click) {
    click.preventDefault()
    if ($('form')[0].checkValidity()) {
        let nameOfMovie = $('#nameofmovie').val()
        let movieScore = $('#moviescore').val()
        let newReview = $(`<li> Name: ${nameOfMovie} Score:${movieScore}% <button class = 'remove'>Remove</button></li> `)
        $('ul').prepend(newReview)
    }
    else {
        alert('Please make sure name has atleast 2 chars + val is between 0-10')
    }
})
$('form').on('submit', function (submit) {
    // submit.preventDefault()
    submit.checkValidity()
})
$('ul').on('click', '.remove', function (click) {
    click.preventDefault()
    $(this).parent('li').remove()
})

$('.removeall').on('click', function (click) {
    click.preventDefault()
    $('li').remove()
})

//want to come back to do further study for alphabatize and order by num BUT think I need to save these inputs to a clas when input or at the least an object so wil come back. 