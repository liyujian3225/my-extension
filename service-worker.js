import './scripts/sw-omnibox.js';
import './scripts/sw-tips.js';

//插件生命周期——安装或更新，初始化操作
chrome.runtime.onInstalled.addListener((detail) => {
  const { previousVersion, reason } = detail;
  if(reason === "install") {
    console.log("This is a first install!");
  }else if(reason === "update") {
    console.log("Updated from " + previousVersion + " to " + chrome.runtime.getManifest().version + "!");
  }
  chrome.action.setBadgeText({
    text: reason,
  });
});

//插件生命周期——启动(用户打开浏览器)，初始化数据，设置默认状态等。
chrome.runtime.onStartup.addListener(() => {
  console.log("Browser started, initialize plugin data.");
})

//插件生命周期——运行(启动后就进入运行状态)，响应用户操作，监听和处理浏览器事件，提供各种功能。
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  const { id, index, title, status, active, width, height } = tab;
  const info = `当前tab页面id是${id},索引值index是${index},标题title是${title},状态status是${status},激活active是${active}`;
  console.log(info)
})

//插件生命周期——停止(用户关闭浏览器时),保存数据，清理资源等
chrome.runtime.onSuspend.addListener(() => {
  console.log("Browser is about to close, save plugin data.");
})



