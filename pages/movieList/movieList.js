const app=getApp()
Page({
	data:{
		movies:[],
		bottomtitle:'----- 我是有底线的！-----',
		bartitle:'',
		hasMore:true,
		type:'in_theaters',
		page:1,
		size:20
	},

	loadMore () {
		if(!this.data.hasMore)  return ;

		wx.showLoading({title:'拼命加载中...'})

		return app.douban.findMove(this.data.type,this.data.page++,this.data.size).then( data=>{
			if ( data.subjects.length) {
				this.setData({
					movies: this.data.movies.concat(data.subjects)
				})

			} else {
				this.setData({
					hasMore: false
				})
			}

			wx.hideLoading()
		}).catch( err=>{ wx.hideLoading();console.log(err)})
	},

	onLoad (params) {
		//修改data中的属性只要不发送到视图上，就可以不用setData
		this.data.bartitle = params.title || this.data.bartitle ;
		this.data.type = params.type || this.data.type ;

		this.loadMore()
	} ,
	onReady () {
    wx.setNavigationBarTitle({ title: this.data.bartitle  })
  },
  onReachBottom (){
  	this.loadMore()
  }
})
