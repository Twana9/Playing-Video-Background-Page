//changing video using dom

function changeVideo() {
  const change = document.getElementById("change");
  document.getElementsByTagName("video")[0].src =
    "pexels-ibrahim-bennett-5735796 (2160p).mp4";
  change.innerHTML = "changed";
}
