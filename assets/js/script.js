document.addEventListener('DOMContentLoaded', () => {
    const counters = document.querySelectorAll('.fuhadShiblu_count');

    counters.forEach(counter => {
        let count = 0;
        const target = parseInt(counter.dataset.iccha, 10);
        const plusSign = ' +'; // keep the plus sign with a space

        // Initialize counter display with 0+
        counter.innerHTML = '0' + plusSign;

        // Calculate interval speed so total count animation lasts about 1.5 seconds
        const intervalSpeed = 1500 / target;

        const interval = setInterval(() => {
            count++;
            counter.innerHTML = count + plusSign;

            if (count >= target) {
                clearInterval(interval);
            }
        }, intervalSpeed);
    });
});