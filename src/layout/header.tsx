import styles from './home-layout.module.scss'

const Header = () => {
  return (
    <div className={styles.header}>
      <span>菜单</span>
      <span className={styles.title}>云音乐</span>
      <span>搜索</span>
    </div>
  )
}
export default Header
