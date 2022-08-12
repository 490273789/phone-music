import { useNavigate } from 'react-router-dom'
import styles from './home-layout.module.scss'

const tabList = [
  { name: '推荐', path: '/' },
  { name: '歌手', path: '/singer' },
  { name: '排行榜', path: '/rank' }
]
const Tab = () => {
  const navigate = useNavigate()

  const clickTab = (path: string) => {
    navigate(path)
  }
  return (
    <ul className={styles['tab-wrap']}>
      {tabList.map((ele) => (
        <li key={ele.name} onClick={() => clickTab(ele.path)}>
          {ele.name}
        </li>
      ))}
    </ul>
  )
}

export default Tab
