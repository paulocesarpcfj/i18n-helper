import { translations } from './texts';

const clearRootClass = () => {
    const langsRoot = document.querySelectorAll('#content > .parent');
    const arrLangs = Array.from(langsRoot);

    return arrLangs.map(lang => document.querySelector(`#${lang.id}`).className = '');
}

const countStrings = (elements, isFiltered = false) => {
    return elements.map(el => {
        const count = document.querySelector(el).querySelectorAll('div').length;

        if (isFiltered) {
            return document.querySelector(`${el} > strong > span`).innerHTML = ` (${count - 1})`;
        }

        return document.querySelector(`${el} > strong`).innerHTML += ` (${count})`;
    });
}

const verifyTextIntegrity = (string, type = 'parent') => {
    const element = document.querySelectorAll(`div[data-text="${string}"]`);
    const arrElement = Array.from(element);

    if (arrElement.length % 4 === 0) {
        return arrElement.map(el => document.querySelector(`#${el.id}`).className = `${type} ok`);
    } else if (arrElement.length === 1) {
        return arrElement.map(el => document.querySelector(`#${el.id}`).className = `${type} nok`);
    }

    return arrElement.map(el => document.querySelector(`#${el.id}`).className = `${type} partial`);
};

const renderLevel = (nodes, element, isRoot = false, currentLang = 'en-US') => {
    return Object.keys(nodes).map((content, key) => {
        if (isRoot) {
            currentLang = content;
        }

        if (nodes[content] && typeof nodes[content] === 'object') {
            element.innerHTML += `
                <div
                    data-text="${content}"
                    data-lang="${currentLang}"
                    id="${element.id}-${content}-${key}"
                >
                    <strong>${content}:</strong>
                </div>
            `;

            verifyTextIntegrity(content, 'parent');
            return renderLevel(nodes[content], document.getElementById(`${element.id}-${content}-${key}`), false, currentLang);
        }

        element.innerHTML += `
            <div
                data-text="${content}"
                data-lang="${currentLang}"
                id="${element.id}-${content}-${key}"
            >
                <strong>${content}:</strong> ${nodes[content]}
            </div>
        `;

        return verifyTextIntegrity(content, 'node');
    })
};

const contentWrapper = document.getElementById('content');
renderLevel(translations, contentWrapper, true);
clearRootClass();
countStrings(['div[data-text=en-US]', 'div[data-text=pt-BR]', 'div[data-text=es-ES]', 'div[data-text=de-DE]']);

// Filters
document.getElementById('filterByNOK').addEventListener('click', () => {
    const enWrapper = document.getElementById('en-filter');
    const ptWrapper = document.getElementById('pt-filter');
    const esWrapper = document.getElementById('es-filter');
    const deWrapper = document.getElementById('de-filter');

    [enWrapper, ptWrapper, esWrapper, deWrapper].map(lang => lang.innerHTML = '');

    document.getElementById('filterByPartial').classList = '';
    document.getElementById('filteredWrapper').classList = '';
    document.getElementById('clearFilter').classList = '';

    const nok = document.querySelectorAll('.nok');
    const arrNOK = Array.from(nok);

    document.getElementById('content').classList = 'hidden';
    document.getElementById('filterByNOK').classList = 'active';

    arrNOK.map(el => {
        const cloneEl = el.cloneNode(true);
        
        switch(cloneEl.attributes['data-lang'].value) {
            case 'en-US':
                return enWrapper.append(cloneEl)
            case 'pt-BR':
                return ptWrapper.append(cloneEl)
            case 'es-ES':
                return esWrapper.append(cloneEl)
            case 'de-DE':
                return deWrapper.append(cloneEl)
        }
    });

    return countStrings([
        'div[data-filtered-text=en-US]',
        'div[data-filtered-text=pt-BR]',
        'div[data-filtered-text=es-ES]',
        'div[data-filtered-text=de-DE]'
    ], true);
});

document.getElementById('filterByPartial').addEventListener('click', () => {
    const enWrapper = document.getElementById('en-filter');
    const ptWrapper = document.getElementById('pt-filter');
    const esWrapper = document.getElementById('es-filter');
    const deWrapper = document.getElementById('de-filter');

    [enWrapper, ptWrapper, esWrapper, deWrapper].map(lang => lang.innerHTML = '');

    document.getElementById('filterByNOK').classList = '';
    document.getElementById('filteredWrapper').classList = '';
    document.getElementById('clearFilter').classList = '';

    const nok = document.querySelectorAll('.partial');
    const arrNOK = Array.from(nok);

    document.getElementById('content').classList = 'hidden';
    document.getElementById('filterByPartial').classList = 'active';

    arrNOK.map(el => {
        const cloneEl = el.cloneNode(true);
        
        switch(cloneEl.attributes['data-lang'].value) {
            case 'en-US':
                return enWrapper.append(cloneEl)
            case 'pt-BR':
                return ptWrapper.append(cloneEl)
            case 'es-ES':
                return esWrapper.append(cloneEl)
            case 'de-DE':
                return deWrapper.append(cloneEl)
        }
    });

    return countStrings([
        'div[data-filtered-text=en-US]',
        'div[data-filtered-text=pt-BR]',
        'div[data-filtered-text=es-ES]',
        'div[data-filtered-text=de-DE]'
    ], true);
});

document.getElementById('clearFilter').addEventListener('click', () => {
    document.getElementById('filterByNOK').classList = '';
    document.getElementById('filterByPartial').classList = '';
    document.getElementById('filteredWrapper').classList = 'hidden';
    document.getElementById('content').classList = '';
    document.getElementById('clearFilter').classList = 'disabled';

    const enWrapper = document.getElementById('en-filter');
    const ptWrapper = document.getElementById('pt-filter');
    const esWrapper = document.getElementById('es-filter');
    const deWrapper = document.getElementById('de-filter');

    [enWrapper, ptWrapper, esWrapper, deWrapper].map(lang => lang.innerHTML = '');
});
// Filters End
