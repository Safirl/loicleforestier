import ColorThief from "colorthief";

const mouseFollower = document.getElementById("mouseFollower");
const trailContainer = document.getElementById("trail");

function followMouse(image: HTMLImageElement) {
    if (mouseFollower && trailContainer && image) {
        //Get dominent color
        image.addEventListener('load', () => {
            const colorThief = new ColorThief();
            const dominantColor = colorThief.getColor(image);
            const darkenFactor = .8
            const rgbColor = `rgb(${dominantColor[0] * darkenFactor}, ${dominantColor[1] * darkenFactor}, ${dominantColor[2] * darkenFactor})`
            mouseFollower.style.backgroundColor = rgbColor
        });

        //move the mouseFollower
        document.addEventListener("mousemove", (e) => {
            const mouseX = e.clientX;
            const mouseY = e.clientY;
            if (!mouseFollower || !trailContainer) return;
            mouseFollower.style.top = mouseY.toString() + "px"
            mouseFollower.style.left = mouseX.toString() + "px"
        })
    }
}

export { followMouse };
