import { fetchFooter } from "/src/SectionAPIs/script.js";

class FooterElement extends HTMLElement{
    constructor(){
        super();
        this.render();
    }

    async render(){
        const output = await fetchFooter();
        const res = output

        console.log(res)
        this.innerHTML = `
            <div class="px-4 py-8 lg:px-28 lg:py-20 bg-black text-white flex flex-col">
                <div class="flex flex-col lg:flex-row">
                    <div class="flex items-center flex-col w-full lg:w-1/2">
                        ${res.newsletter.heading}
                        <input type="text" placeholder="Enter your email" class="p-2 my-4 w-3/4"></input>
                        <button class="bg-cyan-700 px-6 py-2 rounded-xl"><a href=${res.newsletter.cta.url}>${res.newsletter.cta.label}</a></button>
                    </div>
                    <div class="flex flex-col justify-center items-center lg:w-1/2">
                        Follow us on
                        <div class="flex flex-row">
                            ${res.socialmedia.map(item=>`
                                <a href=${item.url} class="text-xl px-4 my-8">
                                    <i class="${item.iconClass}"></i>
                                </a>
                            `).join('')}
                        </div>
                    </div>
                </div>

                <hr class="divide-y-4 mt-10"></hr>
                <div class="w-full mt-12 flex justify-center items-center">
                    ${res.copyright}
                </div>
            </div>
        `
    }
}

customElements.define('footer-comp', FooterElement);