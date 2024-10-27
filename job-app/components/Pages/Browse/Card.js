import {fetchPages} from '/static/api.js'

class CardElement extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode:'open'});
        this.render();
    }

    async render(){
        console.log("Icon", this.shadowRoot.getAttribute('icon'))
        this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css" integrity="sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
        <link rel="stylesheet" href="browse.css"></link>
        

        <div className='card'>
                    <div className='svgicon'>
                        <i className=${this.shadowRoot.getAttribute(icon) + ' btn'}></i>
                    </div>
                    <div style="font-weight: bold; font-size: 1.2em;padding-top:3.5em">${this.shadowRoot.getAttribute(heading)}</div>
                    <div style="padding-top:1em">${this.shadowRoot.getAttribute(vacancy)} vacancy</div>
        </div>
    `;
    }
}

customElements.define('Card-comp', CardElement);