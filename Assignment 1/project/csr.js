const reviews  = [
    {
        "name": "Miyakodori",
        "address": "Upplandsgatan 7",
        "image": "Miyakodori.jpg",
        "text": "Miyakodori is a vibrant yet relaxed Japanese izakaya. You can pick your favourites from the menu, choose a special from their black board, or leave the choice to your server and go for the omakase. They have a separate bar as well, where you can enjoy drinks as well as eat.",
        "standouts": ["pork belly skewers", "chicken liver mousse with milk bread"]
    },
    {
        "name": "Lu",
        "address": "Skånegatan 88",
        "image": "Lu.jpg",
        "text": "Lu serves Cantonese street style food from Hong Kong, in a chaotic yet cosy, canteen like setting. If you are fortunate to live (somewhat) close by, they also offer take away, which means you can enjoy their food even if it's packed.",
        "standouts": ["pork dumplings", "beef noodles"]
    }
];

let currentIndex = 0;

const reviewsContainer = document.getElementById("reviews");
const loading = document.getElementById("loading");
const loadMoreBtn = document.getElementById("loadMore");

if (loading) {
    reviewsContainer.removeChild(loading);
}

const firstCard = createCard(reviews[currentIndex]);
reviewsContainer.appendChild(firstCard);
currentIndex++;

if (currentIndex < reviews.length) {
    loadMoreBtn.style.display = "inline-block";
} else {
    loadMoreBtn.style.display = "none";
}

loadMoreBtn.addEventListener("click", () => {
    if (currentIndex < reviews.length) {
        const card = createCard(reviews[currentIndex]);
        reviewsContainer.appendChild(card);
        currentIndex++;

        if (currentIndex >= reviews.length) {
            loadMoreBtn.style.display = "none";
        }
    }
});

function createCard(review) {
    const card = document.createElement("article");
    card.className = "article-card";

    const img = document.createElement("img");
    img.src = review.image;
    img.alt = review.name;

    const content = document.createElement("div");
    content.className = "article-content";

    const title = document.createElement("h3");
    title.textContent = review.name;

    const address = document.createElement("p");
    address.textContent = review.address;
    address.className = "address";

    const desc = document.createElement("p");
    desc.textContent = review.text;

    content.appendChild(title);
    content.appendChild(address);
    content.appendChild(desc);

    const standouts = document.createElement("p");
    standouts.innerHTML = `<b>Standout's:</b><br>${review.standouts.join("<br>")}`;
    content.appendChild(standouts);

    card.appendChild(img);
    card.appendChild(content);

    return card;
}