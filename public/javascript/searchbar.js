const { response } = require("express");

function searchProduct() {
    let input = document.getElementById('searchbar').value;
    input = input.toLowerCase();

    fetch('http://localhost:3001/api/posts', {
        method: 'GET',
        // body: JSON.stringify({}),
        headers: { 'Content-Type': 'application/json' },
    })
        .then(response => {
            return response.json();
            // console.log(response);
        })
        .then(dbPostData => {

            for (i = 0; i < dbPostData.length; i++) {
                let x = dbPostData[i].title;
                if (x.includes(input)) {
                    const posts = dbPostData.map((post) => post.get({ plain: true }));
                    res.render("homepage", {
                        posts,
                        loggedIn: req.session.loggedIn,
                    });
                }
            }
        })
}
// if (response.ok) {
//     let x = ;
//     for (i = 0; i < x.length; i++) {
//         if (!x[i].innerHTML.toLowerCase().includes(input)) {
//             x[i].style.display = "none";
//         }
//         else {
//             x[i].style.display = "block";
//         }
//     }
//     document.location.replace('homepage');
// }




document.getElementById('searchbar').addEventListener('keypress', function (e) {
    if (e.key == 'Enter') {
        searchProduct();
    }
});