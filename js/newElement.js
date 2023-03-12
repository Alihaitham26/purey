function newElement(tagName, props,...children) {
    const element = document.createElement(tagName);
    if (props) {
        for (const key in props) {
            if (props.hasOwnProperty(key)) {
                element.setAttribute(key, props[key]);
            }
        }
    }
    if (children) {
        for (const child of children) {
            if(typeof child === 'string') {
                element.appendChild(document.createTextNode(child));
            } else {
                element.appendChild(child);
            }
        }
    }
    return element;
}
module.exports = newElement;
