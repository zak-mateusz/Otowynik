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

                if (targetId === 'navbar-main-placeholder') {
                    initializeMenu();
                }
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
