//app.js
const douban=require('./utils/douban')
App({
	/*定义的成员都是全局，可同getApp()调用*/
	data: {
    name: 'Douban Movie',
    version: '0.1.0',
    currentCity: '合肥'
  },
  douban:douban
})