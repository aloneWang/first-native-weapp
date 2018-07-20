const app=getApp()

Page({
	data:{
		movie:{},
		title:''
	},

	onLoad (params) {
		wx.showLoading({ title :'拼命加载中...'})


		return app.douban.findOne(params.id).then( data=>{
			this.setData({
				movie : data,
				title : data.title
			})
			wx.setNavigationBarTitle({title: this.data.title})
			wx.hideLoading()

		}).catch(err=>{
			this.setData({ title: '获取数据异常', movie: {} })
			wx.hideLoading()

			console.log(err)
		})

	},

	onReady () {
		wx.setNavigationBarTitle({title: this.data.title})
	}
})