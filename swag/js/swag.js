const swagData = [
    {
        name: "Sticker",
        image: "st.png",
        description: "Check out this Incredible sticker by Threat Hunting Village,designed by bla bla........."
    },
    {
        name: "Sticker",
        image: "st.png",
        description: "Check out this Incredible sticker."
    },
    {
        name: "Sticker",
        image: "st.png",
        description: "Check out this Incredible sticker."
    },
    {
        name: "Sticker",
        image: "st.png",
        description: "Check out this Incredible sticker."
    },
   
    
];

function createSVGFilter() {
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("style", "position: absolute; width: 0; height: 0");
    svg.innerHTML = `
        <defs>
            <filter id="pixelate">
                <feFlood x="4" y="4" height="2" width="2"/>
                <feComposite width="10" height="10"/>
                <feTile result="a"/>
                <feComposite in="SourceGraphic" in2="a" operator="in"/>
                <feMorphology operator="dilate" radius="2"/>
            </filter>
        </defs>
    `;
    document.body.appendChild(svg);
}

function populateSwag() {
    createSVGFilter();
    const swagGrid = document.getElementById('swag-grid');
    
    swagData.forEach(item => {
        const swagCard = document.createElement('div');
        swagCard.classList.add('swag-card');
        swagCard.innerHTML = `
            <h3>${item.name}</h3>
            <img src="${item.image}" alt="${item.name}">
            <p>${item.description}</p>
        `;
        
        swagGrid.appendChild(swagCard);
    });
}

document.addEventListener('DOMContentLoaded', populateSwag);
