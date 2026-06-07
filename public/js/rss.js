// Initialize Remote Config
const remoteConfig = firebase.remoteConfig();

// 1. OPTIMAL: Set settings for development 
// During testing, set minimumFetchIntervalMillis to 0 to see changes instantly.
// In production, the default is 12 hours.
remoteConfig.settings = {
  minimumFetchIntervalMillis: 3600000, // 1 hour for production
};

// 2. Set internal defaults (prevents app from breaking if fetch fails)
remoteConfig.defaultConfig = {
  'weather_alert_json': JSON.stringify({
    "active": false,
    "title": "",
    "message": "",
    "severity": "none"
  })
};

/**
 * Fetches and Activates the latest climate alerts
 */
async function updateWeatherAlertBanner() {
  try {
    // Fetch from server and activate the values locally
    await remoteConfig.fetchAndActivate();
    
    // Get the JSON string and parse it
    const alertRaw = remoteConfig.getValue('weather_alert_json').asString();
    const alertData = JSON.parse(alertRaw);

    if (alertData.active) {
      renderWarningBar(alertData);
    } else {
      hideWarningBar();
    }
  } catch (err) {
    console.error("Remote Config fetch failed:", err);
  }
}

/**
 * UI Render Function
 */
function renderWarningBar(data) {
  const banner = document.getElementById('warning-bar'); // Assuming you have a div with this ID
  banner.style.display = 'block';
  banner.className = `banner-${data.severity}`; // e.g., banner-warning, banner-danger
  banner.innerHTML = `<strong>${data.title}:</strong> ${data.message}`;
}

// Execute on app load
updateWeatherAlertBanner();