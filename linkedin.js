setInterval(function() {
    var connectBtns = document.getElementsByClassName('bt-request-buffed');
    for (var i = 0; i < 4; i += 3) {
        console.log(connectBtns[i].parentNode.children[0].children[0].children[0].textContent);
        connectBtns[i].click();
    }
    window.scrollBy(0, 10);
}, 2000);
