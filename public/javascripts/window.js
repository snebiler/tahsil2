function win() {
    var width = Number.parseInt(window.innerWidth);
    var head = document.getElementsByTagName('HEAD')[0];
    var link = document.createElement('link');
    link.rel = 'stylesheet';
        link.type = 'text/css';
    if (width < 768) {
        console.log("768 den kücük");
        link.href = 'stylesheets/mobile.css';
        // console.log(link);
        head.appendChild(link);
    } else {
        link.href = 'stylesheets/style.css';
        head.appendChild(link);
        console.log(width);
    }

}

