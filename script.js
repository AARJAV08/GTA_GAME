// Hover effects for the game features section

document.addEventListener("DOMContentLoaded", function() {
    const featureBoxes = document.querySelectorAll(".feature-box");

    featureBoxes.forEach(box => {
        // Hover effect when mouse enters
        box.addEventListener("mouseenter", function() {
            // Apply hover styles using JavaScript
            box.style.transform = "translateY(-10px)";
            box.style.boxShadow = "0 4px 10px rgba(0, 0, 0, 0.2)";
            box.style.borderColor = "#3498db";  // Example color for hover border
        });

        // Hover effect when mouse leaves
        box.addEventListener("mouseleave", function() {
            // Remove hover styles
            box.style.transform = "translateY(0)";
            box.style.boxShadow = "none";
            box.style.borderColor = "transparent";  // Reset to initial border color
        });
    });
});






// A dynamic news feed or scrolling ticker for updates
document.addEventListener("DOMContentLoaded", function() {
    const newsItems = [
        "New Features Teased: Dynamic Weather and More!",
        "GTA 6 Map to be Bigger Than Ever Before!",
        "DLC Coming Soon: New Cities and Missions!",
        "Stay tuned for more updates!"
    ];

    let newsTicker = document.getElementById("newsTicker");
    let index = 0;

    function displayNews() {
        newsTicker.innerHTML = ''; 
        let newsElement = document.createElement("div");
        newsElement.classList.add("news-item");
        newsElement.textContent = newsItems[index];
        newsTicker.appendChild(newsElement);
    }

    displayNews();

    setInterval(function() {
        index = (index + 1) % newsItems.length;
        displayNews();
    }, 3000);
});