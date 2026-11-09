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
            }
        })
        .catch(error => {
            console.error(error);
        });
}