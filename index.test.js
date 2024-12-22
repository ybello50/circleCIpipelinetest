const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');

const html = fs.readFileSync(path.resolve(__dirname, './index.html'), 'utf8');

let dom;
let document;

describe('Button Click Test', () => {
    beforeEach(() => {
        dom = new JSDOM(html, { runScripts: "dangerously", resources: "usable" });
        document = dom.window.document;
    });

    it('should display "Button was clicked!" when the button is clicked', () => {
const button = document.getElementById('myButton');
        const result = document.getElementById('result');

        button.click();

        expect(result.textContent).toBe('Button was clicked!');
    });
});
