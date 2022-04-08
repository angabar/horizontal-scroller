import { LitElement, html } from "lit";
import { customElement, property, query } from "lit/decorators.js";

@customElement("horizontal-scroller")
class HorizontalScroller extends LitElement {
    constructor() {
        super();
    }

    @property({ type: String })
    anchor = "";

    @property({ type: Number })
    sensibility = 20;

    @property({ type: Boolean })
    inverted = false;

    connectedCallback() {
        super.connectedCallback();
        this.addEventListener("wheel", this._handleScroll);
    }

    disconnectedCallback() {
        this.removeEventListener("wheel", this._handleScroll);
    }

    _handleScroll(event: WheelEvent) {
        const element = document.getElementById(this.anchor);

        if (event.deltaY < 0) {
            if (this.inverted) return (element.scrollLeft += this.sensibility);
            return (element.scrollLeft -= this.sensibility);
        } else if (event.deltaY > 0) {
            if (this.inverted) return (element.scrollLeft -= this.sensibility);
            return (element.scrollLeft += this.sensibility);
        }
    }

    goToScroll(pixels: number) {
        const element = document.getElementById(this.anchor);
        return (element.scrollLeft += pixels);
    }

    goToLeftLimit() {
        const element = document.getElementById(this.anchor);
        return (element.scrollLeft = 0);
    }

    goToRightLimit() {
        const element = document.getElementById(this.anchor);
        return (element.scrollLeft = element.clientWidth + element.offsetWidth);
    }

    render() {
        return html`<slot></slot>`;
    }
}

export default HorizontalScroller;
