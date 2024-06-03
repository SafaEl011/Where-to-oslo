export const toggleExpansion = (containerClass) => {
    const containers = document.querySelectorAll('.search-container, .position-container, .settings-container');
    containers.forEach(container => {
        if (container.classList.contains('expanded') && container.classList.contains(containerClass)) {
            container.classList.remove('expanded');
        } else if (container.classList.contains(containerClass)) {
            container.classList.add('expanded');
        } else {
            container.classList.remove('expanded');
        }
    })
}