chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action === "switchRTL") {
    const elements = document.querySelectorAll(
      "main.relative.h-full.w-full.flex-1.overflow-auto.transition-width"
    );
    elements.forEach((element) => {
      element.style.direction = "rtl";
    });
  } else if (request.action === "resetRTL") {
    const elements = document.querySelectorAll(
      "main.relative.h-full.w-full.flex-1.overflow-auto.transition-width"
    );
    elements.forEach((element) => {
      element.style.direction = "ltr";
    });
  }
});
