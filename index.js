import { translations } from './texts';

const verifyTextIntegrity = (string, type = 'parent') => {
    const element = document.querySelectorAll(`div[data-text="${string}"]`);
    const arrElement = Array.from(element);

    if (arrElement.length % 4 === 0) {
        return arrElement.map(el => document.querySelector(`#${el.id}`).className = `${type} ok`);
    } else if (arrElement.length % 4 !== 0) {
        return arrElement.map(el => document.querySelector(`#${el.id}`).className = `${type} partial`);
    } else {
        return arrElement.map(el => document.querySelector(`#${el.id}`).className = `${type} nok`);
    }
}

const renderLevel = (nodes, element) => {
    return Object.keys(nodes).map((content, key) => {
        if (nodes[content] && typeof nodes[content] === 'object') {
            element.innerHTML += `
                <div
                    data-text="${content}"
                    class="parent"
                    id="${element.id}-${content}-${key}"
                >
                    <strong>${content}:</strong> 
                </div>
            `

            verifyTextIntegrity(content, 'parent');
            return renderLevel(nodes[content], document.getElementById(`${element.id}-${content}-${key}`))
        } else {
            element.innerHTML += `
                <div
                    data-text="${content}"
                    class="node"
                    id="${element.id}-${content}-${key}"
                >
                    <strong>${content}:</strong> ${nodes[content]}
                </div>
            `
            verifyTextIntegrity(content, 'node');
        }
    });
}

const contentWrapper = document.getElementById('content');
renderLevel(translations, contentWrapper);
