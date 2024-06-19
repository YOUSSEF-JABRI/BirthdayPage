function init() {
  var svg = document.querySelector(".scene");
  var zoom = false;
  var animationOn = false;
  var modal = document.getElementById("modal");
  var closeButton = document.querySelector(".close-btn");

  // Function to play sound
  function playSound() {
    var audio = new Audio("gift.mp3"); // Replace 'url_to_your_audio_file.mp3' with your actual audio file URL
    audio.play();
  }

  function openBox() {
    document.querySelector(".gift").removeEventListener("click", openBox);
    playSound(); // Play sound immediately on click

    // Delay the animation to start after the sound
    setTimeout(() => {
      TweenMax.set(".hat", {
        transformOrigin: "left bottom",
      });
      TweenMax.to(".hat", 1, {
        onComplete: function () {
          modal.style.display = "block";
        },
        rotationZ: -80,
        x: -500,
        opacity: 0,
        ease: Power2.easeIn,
      });
      TweenMax.to(".box", 1, {
        y: 800,
        ease: Power2.easeIn,
      });
      TweenMax.to(".gift", 1, {
        opacity: 0,
        delay: 1,
        onComplete: function () {
          document.querySelector(".gift").classList.add("hidden");
        },
      });
    }, 550);
  }

  closeButton.addEventListener("click", function () {
    modal.style.display = "none";
    window.location.reload();
  });

  function unZoom() {
    zoom = false;
    svg.style.cursor = "auto";
    TweenMax.to(svg, 2, {
      attr: { viewBox: "0 0 1600 900" },
      ease: Power3.easeOut,
    });
  }

  svg.addEventListener("click", unZoom);
  document.querySelector(".gift").addEventListener("click", openBox);
  document.querySelector(".scene").style.display = "block";
}

// Preload images
var glass = new Image();
glass.src = "https://s3-us-west-2.amazonaws.com/s.cdpn.io/127738/glass-01.png";
var cross = new Image();
cross.src = "https://s3-us-west-2.amazonaws.com/s.cdpn.io/127738/cross.png";

window.onload = function () {
  init();
};
