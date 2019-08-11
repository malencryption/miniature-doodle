function navCollapse() {
    var x = document.getElementById("navBar");
    if (x.className === "collapsed") {
        x.className = "open";
    } else {
        x.className = "collapsed";
    }
}