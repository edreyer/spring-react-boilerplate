import jsdom from 'jsdom';
import chai from 'chai';
import chaiImmutable from 'chai-immutable';
import chaiEnzyme from 'chai-enzyme'

// Create 'jsdom' versions of document and window objects
const doc = jsdom.jsdom('<!doctype html><html><body></body></html>');
const win = doc.defaultView;

// Assign to global to make available to React when it accesses these objects
global.document = doc;
global.window = win;

// Hoist window objects to global object to simulate being able to access them without window,
// which is how browsers behave
Object.keys(window).forEach((key) => {
    if (!(key in global)) {
        global[key] = window[key];
    }
});

// use the immutables chai plugin for immutable collections, used in tests
chai.use(chaiImmutable);
chai.use(chaiEnzyme());
