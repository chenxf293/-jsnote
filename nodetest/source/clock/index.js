
        var menu = document.querySelector('#menu');
        var catalog = document.querySelector('.catalog');
        menu.onclick = function() {
            catalog.className = 'change';
        }

        var cls = document.querySelector('#close');
        cls.onclick = function() {
            catalog.className = 'catalog';
        }
    