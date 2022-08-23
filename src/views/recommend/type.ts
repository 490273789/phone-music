// 轮播图返回的数据
export interface BannerData {
  banners: Banners[]
}

export interface Banners {
  imageUrl: string
}

// 推荐列表返回的数据
export interface RecommendData {
  result: RecommendItem[]
}
export interface RecommendItem {
  id: number
  picUrl: string
  playCount: number
  name: string
}
