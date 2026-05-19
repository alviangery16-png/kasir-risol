function hitungHarga(menu, jumlah){

  let total = 0;

  // RISOL MAYO
  if(menu === "Risol Mayo"){

    let paket = Math.floor(jumlah / 3);
    let sisa = jumlah % 3;

    total = (paket * 10000) + (sisa * 3500);

  }

  // MENU LAIN
  else{

    total = jumlah * 4000;

  }

  return total;
}

// HITUNG TOTAL
function hitungTotal(){

  let menu = document.getElementById("menu").value;

  let jumlah =
    parseInt(document.getElementById("jumlah").value);

  if(isNaN(jumlah)){

    alert("Masukkan jumlah!");

    return;
  }

  let total = hitungHarga(menu, jumlah);

  document.getElementById("total").innerText =
    "Rp" + total.toLocaleString("id-ID");
}

// SIMPAN PENJUALAN
function simpanData(){

  let menu = document.getElementById("menu").value;

  let jumlah =
    parseInt(document.getElementById("jumlah").value);

  if(isNaN(jumlah)){

    alert("Masukkan jumlah!");

    return;
  }

  let total = hitungHarga(menu, jumlah);

  // TANGGAL DAN JAM
  let sekarang = new Date();

  let tanggal =
    sekarang.toLocaleDateString("id-ID");

  let jam =
    sekarang.toLocaleTimeString("id-ID");

  // DATA PENJUALAN
  let data = {

    tanggal: tanggal,
    jam: jam,
    menu: menu,
    jumlah: jumlah,
    total: total

  };

  // AMBIL DATA LAMA
  let riwayat =
    JSON.parse(localStorage.getItem("penjualan")) || [];

  // TAMBAH DATA BARU
  riwayat.push(data);

  // SIMPAN KE LOCAL STORAGE
  localStorage.setItem(
    "penjualan",
    JSON.stringify(riwayat)
  );

  // TAMPILKAN RIWAYAT
  tampilkanRiwayat();

  // NOTIFIKASI
  alert("Penjualan berhasil disimpan!");
}

// TAMPILKAN RIWAYAT
function tampilkanRiwayat(){

  let riwayat =
    JSON.parse(localStorage.getItem("penjualan")) || [];

  let list =
    document.getElementById("riwayat");

  list.innerHTML = "";

  riwayat.forEach(function(item){

    let li =
      document.createElement("li");

    li.innerText =

      item.tanggal +
      " | " +

      item.jam +
      " | " +

      item.menu +
      " | " +

      item.jumlah +
      " pcs | Rp" +

      item.total.toLocaleString("id-ID");

    list.appendChild(li);

  });
}

// JALANKAN SAAT WEBSITE DIBUKA
tampilkanRiwayat();