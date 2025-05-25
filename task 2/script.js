// Form Validation
function validateForm() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  if (!name || !email || !message) {
    alert("All fields are required!");
    return false;
  }

  if (!emailPattern.test(email)) {
    alert("Please enter a valid email address.");
    return false;
  }

  alert("Message sent successfully!");
  return true;
}

// Add Image
function addImage() {
  const gallery = document.getElementById("galleryGrid");
  const img = document.createElement("img");
  img.src = `https://picsum.photos/200?random=${Math.floor(Math.random() * 1000)}`;
  img.alt = "New Image";
  gallery.appendChild(img);
}

// Remove Image
function removeImage() {
  const gallery = document.getElementById("galleryGrid");
  if (gallery.children.length > 0) {
    gallery.removeChild(gallery.lastElementChild);
  } else {
    alert("No images left to remove!");
  }
}