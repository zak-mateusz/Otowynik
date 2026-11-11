function loadComponent(file, targetId) {
    fetch(file)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Nie znaleziono pliku: ${file}`);
            }
            return response.text();
        })
        .then(data => {
            const target = document.getElementById(targetId);

            if (target) {
                target.innerHTML = data;

                //zwijanie sidbar
                    if (document.getElementById('sidebar') &&
                            !document.querySelector('#sidebar .toggle')) {

                            $('<a href="#sidebar" class="toggle">Toggle</a>')
                                .appendTo($('#sidebar'))
                                .on('click', function(event) {

                                    event.preventDefault();
                                    event.stopPropagation();

                                    $('#sidebar').toggleClass('inactive');

                                });
                        }

                if (
                    targetId === 'navbar-main-placeholder'||
                    targetId === 'navbar-other-placeholder'||
                    targetId === 'header-placeholder')
                    {
                    initializeMenu();
                }
            }
            })
        .catch(error => {
            console.error(error);
        });
    }
function initializeMenu() {

    var $menu = $('#menu'),
        $menu_openers = $menu.children('ul').find('.opener');

    $menu_openers.each(function() {

        var $this = $(this);

        $this.off('click');

        $this.on('click', function(event) {

            event.preventDefault();

            $menu_openers.not($this).removeClass('active');
            $this.toggleClass('active');

        });

    });

}
