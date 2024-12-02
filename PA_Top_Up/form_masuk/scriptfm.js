// Simpan data pengguna saat login berhasil
function handleLogin() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (!username || !password) {
      alert("Mohon isi semua field!");
      return;
  }

  // Simpan username ke localStorage
  localStorage.setItem("username", username);

  // Pop-up notifikasi berhasil
  alert("Login berhasil!");

  // Redirect ke homepage
  window.location.href = "../homepage/homepage.html";
}

// Simpan data pengguna saat sign-in berhasil
function handleSignIn() {
  const username = document.getElementById("username").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (!username || !email || !password) {
      alert("Mohon isi semua field!");
      return;
  }

  // Simpan username ke localStorage
  localStorage.setItem("username", username);

  // Pop-up notifikasi berhasil
  alert("Sign-in berhasil!");

  // Redirect ke homepage
  window.location.href = "../homepage/homepage.html";
  window.location.href = "../calcu_wr/calculatorwr.html";
  window.location.href = "../homepage/homepage.html";
  window.location.href = "../homepage/homepage.html";
  window.location.href = "../homepage/homepage.html";
  window.location.href = "../homepage/homepage.html";
  window.location.href = "../homepage/homepage.html";
}

// Log out pengguna
function handleLogout() {
  // Hapus username dari localStorage
  localStorage.removeItem("username");

  // Pop-up notifikasi berhasil log out
  alert("Logout berhasil!");

  // Redirect ke halaman login
  window.location.href = "../form_masuk/masuk.html";
}

// Perbarui navbar berdasarkan status login
function updateNavbar() {
  const username = localStorage.getItem("username");

  if (username) {
      // Jika sudah login, tampilkan username dan opsi logout
      document.getElementById("nav-user").innerHTML = `
          <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="userDropdown" role="button" data-bs-toggle="dropdown">
                  ${username}
              </a>
              <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#" onclick="handleLogout()">Log Out</a></li>
              </ul>
          </li>
      `;
  } else {
      // Jika belum login, tampilkan opsi masuk
      document.getElementById("nav-user").innerHTML = `
          <li class="nav-item"><a class="nav-link" href="../form_masuk/masuk.html">Masuk</a></li>
      `;
  }
}
