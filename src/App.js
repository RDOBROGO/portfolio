document.addEventListener('DOMContentLoaded',() => {
    const menuButton = document.getElementById('menuButton');
    const menuItems = document.getElementById('mobileMenuItems');
    const phone = document.getElementById('phone');

    menuItems.style.height = "0px";
    menuItems.style.display = "flex";
    phone.style.animationPlayState = "running";

    const ringing = () => {
        if(phone.style.animationPlayState === "running") phone.style.animationPlayState = "paused";
        else phone.style.animationPlayState = "running";
    }

    setInterval(ringing, 3000)

    menuButton.addEventListener('click', () => {
        if(menuItems.style.height === '0px') {
            menuItems.style.height = '300px';
        }
        else if(menuItems.style.height === '300px') {
            menuItems.style.height = '0px';
        }
    });
        document.addEventListener('click', event => {
            if(event.target.id !== "menuButton") menuItems.style.height = '0px';
    });
});