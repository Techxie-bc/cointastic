import React, { useState } from 'react'
import Main from '../components/mainsection';
import Navbar from '../components/navbar'
import Sidebar from '../components/sidebar'
import InfoSection from '../components/infosection'
// import Spinner from '../components/spinner';
import { homeObjOne, homeObjTwo, homeObjThree } from '../components/infosection/Data';
import Courses from '../components/services';
import Footer from '../components/footer';
import Testimonials from '../components/testimonials/Testimonials';


const Home = () => {
  //    const [loading, setLoading] = useState(false);
  // useEffect(() => {
  //   setLoading(true)
  //   setTimeout(()=>{
  //     setLoading(false)
  //   }, 3000)
  // }, [])

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    }

  return (
      <>
          {/* {
              loading ? <Spinner /> :
                  <>
                      </>
            } */}
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle} />
            <Main />
            <InfoSection {...homeObjOne} />
            <InfoSection {...homeObjTwo} />
            <Testimonials />
            <Courses />
            <InfoSection {...homeObjThree} />
            
                        <Footer />

      </>
  )
}

export default Home