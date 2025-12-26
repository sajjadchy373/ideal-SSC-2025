// nav bar sec
function openNav(){
  document.getElementById("sidebar").classList.add("active");
  document.getElementById("overlay").classList.add("active");
}

function closeNav(){
  document.getElementById("sidebar").classList.remove("active");
  document.getElementById("overlay").classList.remove("active");
}

// gerarry sec
const images = document.querySelectorAll("#gallery img");
  const viewer = document.getElementById("viewer");
  const fullImage = document.getElementById("fullImage");
  const downloadBtn = document.getElementById("downloadBtn");

  let index = 0;

  function showImage(i) {
    index = i;

    const imgSrc = images[i].src;

    // fullscreen image
    fullImage.src = imgSrc;

    // 👉 download system (main part)
    downloadBtn.href = imgSrc;
    downloadBtn.setAttribute("download", "image-" + (i + 1) + ".jpg");

    viewer.style.display = "flex";
  }

  images.forEach((img, i) => {
    img.addEventListener("click", () => showImage(i));
  });

  document.getElementById("prevBtn").onclick = () => {
    index = (index - 1 + images.length) % images.length;
    showImage(index);
  };

  document.getElementById("nextBtn").onclick = () => {
    index = (index + 1) % images.length;
    showImage(index);
  };

  document.getElementById("closeBtn").onclick = () => {
    viewer.style.display = "none";
  };






  const videos = document.querySelectorAll(".v");

  videos.forEach(v => {
    v.addEventListener("play", () => {
      videos.forEach(other => {
        if (other !== v) other.pause();
      });
    });
  });


  const iframes = document.querySelectorAll("iframe");
const srcList = [];

iframes.forEach((iframe, index) => {
  srcList[index] = iframe.src;
});

function playVideo(activeIndex){
  iframes.forEach((iframe, index) => {
    if(index !== activeIndex){
      iframe.src = srcList[index]; // reload → video বন্ধ
    }
  });
}
