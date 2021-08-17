const unirest = require('unirest');


// let req = unirest("GET", "https://www.universal-tutorial.com/api/getaccesstoken");

// req.headers({
//     "Accept": "application/json",
//     "api-token": "YaVRL8YCgTl_tq8I2togRoa_az0vyDoFJeE67KcYpebH4TnAuvfqVf7m4JfOnTNMPkU",
//     "user-email": "freezenleo@gmail.com"
// })
//     .then((response) => console.log(response.body));
let state = [];
function stateList() {
    var req = unirest("GET", "https://www.universal-tutorial.com/api/states/United States");

    req.headers({
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJfZW1haWwiOiJmcmVlemVubGVvQGdtYWlsLmNvbSIsImFwaV90b2tlbiI6IllhVlJMOFlDZ1RsX3RxOEkydG9nUm9hX2F6MHZ5RG9GSmVFNjdLY1lwZWJINFRuQXV2ZnFWZjdtNEpmT25UTk1Qa1UifSwiZXhwIjoxNjI5MjU5MjAwfQ.90KWJBct0p2BShAOU3fCqSHAYTaF2NT_Ha9LxOvMSIw",
        "Accept": "application/json"
    })
        .then((response) => {
            Object.keys(response.body).forEach(function (key) {
                var single = response.body[key];
                console.log(single);
                state.push(single);


            })
            console.log(state);
        });
}
stateList();

let city = '';
function cityList() {
    var req = unirest("GET", "https://www.universal-tutorial.com/api/cities/" + state);

    req.headers({
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJfZW1haWwiOiJmcmVlemVubGVvQGdtYWlsLmNvbSIsImFwaV90b2tlbiI6IllhVlJMOFlDZ1RsX3RxOEkydG9nUm9hX2F6MHZ5RG9GSmVFNjdLY1lwZWJINFRuQXV2ZnFWZjdtNEpmT25UTk1Qa1UifSwiZXhwIjoxNjI5MjU5MjAwfQ.90KWJBct0p2BShAOU3fCqSHAYTaF2NT_Ha9LxOvMSIw",
        "Accept": "application/json"
    })
        .then((response) => console.log(response.body));
}




