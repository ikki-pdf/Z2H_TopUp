document.getElementById("calculate").addEventListener("click", function () {
    const totalGames = parseInt(document.getElementById("total-games").value);
    const currentWinrate = parseFloat(document.getElementById("current-winrate").value);
    const desiredWinrate = parseFloat(document.getElementById("desired-winrate").value);
    const resultElement = document.getElementById("result");

    // Validasi input
    if (
        isNaN(totalGames) || isNaN(currentWinrate) || isNaN(desiredWinrate) ||
        totalGames < 0 || currentWinrate < 0 || desiredWinrate < 0 ||
        currentWinrate > 100 || desiredWinrate > 100
    ) {
        resultElement.textContent = "Harap masukkan nilai yang valid.";
        return;
    }

    if (desiredWinrate === 100) {
        resultElement.textContent = "Winrate 100% tidak diperbolehkan. Masukkan nilai kurang dari 100%.";
        return;
    }

    const currentWins = totalGames * (currentWinrate / 100);
    const requiredWins = Math.ceil(((desiredWinrate / 100) * totalGames - currentWins) / (1 - desiredWinrate / 100));

    if (requiredWins <= 0) {
        resultElement.textContent = "Anda sudah melebihi winrate yang diinginkan!";
    } else {
        resultElement.textContent = `Anda membutuhkan ${requiredWins} kemenangan lagi untuk mencapai winrate ${desiredWinrate}%.`;
    }
});
