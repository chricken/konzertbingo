'use strict';

import dom from './dom.js';
import render from './render.js';
import settings from './settings.js';

// FUNKTIONEN
const domMapping = () => {
    settings.elements.main = dom.$('main');
}

const appendEventlisteners = () => {

}

const init = () => {
    domMapping();
    appendEventlisteners();
    render.table();
}

// INIT
init();