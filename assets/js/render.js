'use strict';

import settings from './settings.js';
import data from './data.js';
import dom from './dom.js';

const render = {
    table() {
        // Elemente vermischen
        // intermediate
        let tags = data.tags;

        // console.log(tags);
        tags.forEach((val, index) => {
            let random = ~~(Math.random() * data.tags.length);
            [tags[index], tags[random]] = [tags[random], tags[index]];
        })
        // console.log(tags);

        // Leeren
        settings.elements.main.innerHTML = '';

        // Tabelle neu aufbauen
        const elTable = dom.create({
            type: 'table',
            parent: elements.main,
            cssClassName: 'raster'
        })

        for (let y = 0; y < settings.height; y++) {
            const elRow = dom.create({
                type: 'tr',
                parent: elTable
            })

            for (let x = 0; x < settings.height; x++) {

                const elField = dom.create({
                    type: 'td',
                    parent: elRow,
                    content: tags.pop()
                })

            }

        }

    }
}

export default render;
export let elements = settings.elements;