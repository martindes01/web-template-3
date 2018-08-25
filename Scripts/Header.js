// Immediately-invoked function expression - Header
(function () {
    // Toggle navigation menu
    Header_Toggle = function (HeaderId, ButtonId, HeaderClass1, HeaderClass2, ButtonClass1, ButtonClass2) {
        // Temporary variables
        var tContentBlock = document.getElementById(HeaderId);
        var tContentButton = document.getElementById(ButtonId);
        // Toggle class of content block
        if (tContentBlock.classList.contains(HeaderClass2)) {
            tContentBlock.classList.remove(HeaderClass2);
            tContentButton.classList.remove(ButtonClass2);
        } else {
            tContentBlock.classList.add(HeaderClass2);
            tContentButton.classList.add(ButtonClass2);
        }        
    };
})(window);
