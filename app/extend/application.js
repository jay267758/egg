// 全局插件
module.exports = {

  // 方法扩展
  currentTime() {
    return getTime();
  },
  // 属性扩展
  get timeProp() {
    return getTime();
  },
};

function getTime() {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth() + 1;
  const day = now.getDate();
  const time = year + '年' + month + '月' + day + '日';
  return time;
}
