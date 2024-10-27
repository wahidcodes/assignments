import {fetchPages} from '/static/api.js'

class HeroElement extends HTMLElement{
    constructor(){
        super();
        this.render();
    }

    render(){
        (async() => {
            const output = await fetchPages();
            const res = output.home.sections[0]
            this.innerHTML = `
            
            <div class="inset-0 relative w-full bg-cover bg-center bg-no-repeat bg-fixed" style="background-image:url('/static/img/banner.jpg')">
                <div class="px-8 lg:px-36 py-16 lg:py-24 bg-black bg-opacity-30 backdrop-blur-sm text-gray-200">
                    <div class="flex justify-center items-center flex-col">
                        <p class="bg-opacity-25 bg-gray-50 font-semibold p-3 rounded-full mt-12">${res.description}</p>
                        <h1 class="text-4xl lg:text-5xl font-bold leading-normal lg:leading-relaxed py-12  w-[60%]">${res.caption}</h1>
                    </div>
                    
                    <div class="flex flex-col lg:flex-row justify-center items-center lg:justify-around mb-12">
                        <input type="text" placeholder="Search here" class="w-3/4 h-14 rounded-lg text-black px-6"></input>
                        <button class="bg-green-600 mt-5 lg:mt-0 px-4 py-4 rounded-lg w-1/4 lg:w-1/6 flex justify-around items-center">Search<i class="fa-solid fa-search"></i></button>                    
                    </div>
                    
                </div>
            </div>
        `
        })()
    }
}

customElements.define('hero-comp', HeroElement)