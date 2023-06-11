$(document).ready(function() {
  // Add a smooth scroll to the links in the header
  $('.header a').on('click', function(e) {
    e.preventDefault();

    // Get the href of the link
    var href = $(this).attr('href');

    // Scroll to the element with the id of the href
    $('html, body').animate({
      scrollTop: $(href).offset().top
    }, 500);
  });

  // Function to fetch the latest YouTube video and display it
  function loadLatestVideo() {
// YouTube Data API request to fetch the most recent video
fetch('https://www.googleapis.com/youtube/v3/search?key=AIzaSyA2d7Pts8zjAioahIKm0eUvdnsRl3kH86E&channelId=UCjD3bXgQyyNgaXsGBQiJFvw&part=snippet,id&order=date&maxResults=1')
  .then(response => response.json())
  .then(data => {
    const videoId = data.items[0].id.videoId;
    const videoPlayerDiv = document.getElementById('latest-video');
    videoPlayerDiv.innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allowfullscreen></iframe>`;
  })
  .catch(error => console.error('Error:', error));

  }

  // Function to initialize the YouTube API and load the latest video
  function onYouTubeIframeAPIReady() {
    loadLatestVideo();
  }

  onYouTubeIframeAPIReady(); // Call the function to load the latest video
});
