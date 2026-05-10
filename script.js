<script>
    // 1. Loading Screen Handler
    window.addEventListener('load', () => {
        const loader = document.getElementById('loader');
        if(loader) {
            loader.style.opacity = '0';
            setTimeout(() => loader.remove(), 500);
        }
    });

    // 2. Count Up Animation untuk Angka Statistik
    function animateValue(obj, start, end, duration) {
        let startTimestamp = null;
        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            obj.innerHTML = Math.floor(progress * (end - start) + start).toLocaleString();
            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };
        window.requestAnimationFrame(step);
    }

    // Jalankan animasi saat halaman dimuat
    document.addEventListener('DOMContentLoaded', () => {
        const stats = [
            { id: 'total-keputusan', val: 1255 },
            { id: 'pending-analisis', val: 18 }
        ];

        stats.forEach(s => {
            const el = document.getElementById(s.id);
            if(el) animateValue(el, 0, s.val, 1500);
        });
    });

    // 3. Tambahan Konfigurasi Chart.js agar lebih "Glowing"
    // Ganti konfigurasi dataset lineChart di script lama Anda:
    /* borderColor: '#2563eb',
    backgroundColor: (context) => {
        const ctx = context.chart.ctx;
        const gradient = ctx.createLinearGradient(0, 0, 0, 400);
        gradient.addColorStop(0, 'rgba(37, 99, 235, 0.2)');
        gradient.addColorStop(1, 'rgba(37, 99, 235, 0)');
        return gradient;
    },
    */
</script>