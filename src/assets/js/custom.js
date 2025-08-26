
// Audio toggle
function playAudio() {
    const audio = document.getElementById("myAudio");
    const icon = document.getElementById("audio-icon");

    if (audio.paused || audio.ended) {
      audio.play();
      icon.classList.remove("fa-play");
      icon.classList.add("fa-pause");
    } else {
      audio.pause();
      icon.classList.remove("fa-pause");
      icon.classList.add("fa-play");
    }
  }

// Portfolio area
document.addEventListener('DOMContentLoaded', () => {
  const tabItems = document.querySelectorAll('.portfolio-tab ul li');
  const tabContents = document.querySelectorAll('.tab-content');

  tabItems.forEach(item => {
    item.addEventListener('click', () => {
      const tabId = item.getAttribute('data-tab');

      // Remove "current" class from all tabs and contents
      tabItems.forEach(i => i.classList.remove('current'));
      tabContents.forEach(content => content.classList.remove('current'));

      // Add "current" class to clicked tab and corresponding content
      item.classList.add('current');
      const targetContent = document.getElementById(tabId);
      if (targetContent) {
        targetContent.classList.add('current');
      }
    });
  });
});


// Cursor move js
document.addEventListener('mousemove', function (e) {
    const x = (e.clientX / window.innerWidth) * 10;
    const y = (e.clientY / window.innerHeight) * 10;
    document.body.style.backgroundPosition = `${50 + x}% ${50 + y}%`;
});

