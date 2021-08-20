function searchProduct() {
    let input = document.getElementById('searchbar').value
    input = input.toLowerCase();
    let x = document.getElementsById('product-title').value;

    for (i = 0; i < x.length; i++) {
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display = "none";
        }
        else {
            x[i].style.display = "list-item";
        }
    }
}

document.getElementById('searchbar').addEventListener('submit', searchProduct);