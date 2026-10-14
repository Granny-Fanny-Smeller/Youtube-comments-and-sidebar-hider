const SETTING = "hideYoutubeDistractions";
const CLASS_NAME = "youtube-clean-switch-enabled";

function applySetting(enabled) {
  const updateRoot = () => {
    if (!document.documentElement) return false;
    document.documentElement.classList.toggle(CLASS_NAME, enabled);
    return true;
  };

  if (updateRoot()) return;
  const observer = new MutationObserver(() => {
    if (updateRoot()) observer.disconnect();
  });
  observer.observe(document, { childList: true, subtree: true });
}

chrome.storage.local.get({ [SETTING]: false }, result => {
  applySetting(Boolean(result[SETTING]));
});

chrome.storage.onChanged.addListener((changes, areaName) => {
  if (areaName === "local" && changes[SETTING]) {
    applySetting(Boolean(changes[SETTING].newValue));
  }
});
