//豆瓣电影api
const URL='https://douban.uieee.com/v2/movie'
const fetchApi = require('./fetch')

/**
 * 获取列表类型的数据
 * @param  {String} type   类型，例如：'coming_soon'
 * @param  {Number} page   页码
 * @param  {Number} count  页条数
 * @param  {String} search 搜索关键词
 * @return {Promise}       包含抓取任务的Promise
 */
 //es6 形参可以直接赋默认值
 //抓取电影 api
function findMove(type,page=1,count=20,search=""){
	const params = { start: (page - 1) * count, count: count, city:getApp().data.currentCity}
	return fetchApi(URL,type,search ? Object.assign(params,{q:search}) : params)
}
/*
 * 获取单条类型的数据
 * @param  {Number} id     电影ID
 * @return {Promise}       包含抓取任务的Promise
 */
 function findOne(id){
 	return fetchApi(URL,'subject/'+id)
 }
module.exports={
	findMove,
	findOne
}
