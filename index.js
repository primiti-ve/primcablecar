let num = Number(localStorage.clicks) || 0;

const points = document.getElementById("pointsDisplay");

points.innerHTML = `prim points: ${num}`;

function onClick() {
    num += 1;

    points.innerHTML = `prim points: ${num}`;
    localStorage.clicks = num;
}

function onReset() {
    num = 0;
    
    points.innerHTML = `prim points: ${num}`;
    localStorage.clicks = num;
}