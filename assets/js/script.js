document.addEventListener('DOMContentLoaded', () => {
    const bftCountElements = document.querySelectorAll('.bftCount');

    bftCountElements.forEach((bftItem) => {
        let count = 0;
        const target = parseInt(bftItem.dataset.douray, 10);
        const duration = 1000; // total animation duration in ms
        let intervalTime = Math.floor(duration / target);

        if (intervalTime < 1) intervalTime = 1;

        const updateCounter = () => {
            count++;
            bftItem.innerText = count;

            if (count >= target) {
                clearInterval(timer);
            }
        };

        const timer = setInterval(updateCounter, intervalTime);
    });
});