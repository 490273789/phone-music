import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import 'virtual:svg-icons-register'
import './style/index.scss'
import store from './store'
import App from './App'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <App />
  </Provider>
)
