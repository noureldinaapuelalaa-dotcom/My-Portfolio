function filterPortfolio(category, evt) {
    let items = document.getElementsByClassName("portfolio-item");
    let tabs = document.getElementsByClassName("filter-tab");

    for (let tab of tabs) {
        tab.classList.remove("active");
    }
    
    evt.currentTarget.classList.add("active");

    for (let item of items) {
        if (category === "all" || item.classList.contains(category)) {
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
    }
}