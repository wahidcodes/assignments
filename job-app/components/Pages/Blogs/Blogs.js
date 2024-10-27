import {fetchPages} from '/static/script.js'

class BlogElement extends HTMLElement{
    constructor(){
        super();
        this.render();
    }

    async render(){
        const output = await fetchPages();
        const res = output.home.sections[3];

        console.log(res)

        this.innerHTML = `
        <div class="px-4 py-8 lg:px-16 lg:py-20">
            <div class=" font-semibold text-gray-600">${res.heading}</div>
                <h1 class="font-bold text-3xl lg:text-5xl mt-8">${res.caption}</h1>
                <hr class="mt-8">
                <div class="py-2 lg:flex lg:flex-row justify-between">
                ${res.features.map(feature=>`
                        <div class="lg:w-1/3 my-6 lg:px-20 flex justify-start lg:justify-around flex-col shadow-lg px-3 py-6 mx-8">
                            <img src="/static/img/${feature.imgUrl}" />
                            <div class="py-4">
                                <i class="fa-solid fa-calendar"></i>
                                ${feature.time}
                            </div>
                            <div class="font-bold lg:font-semibold text-xl lg:text-2xl">${feature.heading}</div>
                            <div class="">${feature.description}</div>
                            <button class="p-4 mt-4"><a href=${res.cta.url}>${res.cta.label}</a>
                        </div>
                `).join('')}
            </div>
        </div>
        `
    }
}

customElements.define('blog-comp', BlogElement);