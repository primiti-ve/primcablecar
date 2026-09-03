let num = Number(localStorage.clicks) || 0;

let upgrades = [
    {
        name: "test",
        price: 10,
        benefit: "+1 per click",
        once: false,
    },
];

let purchased = JSON.parse(localStorage.purchased || "[]") || [];

const shop = document.getElementById("shop");
const points = document.getElementById("points");

points.innerHTML = `prim points: ${num}`;

function updateShop() {
    let html = '';

    for (let i = 0; i < upgrades.length; i++) {
        let upgrade = upgrades[i];

        if (upgrade.once && purchased.includes(upgrade.name)) {
            continue;
        }

        html = `${html}\n`;
        html = `${html}<p ">${upgrade.name}: ${upgrade.benefit}</p>`;
        html = `${html}<button data-index="${i}">${upgrade.price} prim points</button>`;
    }

    shop.innerHTML = html;

    shop.querySelectorAll("button").forEach(btn => {
        btn.addEventListener("click", () => onUpgradeClick(Number(btn.dataset.index)));
    });
    
    localStorage.purchased = JSON.stringify(purchased);
}

updateShop();

function onUpgradeClick(index) {
    const upgrade = upgrades[index];

    if (!upgrade) {
        return;
    }

    if (upgrade.once && purchased.includes(upgrade.name)) {
        return;
    }

    if (num < upgrade.price) {
        return;
    }

    num -= upgrade.price;

    purchased.push(upgrade.name);

    localStorage.clicks = num;
    points.innerHTML = `prim points: ${num}`;
    updateShop();
}

function onClick() {
    let increment = 1;
    
    for (let i = 0; i < purchased.length; i++) {
        let upgrade = purchased[i];
        
        switch(upgrade) {
            case "test":
                increment += 1;

                break;
            
            default:
                break;
        }
    }

    num += increment;

    points.innerHTML = `prim points: ${num}`;
    localStorage.clicks = num;

    updateShop();
}

function onReset() {
    num = 0;
    purchased = [];

    points.innerHTML = `prim points: ${num}`;

    localStorage.clicks = num;
    localStorage.purchased = purchased;

    updateShop();
}