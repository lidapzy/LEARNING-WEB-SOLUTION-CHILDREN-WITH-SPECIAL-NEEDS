document.addEventListener('DOMContentLoaded', function() {
    const itemBudayas = document.querySelectorAll('.item-budaya');
    const modal = document.getElementById('modal-detail');
    const tutupModal = document.querySelector('.tutup-modal');
    const detailNama = document.getElementById('detail-nama');
    const detailDeskripsi = document.getElementById('detail-deskripsi');
    const detailAudio = document.getElementById('detail-audio');

    itemBudayas.forEach(item => {
        item.addEventListener('click', function() {
            const nama = this.dataset.nama;
            const deskripsi = this.dataset.deskripsi;
            const audioSrc = this.dataset.audio;

            detailNama.textContent = nama;
            detailDeskripsi.textContent = deskripsi;
            detailAudio.src = audioSrc;
            detailAudio.play(); // Otomatis putar audio saat modal terbuka

            modal.style.display = 'block';
        });
    });

    tutupModal.addEventListener('click', function() {
        modal.style.display = 'none';
        detailAudio.pause(); // Hentikan audio saat modal ditutup
        detailAudio.currentTime = 0; // Reset waktu audio
    });

    window.addEventListener('click', function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
            detailAudio.pause();
            detailAudio.currentTime = 0;
        }
    });
});
