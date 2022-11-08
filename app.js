(() => {


    const paper = Snap('#hero');

    let i = 0;


    function drawCircle() {

        const vw = window.innerWidth;
        const vh = window.innerHeight;

        i = i + 15;
        let hue = i % 360;

        let color = Snap.hsl(hue, 100, 40);

        const radius = Math.floor(Math.sqrt((vw ** 2) + (vh ** 2)) / 2) + 150;

        const circle = paper.circle('50%', '50%', 40);

        circle.attr({
            fill: color
        });

        circle.animate({ r: radius }, 6000, function () {
            this.remove();
        });

    }

    setInterval(drawCircle, 500);




})();