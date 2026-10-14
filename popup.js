const enabledInput = document.getElementById("enabled");
const statusText = document.getElementById("status");
const notice = document.getElementById("notice");

async function getCurrentTabIsYouTube() {
  const [tab] = await chrome.tabs.query({ active: true, lastFocusedWindow: true });
  try {
    const hostname = new URL(tab.url).hostname;
    return Boolean(hostname === "youtube.com" || hostname === "www.youtube.com");
  } catch {
    return false;
  }
}

function paint(enabled) {
  enabledInput.checked = enabled;
  statusText.textContent = enabled ? "On — YouTube distractions are hidden." : "Off — YouTube is shown normally.";
  statusText.classList.toggle("on", enabled);
}

async function initialize() {
  const isYouTube = await getCurrentTabIsYouTube();
  enabledInput.disabled = !isYouTube;
  notice.hidden = isYouTube;
  const result = await chrome.storage.local.get({ hideYoutubeDistractions: false });
  paint(result.hideYoutubeDistractions);
  if (!isYouTube) statusText.textContent = "Switch to a YouTube tab to change this setting.";
}

enabledInput.addEventListener("change", async () => {
  const enabled = enabledInput.checked;
  await chrome.storage.local.set({ hideYoutubeDistractions: enabled });
  paint(enabled);
});

chrome.storage.onChanged.addListener((changes, areaName) => {
  if (areaName === "local" && changes.hideYoutubeDistractions) {
    paint(Boolean(changes.hideYoutubeDistractions.newValue));
  }
});

initialize().catch(() => {
  statusText.textContent = "Could not read the setting. Reload the extension and try again.";
});
