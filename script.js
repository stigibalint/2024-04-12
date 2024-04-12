document.addEventListener("DOMContentLoaded", function() {

    const images = [
        "Images/Boy PNG 4.PNG",
        "Images/Business PNG 1.PNG",
        "Images/Business PNG 2.PNG",
        "Images/Boy PNG 4.PNG",
        "Images/Business PNG 1.PNG",
        "Images/Business PNG 2.PNG",
        "Images/Boy PNG 4.PNG",
        "Images/Business PNG 1.PNG",
        "Images/Business PNG 2.PNG",
        "Images/Boy PNG 4.PNG",
    ];


    const kartyaContainer = document.getElementById("kartyaContainer");


    images.forEach(function(imageSrc, index) {
        const div = document.createElement("div");
        div.classList.add("kartya");

        const img = document.createElement("img");
        img.src = imageSrc;
        img.alt = "Kép " + (index + 1);

        if (index === 0) {
            img.classList.add("kep1");
        } else if (index === 1) {
            img.classList.add("kep2");
        } else {
            img.classList.add("kep3");
        }

        div.appendChild(img);
        kartyaContainer.appendChild(div);
    });
});
