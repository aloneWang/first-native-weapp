//index.js
//获取应用实例
//不能在自定义的外链js定义否则会报错
const app = getApp()

Page({
	data:{
		boards: [
      { key: 'in_theaters' },
      { key: 'coming_soon' },
      { key: 'new_movies' },
      { key: 'top250' }
    ]
	},
	/*生命周期函数--监听页面加载*/
	onLoad () {
		wx.showLoading({ title: '拼命加载中...'});

		const tasks=this.data.boards.map((board)=>{
			return app.douban.findMove(board.key,1,8).then(data=>{
				board.title=data.title;
				board.movies = data.subjects
				return board
			})
		})

		Promise.all(tasks).then( boards => {
			this.setData({boards:boards,loading:false});
			wx.hideLoading()
		})
	}
})
