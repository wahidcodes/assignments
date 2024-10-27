import { fetchHeader } from "/static/script.js";

class HeaderElement extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode:'open'})
        this.closed = false;
        this.render()
    }
    
    navBarAction = async (e) => {
        console.log("Working")
        this.closed = !this.closed; // Toggle the closed state
        const headers = await fetchHeader();
        if(this.closed){
            var toggleNavBar = document.createElement('div');
            toggleNavBar.setAttribute('id','fixednav-child')
            toggleNavBar.setAttribute('class','fixednav-child');

            toggleNavBar.innerHTML=`
            <div style="margin-top:2rem; display:flex;flex-direction:column;">
                ${headers.navmenu[0].children.map( child =>`
                <a class="fixednav-links" href=${child.url}>${child.label}</a>`
                ).join('')}
            </div>
            `
            this.shadowRoot.querySelector('#fixednav').appendChild(toggleNavBar)
        }
        else{
            this.shadowRoot.querySelector('#fixednav-child').remove();
        }
    }
    

    async render(){
        
            const headers = await fetchHeader();
            const res = headers.navmenu[0]
            
            this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css" integrity="sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
            <link rel="stylesheet" href="/components/Header/header.css"></link>
            

            <div id="fixednav"></div>
            <div class="main">
                <img src="/static/img/logo.svg" alt="" height="50" width="150" class="jobify_img"/>
                <div class="linkscontainer">
                    ${res.children.map(child=>`
                        <a href=${child.url} class="links">${child.label}</a>
                    `).join('')}
                </div>
                <div class="buttons_container">
                    <a href=${headers.usermenu[0].url} class="user_state_buttons">${headers.usermenu[0].label}</a>
                    <div class="vertical_line"></div>
                    <a href=${headers.usermenu[0].url} class="user_state_buttons">${headers.usermenu[1].label}</a>
                </div>
                <div class="bars" id="bar-icon">
                    <i class="fa-solid fa-bars bars"></i>
                </div>
            </div>
        `;
    
        this.shadowRoot.querySelector('#bar-icon').addEventListener('click', this.navBarAction)
    }
}

customElements.define('header-comp', HeaderElement)