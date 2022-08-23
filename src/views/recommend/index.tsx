import { memo, useEffect } from 'react'
import Slider from '@/components/slider'
import { useAppDispatch, useAppSelector } from '@/hooks/react-redux'
import { getBannerData } from './store'
import List from './list'
const Recommend = () => {
  const dispatch = useAppDispatch()

  const bannerList = useAppSelector((state) => state.recommend.bannerList)

  useEffect(() => {
    if (!bannerList.length) dispatch(getBannerData())
  }, [])

  return (
    <div>
      <Slider list={bannerList} />
      <List />
    </div>
  )
}

export default memo(Recommend)
