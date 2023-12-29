function sendOTP(fieldId) {
  // Code to send OTP to the provided field (phone or email)
}

document.getElementById('ownerPhoto').addEventListener('change', function(event) {
  var preview = document.getElementById('ownerPhotoPreview');
  preview.style.display = 'block';
  preview.src = URL.createObjectURL(event.target.files[0]);
});

function addPhoto() {
  // Code to add a new photo input field and its respective preview
}

function removePhoto() {
  // Code to remove the last added photo input field and its preview
}