// Contoh script untuk menampilkan alert saat form kontak dikirim
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah pengiriman form
    alert('Pesan Anda telah dikirim!');
});