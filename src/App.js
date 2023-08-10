import './App.css';
import Head from './components/head'
import Body from './components/body'
import {Provider} from 'react-redux'
import store from './utils/store'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Watch from './components/Watch'
import VideoContainer from './components/VideoContainer.js'

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <Head/>
      <RouterProvider router={appRouter} />
      
    </div>
    </Provider>
  );
}


const appRouter=createBrowserRouter([
  {
    path:'/',
    element: <Body/>,
    children:[
      {
        path:'/',
        element:<VideoContainer/>
      },
      {
        path:'/watch',
        element:<Watch/>
      }
    ]
  }
])



export default App;
