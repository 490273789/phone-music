import { Suspense, lazy, ReactNode, LazyExoticComponent } from 'react'
import Loading from '@/components/loading'
import { Navigate } from 'react-router-dom'
import HomeLayout from '@/layout/home-layout'
export interface MetaProps {
  keepAlive?: boolean
  requiresAuth?: boolean
  title: string
  key?: string
}

interface RouteObject {
  caseSensitive?: boolean
  children?: RouteObject[]
  element?: React.ReactNode
  index?: boolean
  path?: string
  meta?: MetaProps
  isLink?: string
}

// 返回懒加载元素
const LazyElement = (ImportFunc: LazyExoticComponent<any>): ReactNode => {
  return (
    <Suspense fallback={<Loading />}>
      <ImportFunc />
    </Suspense>
  )
}
const routes: RouteObject[] = [
  {
    path: '/',
    element: <HomeLayout />,
    meta: { title: '首页' },
    children: [
      {
        path: '/',
        element: LazyElement(lazy(() => import('@/views/recommend'))),
        meta: {
          title: '推荐'
        }
      },
      {
        path: '/singer',
        element: LazyElement(lazy(() => import('@/views/singer'))),
        meta: { title: '歌手' }
      },
      {
        path: '/rank',
        element: LazyElement(lazy(() => import('@/views/recommend'))),
        meta: {
          title: '排行榜'
        }
      }
    ]
  },
  {
    path: '*',
    element: <Navigate to="/home" />
  }
]

export default routes
