import { Suspense, lazy, ReactNode } from 'react'
import Loading from '@/components/loading-v1'
import { Navigate } from 'react-router-dom'
import HomeLayout from '@/layout/home-layout'
import { isString } from '../utils/index'

export interface MetaProps {
  keepAlive?: boolean
  requiresAuth?: boolean
  title: string
  key?: string
}

interface RouteObject {
  caseSensitive?: boolean
  children?: RouteObject[]
  element?: React.ReactNode | string
  index?: boolean
  path?: string
  meta?: MetaProps
  isLink?: string
}

const routes: RouteObject[] = [
  {
    path: '/',
    element: <HomeLayout />,
    meta: { title: '首页' },
    children: [
      {
        path: '/',
        element: 'recommend',
        meta: {
          title: '推荐'
        }
      },
      {
        path: '/singer',
        element: 'singer',
        meta: { title: '歌手' }
      },
      {
        path: '/rank',
        element: 'rank',
        meta: {
          title: '排行榜'
        }
      }
    ]
  },
  {
    path: '*',
    element: <Navigate to="/" />
  }
]

// 返回懒加载元素
const LazyElement = (path: string): ReactNode => {
  const ImportComponent = lazy(
    () => import(/* @vite-ignore */ `@/views/${path}`)
  )
  return (
    <Suspense fallback={<Loading />}>
      <ImportComponent />
    </Suspense>
  )
}

// 将懒加载元素安装到routes中
const handleFilterElement = (routers: RouteObject[]) => {
  return routers.map((ele) => {
    if (isString(ele.element)) ele.element = LazyElement(ele.element as string)
    return ele
  })
}

const finalRoutes = handleFilterElement(routes)

export default finalRoutes