

let theme = localStorage.getItem('theme')
let tabs = document.getElementsByClassName("tab");
let active = document.getElementsByClassName("active")
let content = document.querySelector('#content')
let about = document.querySelector('#about')
let ender = document.getElementById('#ender')
let kenma = document.getElementById('#kenma')
let themes = document.getElementById('#theme-options-wrapper')
let designer = false
let mode = 'blue'
var passive = 0
var left = 1;
var right = 3;

function show() {
    for (i = 1; i <= 5; i++) {
        document.getElementById("c" + i).style.display = "inline-block"
    }
}

if (theme == null) {
    setTheme('blue')
} else {
    setTheme(theme)
}



(function ($) {

    // Get the .gif images from the "data-alt".
    var getGif = function () {
        var gif = [];
        $('img').each(function () {
            var data = $(this).data('alt');
            gif.push(data);
        });
        return gif;
    }

    var gif = getGif();

    // Preload all the gif images.
    var image = [];

    $.each(gif, function (index) {
        image[index] = new Image();
        image[index].src = gif[index];
    });

    // Change the image to .gif when clicked and vice versa.
    $('figure').on('click', function () {

        var $this = $(this),
            $index = $this.index(),

            $img = $this.children('img'),
            $imgSrc = $img.attr('src'),
            $imgAlt = $img.attr('data-alt'),
            $imgExt = $imgAlt.split('.');

        if ($imgExt[1] === 'gif') {
            $img.attr('src', $img.data('alt')).attr('data-alt', $imgSrc);
        } else {
            $img.attr('src', $imgAlt).attr('data-alt', $img.data('alt'));
        }

        // Add play class to help with the styling.
        $this.toggleClass('play');

    });

})(jQuery);



tabs[0].addEventListener('click', () => {

    if (designer == true) {
        setTheme('blue')
        content.innerHTML = '<p>I am a web developer with a passion for details</p>'
        about.style = 'display: block'
        gallery.style = 'display: none'
        design.style = 'display: none'
        programmer.style = 'display: block'
        designer = false
        tabs[0].classList.toggle("active")
        tabs[1].classList.toggle("active")
        console.log(designer);

    } else {
        console.log(designer);
    }
})

tabs[1].addEventListener('click', () => {
    if (designer == true) {
        console.log(designer);

    } else {
        setTheme('purple')
        content.innerHTML = '<p>I am an illustrator and pixel art animator</p>'
        about.style = 'display: none'
        gallery.style = 'display: block'
        design.style = 'display: block'
        programmer.style = 'display: none'
        new Glide('.glide').mount()
        designer = true
        passive = 1
        tabs[0].classList.toggle("active")
        tabs[1].classList.toggle("active")
        console.log(designer);
    }
})


let themeDots = document.getElementsByClassName('theme-dot')

for (var i = 0; themeDots.length > i; i++) {
    themeDots[i].addEventListener('click', function () {
        let mode = this.dataset.mode
        console.log('Option clicked:', mode)
        setTheme(mode)
    })
}

var form = document.getElementById("my-form");

async function handleSubmit(event) {
    event.preventDefault();
    var status = document.getElementById("status");
    var data = new FormData(event.target);
    fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        status.classList.add('success')
        status.innerHTML = "Thanks for your submission!";
        form.reset()
    }).catch(error => {
        status.classList.add('error')
        status.innerHTML = "Oops! There was a problem submitting your form"
    });
}
form.addEventListener("submit", handleSubmit)

function setTheme(mode) {
    if (mode == 'light') {
        document.getElementById('theme-style').href = 'estilos.css'
    }

    if (mode == 'blue') {
        document.getElementById('theme-style').href = 'blue.css'
    }

    if (mode == 'green') {
        document.getElementById('theme-style').href = 'green.css'
    }

    if (mode == 'red') {
        document.getElementById('theme-style').href = 'red.css'
    }

    if (mode == 'purple') {
        document.getElementById('theme-style').href = 'purple.css'
    }

    if (mode == 'purple') {
        localStorage.setItem('blue', mode);
    } else {
        localStorage.setItem('theme', mode);
    }


}