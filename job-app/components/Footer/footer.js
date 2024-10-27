import {fetchFooter} from '/static/script.js'
import {fetchHeader} from '/static/script.js'

class FooterElement extends HTMLElement{
    constructor(){
        super();
        this.render();
    }

    async render(){
        const headers = await fetchHeader();
        const output = await fetchFooter();
        const res = output

        console.log(res)
        this.innerHTML = `
            <div class="flex flex-col mt-24 py-12 bg-[#f8fafb]">
                <div class="w-full px-8 flex flex-col justify-around lg:flex-row items-center">
                    <div class="ml-8 flex flex-row">
                        <img src="/static/img/logo.svg" height="120" width="200"></img>
                    </div>
                    <div class="mt-4 lg:mt-0">
                        ${headers.navmenu[0].children.map( child =>`
                            <a class="ml-4" href=${child.url}>${child.label}</a>`
                        ).join('')}
                    </div>
                </div>

                <hr class="divide-y-4 mt-10"></hr>

                <div class="w-full mt-4 flex flex-col lg:flex-row justify-around items-center px-8">
                    <div class="">
                        ${res.copyright}
                    </div>

                    <div class="flex flex-row my-8">
                    ${res.socialmedia.map(item=>`
                        <a href=${item.url} class="text-xl px-4 my-4 mx-2 flex justify-center items-center rounded-full h-12 w-12 shadow-lg">
                            <i class="${item.iconClass}"></i>
                        </a>
                    `).join('')}
                    </div>
    
                </div>
            </div>
        `
    }
}

customElements.define('footer-comp', FooterElement);