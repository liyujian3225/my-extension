import './scripts/sw-omnibox.js';
import './scripts/sw-tips.js';

//runtime.onInstalled()。此方法允许扩展设置初始状态或完成安装时的某些任务。
chrome.runtime.onInstalled.addListener(({previousVersion, reason}) => {
  chrome.action.setBadgeText({
    text: "OFF",
  });
});



