let num = Number(localStorage.clicks) || 0;

const clicks = document.getElementById("clicks");

clicks.innerHTML = `clicks: ${num}`;

function onClick() {
    num += 1;

    clicks.innerHTML = `clicks: ${num}`;
    localStorage.clicks = num;
}

function onReset() {
    num = 0;
    
    clicks.innerHTML = `clicks: ${num}`;
    localStorage.clicks = num;
}