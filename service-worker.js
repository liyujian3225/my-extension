import './scripts/sw-omnibox.js';
import './scripts/sw-tips.js';

//runtime.onInstalled()。此方法允许扩展设置初始状态或完成安装时的某些任务。
chrome.runtime.onInstalled.addListener(({previousVersion, reason}) => {
  console.log("previousVersion", previousVersion);
  console.log("reason", reason);
  chrome.action.setBadgeText({
    text: "OFF",
  });
});

//用户单击扩展操作后
chrome.action.onClicked.addListener(async(tab) => {
  console.log("success");
  const prevState = await chrome.action.getBadgeText({tabId: tab.id});
  const nextState = prevState === 'ON' ? 'OFF' : 'ON';
  await chrome.action.setBadgeText({
    tabId: tab.id,
    text: nextState,
  });

  chrome.tabs.create({url: "http://www.baidu.com"});

  const tabs = await chrome.tabs.query({
    url: [
      "https://developer.chrome.com/docs/webstore/*",
      "https://developer.chrome.com/docs/extensions/*",
    ],
  });

  await chrome.scripting.insertCSS({
    files: ["focus-mode.css"],
    target: { tabId: tab.id },
  });

  await chrome.scripting.removeCSS({
    files: ["focus-mode.css"],
    target: { tabId: tab.id },
  });
})



