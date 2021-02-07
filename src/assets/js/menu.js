
(function (document, Jump) {
    var openMenuButton = document.querySelector('.open-menu');
    var closeMenuButton = document.querySelector('.close-menu');
    var menu = document.querySelector('.menu');
    
    function addClass(element, newClass) {
        var classes = element.className.split(' ');
        classes.push(newClass);
        element.className = classes.join(' ');
    }

    function removeClass(element, className) {
        var classes = element.className.split(' ');
        var classIndex = classes.indexOf(className);
        if (classIndex > -1) {
            classes.splice(classIndex, 1);
            element.className = classes.join(' ');
        }
    }

    openMenuButton.addEventListener('click', function () {
        addClass(menu, 'open');
    });

    closeMenuButton.addEventListener('click', function () {
        removeClass(menu, 'open');
    });

    if (Jump) {
        var menuLinks = document.querySelectorAll('nav a');
        for (var menuLink of menuLinks) {
            menuLink.addEventListener('click', function (e) {
                var destinySelector = e.target.getAttribute('href');
                var destinyTarget = document.querySelector(destinySelector);
                removeClass(menu, 'open');
                Jump(destinyTarget, { duration: 650 });
                e.preventDefault();
            });
        }
    }
})(window.document, window.Jump);
