document.addEventListener('DOMContentLoaded',() => {
    const menuButton = document.getElementById('menuButton');
    const menuItems = document.getElementById('mobileMenuItems');
    const phone = document.getElementById('phone');

    const qualificationsButtons = document.querySelectorAll('[file]');
    const certificateBox = document.getElementById('certificateBox');
    const certificateBoxImage = document.getElementById('certificateBoxImage');
    const btnCertificateExit = document.getElementById('btnCertificateExit');

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

    for(let index=0; index < qualificationsButtons.length; index++){
        qualificationsButtons[index].addEventListener('click', event => {
            let fileValue = event.target.attributes.file.value;
            certificateBox.style.display = 'flex';
            document.body.style.overflow = 'hidden';
            if(fileValue === "google"){
                certificateBoxImage.style.backgroundImage = "url(./src/certificate.JPG)"
            }
            else if(fileValue === "technique"){
                certificateBoxImage.style.backgroundImage = "url(./src/technique.JPG)"
            }
            else if(fileValue === "supplement"){
                certificateBoxImage.style.backgroundImage = "url(./src/supplement.JPG)"
            }
        })
    }

    btnCertificateExit.addEventListener('click', () => {
        document.body.style.overflow = 'scroll';
        certificateBox.style.display = 'none';
    })

});