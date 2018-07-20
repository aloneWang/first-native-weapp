 const app = getApp();

Page({
	data:{
		movies:[] ,
		page:1,
		size:20,
		quest:'',
		hasMore:true,
		bottomtitle:'----我是有底线的----'
	} ,

	assignment (quest){
		wx.showLoading({title:"加载中..."})
		if(!this.data.hasMore)return ;

		return app.douban.findMove("search",this.data.page++,this.data.size,quest).then(d=>{
			if(d.subjects.length){
				this.setData({
					movies : this.data.movies.concat(d.subjects) || []
				})
			}else{
				this.setData({
					hasMore:false
				})
			}
			wx.hideLoading()
		}).catch(e=>{console.log(e);wx.hideLoading()})
	},

	searchMore (e){
		if(e.detail.value=="")return;
		this.setData({
			quest : e.detail.value
		})
		this.assignment(e.detail.value)
	},

	onReachBottom (){
		this.assignment(this.data.quest)
	}
	
})
