document.addEventListener('DOMContentLoaded', function () {
  var link = document.getElementById('gf-inter');
  if (link && link.media === 'print') {
    link.media = 'all';
  }
});


