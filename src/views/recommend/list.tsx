import styles from './index.module.scss'
import { useAppDispatch, useAppSelector } from '@/hooks/react-redux'
import { getRecommendData } from './store'
import { useEffect } from 'react'
const List = () => {
  const dispatch = useAppDispatch()
  const recommendList = useAppSelector((state) => state.recommend.recommendList)

  useEffect(() => {
    if (!recommendList.length) dispatch(getRecommendData())
  }, [])
  console.log(recommendList)
  return (
    <div className={styles['recommend-wrap']}>
      <h1 className={styles['recommend-title']}>推荐歌单</h1>
      <div className={styles['recommend-list']}>
        {recommendList.map((item) => {
          return (
            <div key={item.id} className={styles['list-item']}>
              <div>
                <img
                  src={item.picUrl + '?param=300x300'}
                  width="100%"
                  height="100%"
                  alt=""
                />
                <div>
                  <span>{item.playCount / 1000}万</span>
                </div>
              </div>
              <div></div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default List
