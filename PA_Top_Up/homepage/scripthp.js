document.addEventListener("DOMContentLoaded", () => {
    const carousel = document.querySelector("#customCarousel");

    // Custom event listener (optional)
    carousel.addEventListener("slide.bs.carousel", (e) => {
      console.log("Slide changed to:", e.to);
    });
});

  // Fungsi pencarian game
document.getElementById("searchButton").addEventListener("click", function () {
  // Ambil nilai dari input
  const searchQuery = document.getElementById("searchInput").value.toLowerCase();

  // Ambil semua elemen game
  const games = document.querySelectorAll(".game-item");

  // Loop melalui semua game dan filter berdasarkan searchQuery
  games.forEach(game => {
    const gameTitle = game.querySelector(".game-title").textContent.toLowerCase();

    if (gameTitle.includes(searchQuery)) {
      // Tampilkan game yang cocok
      game.style.display = "block";
    } else {
      // Sembunyikan game yang tidak cocok
      game.style.display = "none";
    }
  });
});

