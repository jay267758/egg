// 定时任务
const Subscription = require('egg').Subscription;

class GetTime extends Subscription {
  static get schedule() {
    return {
      interval: '3s',
      type: 'worker',
    };
  }
  async subscribe() {
    // console.log(Date.now()); // 每个3秒打印时间戳
  }
}

module.exports = GetTime;
