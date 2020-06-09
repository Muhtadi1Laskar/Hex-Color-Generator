const body = document.querySelector("body");
const hex_div = document.getElementById("hex-value");
const btn = document.getElementById("button");

const generate_color = () => {
    let hex = `#${(Math.random() * 0xfffff * 1000000).toString(15).slice(0, 6)}`;
    change_html(hex);
}

const change_html = (data) => {
    body.style.backgroundColor = data;
    hex_div.style.visibility = "visible";
    hex_div.innerHTML = data;
}

// Event Listeners
btn.addEventListener("click", generate_color);