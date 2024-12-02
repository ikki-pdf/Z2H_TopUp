document.addEventListener('DOMContentLoaded', () => {
    const magicCoreInput = document.getElementById('magic-core');
    const coreValueDisplay = document.getElementById('core-value');
    const maxDiamondDisplay = document.getElementById('max-diamond');
  
    magicCoreInput.addEventListener('input', () => {
      const magicCore = parseInt(magicCoreInput.value, 10);
      coreValueDisplay.textContent = magicCore;
  
      // Calculate the total spins required
      const spinsNeeded = 200 - magicCore;
      let diamondCost = 0;
  
      if (spinsNeeded > 0) {
        const fiveSpinBundles = Math.floor(spinsNeeded / 5);
        const singleSpins = spinsNeeded % 5;
  
        diamondCost = fiveSpinBundles * 270 + singleSpins * 60;
      }
  
      maxDiamondDisplay.textContent = diamondCost;
    });
  });
  document.getElementById("topupButton").addEventListener("click", function () {
    window.location.href = "../homepage/homepage.html";
  });
    