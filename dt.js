const togglebtn = document.getElementById("cb-btn")
const panel = document.getElementById("collapsible-bar")
const icon = document.querySelector('.fa-arrow-right')

togglebtn.addEventListener("click", () => {
    if (panel.classList.toggle('open')) {
        panel.style.width = "30%";
        icon.classList.replace('fa-arrow-right', 'fa-arrow-left')
    }
    else {
        panel.style.width = "11%";
        icon.classList.replace('fa-arrow-left','fa-arrow-right')
    }
});
