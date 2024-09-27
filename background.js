// Create a context menu for images
browser.contextMenus.create({
  id: "saucenao-search",
  title: "Search with SauceNAO",
  contexts: ["image"]
});

// Add listener for context menu clicks
browser.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "saucenao-search") {
    const imageUrl = info.srcUrl;
    const sauceNAOUrl = `https://saucenao.com/search.php?url=${encodeURIComponent(imageUrl)}`;
    browser.tabs.create({ url: sauceNAOUrl });
  }
});
