import { fetchPages } from "/src/SectionAPIs/script.js";


class aboutus extends HTMLElement{
    
    constructor(){
        super();
        this.render();
    }

    async render(){
        const output = await fetchPages();
        const res = output.home.sections[2]
        console.log(res);
        this.innerHTML = `
            <div class="flex flex-col-reverse lg:flex-row">
                <img src="/static//about-02.jpg" class="h-1/3 w-full lg:w-1/2"></img>
                <div class="px-4 py-12 lg:px-20 lg:py-36 bg-[#e6f1fe]">
                    <div class="text-gray-500 font-semibold py-3">${res.name}</div>
                    <div class="text-2xl lg:text-4xl font-bold leading-[1.5em]">${res.caption}</div>
                    <div class="py-12">${res.description}</div>
                    <button class="text-blue-700 font-extrabold text-base py-2"><a href=${res.cta.url}>${res.cta.label} &gt</a></button>
                </div>
            </div>
        `
    }
} 

customElements.define('about-us', aboutus);