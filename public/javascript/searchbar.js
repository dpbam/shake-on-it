async function searchProduct() {
    let input = document.getElementById('searchbar').value;
    input = input.toLowerCase();

    const response = await fetch('/api/posts', {
        method: 'GET',
        body: JSON.stringify({}),
        headers: { 'Content-Type': 'application/json' },
    })
    if (response.ok) {
        let x = document.querySelector('#post-list').value;
        for (i = 0; i < x.length; i++) {
            if (!x[i].innerHTML.toLowerCase().includes(input)) {
                x[i].style.display = "none";
            }
            else {
                x[i].style.display = "block";
            }
        }
        document.location.replace('homepage');
    }

}


document.getElementById('searchbar').addEventListener('keyup', searchProduct);