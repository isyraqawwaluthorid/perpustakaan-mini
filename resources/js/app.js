document.addEventListener('DOMContentLoaded', () => {

    // 1. Konfirmasi hapus (menggantikan onsubmit inline)
    document.querySelectorAll('form[data-confirm]').forEach((form) => {
        form.addEventListener('submit', (e) => {
            if (!confirm(form.dataset.confirm)) e.preventDefault();
        });
    });

    // 2. Penghitung karakter sinopsis
    const sinopsis = document.getElementById('sinopsis');
    const penghitung = document.getElementById('penghitung-sinopsis');
    if (sinopsis && penghitung) {
        const perbarui = () => { penghitung.textContent = `${sinopsis.value.length} karakter`; };
        sinopsis.addEventListener('input', perbarui);
        perbarui();
    }

    // 3. Validasi di sisi klien sebelum form dikirim
    const formBuku = document.getElementById('form-buku');
    if (formBuku) {
        formBuku.addEventListener('submit', (e) => {
            const tahunIni = new Date().getFullYear();
            const aturan = [
                ['judul', (v) => v.trim() !== '', 'Judul wajib diisi.'],
                ['penulis', (v) => v.trim() !== '', 'Penulis wajib diisi.'],
                ['tahun_terbit', (v) => Number(v) >= 1000 && Number(v) <= tahunIni,
                    `Tahun harus antara 1000 dan ${tahunIni}.`],
            ];
            let valid = true;
            aturan.forEach(([id, cek, pesan]) => {
                const input = document.getElementById(id);
                let info = input.parentElement.querySelector('.js-error');
                if (!info) {
                    info = document.createElement('p');
                    info.className = 'js-error text-sm text-red-600 mt-1';
                    input.after(info);
                }
                const ok = cek(input.value);
                info.textContent = ok ? '' : pesan;
                // border-slate-300 dilepas dulu; jika keduanya ada, slate-300 yang menang di Tailwind 4
                input.classList.toggle('border-red-500', !ok);
                input.classList.toggle('border-slate-300', ok);
                if (!ok) valid = false;
            });
            if (!valid) e.preventDefault();
        });
    }

    // 4. Saring cepat baris tabel tanpa memuat ulang halaman
    const filter = document.getElementById('filter-cepat');
    if (filter) {
        filter.addEventListener('input', () => {
            const kata = filter.value.toLowerCase();
            document.querySelectorAll('tr[data-buku]').forEach((baris) => {
                baris.hidden = !baris.textContent.toLowerCase().includes(kata);
            });
        });
    }
});
