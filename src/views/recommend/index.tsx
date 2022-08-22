import { memo, useEffect } from 'react'
import Slider from '@/components/slider'
import { useAppDispatch, useAppSelector } from '@/hooks/react-redux'
import { getBannerData } from './store'
const Recommend = () => {
  const dispatch = useAppDispatch()

  const bannerList = useAppSelector((state) => state.recommend.bannerList)

  useEffect(() => {
    dispatch(getBannerData())
  }, [])

  return (
    <div>
      <Slider list={bannerList} />
    </div>
  )
}

export default memo(Recommend)
