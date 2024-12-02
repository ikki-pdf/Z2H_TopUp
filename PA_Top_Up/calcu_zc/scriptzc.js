const slider = document.getElementById("star-power");
const starValue = document.getElementById("star-value");
const maxDiamond = document.getElementById("max-diamond");

slider.addEventListener("input", () => {
  // Mengambil nilai star power saat ini
  const currentStarPower = parseInt(slider.value);
  starValue.textContent = currentStarPower;

  // Menghitung star power yang tersisa
  const remainingPower = 100 - currentStarPower;

  // Total diamond yang dibutuhkan (1 spin = 20 diamond)
  const totalDiamond = remainingPower * 20;

  // Menampilkan hasil ke layar
  maxDiamond.textContent = totalDiamond;
});
