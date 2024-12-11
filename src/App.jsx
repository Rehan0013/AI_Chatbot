import { React } from 'react'

import PageTitle from './components/PageTitle.jsx'
import TopAppBar from './components/TopAppBar.jsx'
import Sidebar from './components/Sidebar.jsx'

const App = () => {
  return (
    <>
      <PageTitle title="Phoenix | ChatBot" />

      <div className="">
        <Sidebar />

        <div className="">
          <TopAppBar />
          <div className="">

            <div className="">

            </div>
          </div>
          <div className="">
            <p className="">Phoenix may display inaccurate info, including about people, so double check it's responses.
              <a href="https://support.google.com/gemini?p=rivacy_notice" target='_blank' className="">Your Privacy & Gemini Apps</a>
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
