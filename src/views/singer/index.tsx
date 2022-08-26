import { memo, useEffect } from 'react'
import styles from './index.module.scss'
import Horizon from './components/horizon'
import { categoryTypes, areaTypes, alphaTypes } from '@/utils/map'
import { useAppDispatch, useAppSelector } from '@/hooks/react-redux'
import { changeParams, getSingerData, getHotSingerData } from './store'
import { SingerListParams } from './type'

const Singer = () => {
  const dispatch = useAppDispatch()

  const params = useAppSelector((state) => state.singer.params)
  const singerList = useAppSelector((state) => state.singer.singerList)

  useEffect(() => {
    console.log('init--')
    dispatch(getHotSingerData())
  }, [dispatch])

  console.log('每次执行')

  // 发送请求
  const requestSinger = (data: SingerListParams) => {
    dispatch(changeParams(data))
    dispatch(getSingerData(data))
  }

  // 更换分类
  const changeCategory = (val: string) => {
    requestSinger({ ...params, type: val, offset: 0 })
  }

  // 更换地区
  const changeArea = (val: string) => {
    requestSinger({ ...params, area: val, offset: 0 })
  }

  // 更换首字母
  const changeAlpha = (val: string) => {
    requestSinger({ ...params, initial: val, offset: 0 })
  }

  // // 下拉刷新
  // const pullDownRefresh = () => {
  //   console.log('下拉刷新')
  //   return '下拉刷新'
  // }

  // // 上拉刷新
  // const pullDownRefresh = () => {
  //   console.log('上拉刷新')
  // }

  console.log(singerList)

  return (
    <div className={styles['nav-wrap']}>
      <Horizon
        list={categoryTypes}
        currentVal={params.type}
        title="分类（默认热门）："
        handleClick={changeCategory}
      />
      <Horizon
        list={areaTypes}
        currentVal={params.area}
        title="地区："
        handleClick={changeArea}
      />
      <Horizon
        list={alphaTypes}
        currentVal={params.initial}
        title="首字母："
        handleClick={changeAlpha}
      />
    </div>
  )
}

export default memo(Singer)
