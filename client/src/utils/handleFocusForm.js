export const handleFocusForm = e => {
    const element = e.target.parentElement;
    if(element.classList.contains('active-form')) {
        element.classList.remove('active-form');
    } else {
        element.classList.add('active-form');
    }
}