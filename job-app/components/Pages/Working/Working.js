import {fetchPages} from '/static/script.js'


class Working extends HTMLElement{
    
    constructor(){
        super();
        this.render();
    }

    async render(){
        const output = await fetchPages();
        const res = output.home.sections[1];
        console.log(res);
        this.innerHTML = `
            <div class="flex flex-col justify-center items-center px-32 py-6">
                <h1 class="font-semibold text-2xl">${res.heading}</h1>
                <p class="py-8 text-gray-500">${res.caption}</p>
                <div class="flex flex-row">
                    ${res.features.map(feature=>`
                        <div class="flex flex-col justify-center items-center shadow-xl px-4 py-8 mx-4">
                            
                            <i class="${feature.iconClass} rounded-full bg-gray-400 h-16 w-16 text-3xl text-gray-900 flex justify-center items-center"></i>
                            <h1 class="py-8 font-bold text-xl">${feature.heading}</h1>
                            <p class=" py-2">${feature.description}</p>
                            <button class="font-thin border-gray-500 border px-6 py-2 mt-8 hover:text-white hover:bg-red-500 hover:border-none transition-all">Learn More</button>                        
                        </div>
                    `)}
                </div>
            </div>
        `
    }
} 

customElements.define('working-comp', Working);