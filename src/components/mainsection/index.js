import React, {useState} from 'react'
// import Video from '../../video/videonn.mp4'
import { Button } from '../ButtonElements'
import Space from '../../images/space.jpg'
import { MainContainer, Mainbg, Videobg, MainContent, MainH1, MainP, MainBtnWrapper, ArrowForward, ArrowRight } from './mainElements'


const Main = () => {
  const [hover, setHover] = useState(false)
  
  const onHover = () => {
    setHover(!hover)
  }
  return (
      <MainContainer id='home'>
          <Mainbg>
              <Videobg src={Space} />
      </Mainbg>
      
      <MainContent>
        <MainH1>The Future of Web3</MainH1>
        <MainP>Is Here</MainP>
        <MainBtnWrapper>
          <Button to="signup" onMouseEnter={onHover} onMouseLeave={onHover} primary='true' dark="true" big="true" smooth={true} duration={500} spy={true} exact='true' fontBig='true' offset={-80}>Begin Your Journey{ hover? <ArrowForward /> : <ArrowRight />}</Button>
        </MainBtnWrapper>
      </MainContent>
         
          
    </MainContainer>
  )
}

export default Main