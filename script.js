document.addEventListener("DOMContentLoaded", async () => {
    const getCatBtn = document.getElementById("fetch-cat-btn");
    const catGallery = document.getElementById("cat-gallery");
    const displayer = document.getElementById("display");
    const test = document.getElementById("test");

    async function fetchCat() {
        const response = await fetch("https://api.thecatapi.com/v1/images/search");
        const data = await response.json();
        const catImgUrl = data[0].url;
        return catImgUrl;
    }

    getCatBtn.addEventListener('click', async () => {
        const catImgUrl = await fetchCat();
        const img = document.createElement("img");
        img.src = catImgUrl;
        img.alt = "Random Cat";
        catGallery.prepend(img);
    });
});
