/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
// function ratingFunction() {
//   document.getElementById("myDropdown").classList.toggle("show");
// }

// // Close the dropdown menu if the user clicks outside of it
// window.onclick = function (event) {

//   if (!event.target.matches(".userDropbtn")) {
//     var dropdowns = document.getElementsByClassName("ratingDropdown-content");
//     var i;
//     for (i = 0; i < dropdowns.length; i++) {
//       var openDropdown = dropdowns[i];
//       if (openDropdown.classList.contains("show")) {
//         openDropdown.classList.remove("show");
//       }
//     }
//   }
// };
async function ratingFormHandler(event) {
  event.preventDefault();

  const select = document.querySelector("#rating");
  const option = select.options[select.selectedIndex].value;

  const id = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
  ];

  if (option) {
    const response = await fetch(`/api/posts/${id}/rating`, {
      method: "PUT",
      body: JSON.stringify({
        post_id: id,
        num_rating: option,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      document.location.reload();
    } else {
      alert(response.statusText);
    }
  }
}

document.querySelector("#rating").addEventListener("change", ratingFormHandler);
