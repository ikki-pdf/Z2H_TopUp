document.addEventListener("DOMContentLoaded", () => {
  const quantityInput = document.getElementById("quantity");
  const totalInput = document.getElementById("total");
  const nominalSelect = document.getElementById("nominal");
  let quantity = 1;

  const updateTotal = () => {
    const selectedNominal = nominalSelect.value.split(",")[1];
    if (selectedNominal) {
      const price = parseInt(selectedNominal);
      totalInput.value = `Rp ${price * quantity}`;
    } else {
      totalInput.value = "Rp 0";
    }
  };

  document.getElementById("increase").addEventListener("click", () => {
    quantity++;
    quantityInput.value = quantity;
    updateTotal();
  });

  document.getElementById("decrease").addEventListener("click", () => {
    if (quantity > 1) {
      quantity--;
      quantityInput.value = quantity;
      updateTotal();
    }
  });

  nominalSelect.addEventListener("change", updateTotal);
});
document.getElementById("submitBtn").addEventListener("click", () => {
  // Data dari form
// Ambil elemen HTML berdasarkan ID
  const gameName = document.getElementById("nama-game").textContent;
  const id = document.getElementById("id").value.trim();
  const server = document.getElementById("server").value.trim();
  const nominal = document.getElementById("nominal").selectedOptions[0].text;
  const quantity = document.getElementById("quantity").value.trim();
  const total = document.getElementById("total").value.trim();
  const contact = document.getElementById("contact").value.trim();
  const text = document.getElementById("text").value.trim();

  // Validasi input
  if (!id || !server || !nominal || total === "Rp 0" || !contact) {
    alert("Harap lengkapi semua data sebelum melanjutkan!");
    return;
  }

  // Nomor WhatsApp admin (ganti dengan nomor admin)
  const adminNumber = "6281216198174"; // Format: tanpa "+" dan dengan kode negara

  // Template pesan WhatsApp
  const message =
    `Halo, saya ingin top up ${gameName}.\n` +
    `- ID Akun: ${id}\n` +
    `- Server: ${server}\n` +
    `- Nominal: ${nominal}\n` +
    `- Jumlah Pembelian: ${quantity}\n` +
    `- Total Harga: ${total}\n` +
    `- Kontak: ${contact}\n` +
    `- Pesan: ${text}\n` +
    `Segera ya!`;

  // Encode pesan untuk URL
  const encodedMessage = encodeURIComponent(message);

  // Buka WhatsApp
  window.open(`https://wa.me/${adminNumber}?text=${encodedMessage}`, "_blank");
});
