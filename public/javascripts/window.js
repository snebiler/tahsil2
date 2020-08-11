function win() {

    var width = document.documentElement.clientWidth;

    // console.log(width);
    /**
     * head tag i içine media attribute u ile css import yaparsam kabul etmiyordu ama asagidaki gibi ekleyince duzgun bi import oldu
     */
    var head = document.getElementsByTagName('HEAD')[0];
    var linkStyle = document.createElement('link');
    linkStyle.rel = 'stylesheet';
    linkStyle.type = 'text/css';
    linkStyle.href = 'stylesheets/style.css'
    var linkMobile = document.createElement('link');
    linkMobile.rel = 'stylesheet';
    linkMobile.type = 'text/css';
    linkMobile.href = 'stylesheets/mobile.css'
    linkMobile.media = "screen and (max-width: 768px)"
    
    head.appendChild(linkStyle);
    head.appendChild(linkMobile);
    /**
     * aşağıdaki logic e de gerek kalmadı. media attribute u düzgün çalışıyor
     */

    // if (width < 768) {
    //     console.log("768 den kücük");
    //     head.appendChild(linkMobile);
    //     if (linkStyle) { head.removeChild(linkStyle) }
    // } else {
    //     head.appendChild(linkStyle);
    //     if (linkMobile) { head.removeChild(linkMobile) }
    //     console.log(width);
    // }
}
// window.addEventListener("onload", win);
// win();
