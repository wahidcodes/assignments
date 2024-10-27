import { fetchPages } from "/static/script.js";

class HeroElement extends HTMLElement{
    constructor(){
        super();
        this.render();
    }

    render(){
        (async() => {
            const output = await fetchPages();
            const res = output.home.sections

            this.innerHTML = `

            <div class="relative w-full">

                <div 
                    class="absolute inset-0 bg-cover bg-no-repeat bg-center bg-fixed"
                    style="background-image: url('/static/images/welcome-hero/banner.jpg');"
                ></div>

                <div 
                    class="p-16 lg:p-44 bg-black bg-opacity-30 backdrop-brightness-[1.75] text-white"
                >
                    <p class="text-xl">${res[0].caption}</p><br/>
                    <p class="text-4xl lg:text-6xl font-bold lg:leading-[5.5rem]">${res[0].description}</p>
                    <button class="bg-yellow-500 p-4 font-bold text-sm w-auto mt-12"><a href=${res[0].cta.url}>${res[0].cta.desc} </a></button>
                </div>
            </div>
        `
        })()
    }
}

customElements.define('hero-comp', HeroElement)