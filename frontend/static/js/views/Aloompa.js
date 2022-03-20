import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Aloompa");
    }

    async getHtml() {
        return `
        <h1>Aloompa</h1>
        <p>
            I enjoy making things that enhance people's lives, even in the tiniest of ways. In everything I create, I strive to deliver simplicity, clarity and brand personality. In everything I create, I strive to deliver simplicity, clarity. 
        </p>
        `;
    }
}