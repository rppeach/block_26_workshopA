import { useState } from 'react'
import './App.css'
import ListView from './ListView'
import ViewDetail from './ViewDetail'

function App() {

  const [post, viewPost] = useState()

  return (
      <>
        { post?
        <div>
          <ViewDetail post={post} viewPost={viewPost}/>
        </div>
        :
        <div>
        <h1>So you wanna work remote?</h1>
        <h3>Get some applications out there</h3>
        <ListView viewPost={viewPost}/>
        </div>
        }
      </>
  )
}

export default App
