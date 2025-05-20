function showLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(initMap, showError);
    } else {
      alert("مرورگر شما از موقعیت مکانی پشتیبانی نمی‌کند.");
    }
  }
  
  function initMap(position) {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
  
    const map = L.map('map').setView([lat, lng], 13);
  
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(map);
  
    L.marker([lat, lng]).addTo(map)
      .bindPopup("شما اینجایید!").openPopup();
  }
  
  function showError(error) {
    alert("خطا در دریافت موقعیت: " + error.message);
  }