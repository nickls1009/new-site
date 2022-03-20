import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Home");
    }

    async getHtml() {
        return `
        <div class="home-container">
            <div class="home-type-container">
                <p class="home-intro">
                    I enjoy making things that enhance people's lives, even in the tiniest of ways. In everything I create, I strive to deliver simplicity, clarity and brand personality. 
                </p>
                <div class="section-header">
                    <div class="rule-break">
                    </div>
                </div>
                <h1 class="home-headline">Brand &amp; Product</h1>
            </div>
            <div class="horizontal-slider">
                <div class="slide-wrapper">
                    <div class="slide">
                        <img src="http://nicksigler.com/images/asurion-home-thumb.png"></img>
                        <div class="slide-text">
                            <p class="project-type">Web application</p>
                            <h4>Seattle-Tacoma International Airport</h4>
                            <a href="#"><p>Learn more</p></a>
                        </div>
                    </div>
                </div>
                <div class="slide-wrapper">
                    <div class="slide">
                    </div>
                </div>
                <div class="slide-wrapper">
                    <div class="slide">
                    </div>
                </div>
            </div>
        </div>
        `;
    }
}
