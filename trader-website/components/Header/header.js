import { fetchHeader } from "/src/SectionAPIs/script.js";

class HeaderElement extends HTMLElement{
    constructor(){
        super();
        this.closed = false;
        this.render()
    }
    
    navBarAction = async (e) => {
        console.log("Woring")
        this.closed = !this.closed; // Toggle the closed state
        const headers = await fetchHeader();
        if(this.closed){
            var toggleNavBar = document.createElement('div');
            toggleNavBar.setAttribute('id','fixednav-child')
            toggleNavBar.setAttribute('class','fixed absolute z-10 h-[100vh] w-52 bg-black top-0 left-0 h-[100vh] flex flex-col');
            toggleNavBar.innerHTML=`
            ${headers.navmenu[0].children.map( child =>`
               <a class="ml-4 mt-12 text-white hover:bg-blue-500 w-full h-8" href=${child.url}>${child.label}</a>`
            ).join('')}
            `
            this.querySelector('#fixednav').appendChild(toggleNavBar)
        }
        else{
            this.querySelector('#fixednav-child').remove();
        }
    }
    

    async render(){
        
            const headers = await fetchHeader();
            
            this.innerHTML = `
            <div id="fixednav"></div>
            <nav class="w-full bg-[#0c0d0ce4] text-white h-20 flex justify-between items-center">
                <div class="hidden lg:block ml-12 ">
                    ${headers.navmenu[0].children.map( child =>`
                        <a class="ml-4" href=${child.url}>${child.label}</a>`
                    ).join('')}
                </div>
                <img src="/static//logo.svg" class="ml-8"></img>
                <a href=${headers.cta.url} class="text-black bg-white mr-32 p-3 font-bold hidden lg:block ">${headers.cta.label}</a>
                <div class="mx-6 lg:hidden" id="bar-icon"><i class="fa-solid fa-bars"></i></div>
            </nav>
            `
    
        
            this.querySelector('#bar-icon').addEventListener('click', this.navBarAction);
    }
}

customElements.define('header-comp', HeaderElement)