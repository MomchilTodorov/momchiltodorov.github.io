let ecommForm = document.getElementById('e-commForm');
ecommForm.addEventListener('mousedown', function(event) {
  if (event.which == 2) {
    event.preventDefault();
    $('button#e-commBtn').click();
  }
});

let rqmForm = document.getElementById('rqmForm');
rqmForm.addEventListener('mousedown', function(event) {
  if (event.which == 2) {
    event.preventDefault();
    $('button#rqmBtn').click();
  }
});
