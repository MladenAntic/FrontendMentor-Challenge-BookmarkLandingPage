const features = document.querySelectorAll(".feature");
const highlight = document.querySelectorAll(".highlight");
const featuresWrapper = document.querySelector("#features .wrapper");
const illustrationFeatureTab = document.querySelector(
  ".illustration-feature-tab"
);
const featureTitle = document.querySelector(".feature-title");
const featureDescription = document.querySelector(".feature-description");
const featuresBg = document.querySelector(".features-bg");

features[0].addEventListener("click", () => {
    features[0].style.color = "var(--very-dark-blue)";
    highlight[0].style.display = "block";
    features[0].addEventListener("mouseover", () => {
      features[0].style.color = "var(--very-dark-blue)";
    });
    features[0].addEventListener("mouseout", () => {
      features[0].style.color = "var(--very-dark-blue)";
    });
  
    features[1].style.color = "var(--grayish-blue)";
    features[2].style.color = "var(--grayish-blue)";
    features[1].addEventListener("mouseover", () => {
      features[1].style.color = "var(--soft-red)";
    });
    features[2].addEventListener("mouseover", () => {
      features[2].style.color = "var(--soft-red)";
    });
    features[1].addEventListener("mouseout", () => {
      features[1].style.color = "var(--grayish-blue)";
    });
    features[2].addEventListener("mouseout", () => {
      features[2].style.color = "var(--grayish-blue)";
    });
    highlight[1].style.display = "none";
    highlight[2].style.display = "none";
  
    illustrationFeatureTab.src = "images/illustration-features-tab-1.svg";
    if (window.innerWidth <= 768) {
      featuresBg.style.bottom = "-25%";
    }
    illustrationFeatureTab.style.marginLeft = "0";
    featureTitle.innerText = "Bookmark in one click";
    featureDescription.innerText =
      "Organize you bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.";
  
    animateContent();
  });
  
  features[1].addEventListener("click", () => {
    features[1].style.color = "var(--very-dark-blue)";
    highlight[1].style.display = "block";
    features[1].addEventListener("mouseover", () => {
      features[1].style.color = "var(--very-dark-blue)";
    });
    features[1].addEventListener("mouseout", () => {
      features[1].style.color = "var(--very-dark-blue)";
    });
  
    features[0].style.color = "var(--grayish-blue)";
    features[2].style.color = "var(--grayish-blue)";
    features[0].addEventListener("mouseover", () => {
      features[0].style.color = "var(--soft-red)";
    });
    features[2].addEventListener("mouseover", () => {
      features[2].style.color = "var(--soft-red)";
    });
    features[0].addEventListener("mouseout", () => {
      features[0].style.color = "var(--grayish-blue)";
    });
    features[2].addEventListener("mouseout", () => {
      features[2].style.color = "var(--grayish-blue)";
    });
    highlight[0].style.display = "none";
    highlight[2].style.display = "none";
  
    illustrationFeatureTab.src = "images/illustration-features-tab-2.svg";
    illustrationFeatureTab.style.marginLeft = "125px";
    if (window.innerWidth <= 768) {
      illustrationFeatureTab.style.marginLeft = "0";
      featuresBg.style.bottom = "-35%";
    }
    featureTitle.innerText = "Intelligent search";
    featureDescription.innerText =
      "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.";
  
    animateContent();
  });
  
  features[2].addEventListener("click", () => {
    features[2].style.color = "var(--very-dark-blue)";
    highlight[2].style.display = "block";
    features[2].addEventListener("mouseover", () => {
      features[2].style.color = "var(--very-dark-blue)";
    });
    features[2].addEventListener("mouseout", () => {
      features[2].style.color = "var(--very-dark-blue)";
    });
  
    features[0].style.color = "var(--grayish-blue)";
    features[1].style.color = "var(--grayish-blue)";
    features[0].addEventListener("mouseover", () => {
      features[0].style.color = "var(--soft-red)";
    });
    features[1].addEventListener("mouseover", () => {
      features[1].style.color = "var(--soft-red)";
    });
    features[0].addEventListener("mouseout", () => {
      features[0].style.color = "var(--grayish-blue)";
    });
    features[1].addEventListener("mouseout", () => {
      features[1].style.color = "var(--grayish-blue)";
    });
    highlight[0].style.display = "none";
    highlight[1].style.display = "none";
  
    illustrationFeatureTab.src = "images/illustration-features-tab-3.svg";
    illustrationFeatureTab.style.marginLeft = "125px";
    if (window.innerWidth <= 768) {
      illustrationFeatureTab.style.marginLeft = "0";
      featuresBg.style.bottom = "-35%";
    }
    featureTitle.innerText = "Share your bookmarks";
    featureDescription.innerText =
      "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.";
  
    animateContent();
  });
  
  function animateContent() {
    featuresWrapper.className = "wrapper";
    for (let i = 0; i < highlight.length; i++) {
      highlight[i].className = "highlight";
    }
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        featuresWrapper.classList.add("feature-animation");
        for (let i = 0; i < highlight.length; i++) {
          highlight[i].classList.add("highlight-animation");
        }
      });
    });
  }