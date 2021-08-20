async function ratingFormHandler(event) {
  event.preventDefault();

  const select = document.querySelector('#rating');
  const option = select.options[select.selectedIndex].value;

  const id = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
  ];

  if (option) {
    console.log('response', option);
    const response = await fetch(`/api/posts/${id}/rating`, {
      method: 'PUT',
      body: JSON.stringify({
        post_id: id,
        num_rating: option
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.reload();
    } else {
      alert(response.statusText);
    }
  }
}

document.querySelector('#rating').addEventListener('change', ratingFormHandler);
