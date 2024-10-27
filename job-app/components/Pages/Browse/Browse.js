import {fetchPages} from '/static/api.js'

class BrowseElement extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode:'open'});
        this.render();
    }

    async render(){
        const headers = await fetchPages();
        const res = headers.home.sections[1]
        console.log(res.features);

        this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css" integrity="sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
        <link rel="stylesheet" href="/components/Pages/Browse/browse.css"></link>

        <main>
            <div class='container'>
                <div class='headings'>
                    <h1>Browse by Category</h1>
                    <p>Recruitment made easy in 100 seconds</p>
                </div>
                <div class='all_categories'>All Categories<i class="fa-solid fa-arrow-right arrow"></i></div>
            </div>

            <div class='cards'>
                ${res.features.map( job=>
                    `
                    <div class='card'>
                        <div class='svgicon'>
                            <i class="${job.iconClass} btn"></i>
                        </div>
                        <div style="font-weight: bold; font-size: 1.2em; padding-top:3.5em">${job.heading}</div>
                        <div style="padding-top:1em">${job.vacancy} vacancy</div>
                    </div>
                    `
                ).join('')}
            </div>

        </main>
    `;
    }
}

customElements.define('browse-comp', BrowseElement);