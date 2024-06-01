export const toggleExpansion = (containerClass) => {
    const containers = document.querySelectorAll('.search-container, .settings-container');

    containers.forEach(container => {
        switch (true) {
            case container.classList.contains('expanded') && container.classList.contains(containerClass):
                container.classList.remove('expanded');
                break;
            case container.classList.contains(containerClass):
                container.classList.add('expanded');
                break;
            default:
                container.classList.remove('expanded');
                break;
        }
    });
};
