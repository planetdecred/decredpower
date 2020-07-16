//SelectByClass return an array with all items with the same className
function selectByClass(className) {
    return document.getElementsByClassName(className)
}

// Iterate and add an onclick event for every items in the array
function iterateClassItems(className, toggleClass) {
    let accordionButtons = selectByClass(className);

    for (i = 0; i < accordionButtons.length; i++) {
        accordionButtons[i].onclick = function() {
            this.classList.toggle(toggleClass);
            let list = this.previousElementSibling;
            list.style.maxHeight ? list.style.maxHeight = null : list.style.maxHeight = `${list.scrollHeight}px`;
        }
    }
}
const toggleHidden = iterateClassItems('btn-toggle', 'is-open')

// toggle hidden in all .title class headers
function toggleHeaders() {
    const titleSections = selectByClass('title');

    for(i = 0; i < titleSections.length; i++) {
        titleSections[i].onclick = function() {
            this.nextElementSibling.classList.toggle('hidden');
        }
    }
}
toggleHeaders();