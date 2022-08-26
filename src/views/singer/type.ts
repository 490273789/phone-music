// 歌手列表参数
export interface SingerListParams {
  type: string
  area: string
  initial: string
  offset: number
}

// 初始化状态
export interface InitSingerState {
  singerList: SingerObject[]
  params: SingerListParams
}

// 歌手信息系
export interface SingerObject {
  name: string
  picUrl: string
  id: number
}

// 歌手接口返回些信息
export interface SingerDataResponse {
  artists: SingerObject[]
}
