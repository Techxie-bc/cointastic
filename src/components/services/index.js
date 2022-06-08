import React from 'react'
import { ServicesContainer, ServicesWrapper, ServicesH1, ServicesCard, ServicesSmall, ServicesIcon, ServicesH2, ServicesP } from './servicesElements';
import Icon1 from '../../images/icon1.svg'
import Icon2 from '../../images/eth.svg'
import Icon3 from '../../images/icon2.svg'
import Icon4 from '../../images/etherso.svg'
import Icon5 from '../../images/svg1.svg'
import Icon6 from '../../images/svgtwo.svg'
import { Button } from '../ButtonElements';


const Courses = (primary, dark, dark2) => {
    return (
      <>
      <ServicesContainer id='services'>
          <ServicesH1>Our Courses</ServicesH1>
          <ServicesWrapper>
              <ServicesCard>
                  <ServicesIcon src={Icon1} />
                  <ServicesH2>Introduction to BlockChain</ServicesH2>
                  <ServicesP>Learn the fundamentals of the field of Blockchain, History, Careers, and basic terms. </ServicesP>
                        <ServicesSmall>32 Videos</ServicesSmall>
                        <Button to="/signup"
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact="true"
                            offset={-80}
                            primary={primary ? 1 : 0}
                            dark={dark ? 1 : 0}
                            dark2={dark2 ? 1 : 0}
                            
                        >more..</Button>
              </ServicesCard>
              <ServicesCard>
                  <ServicesIcon src={Icon2} />
                  <ServicesH2>Learn Solidity</ServicesH2>
                  <ServicesP> This course features, installing the IDE, writing your first line of solidity code and the basic syntax in Solidity </ServicesP>
                        <ServicesSmall>24 Videos</ServicesSmall>
                         <Button to="/signup"
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact="true"
                            offset={-80}
                            primary={primary ? 1 : 0}
                            dark={dark ? 1 : 0}
                            dark2={dark2 ? 1 : 0}>more..</Button>

              </ServicesCard>
              <ServicesCard>
                  <ServicesIcon src={Icon3} />
                  <ServicesH2>Advanced Solidity</ServicesH2>
                  <ServicesP>Intermediate Course for Solidity designed to expose you to the deep waters indepths of Solidity. Learn Solidity Course is a pre-requisite of this course.  </ServicesP>
                        <ServicesSmall>24 Videos</ServicesSmall>
                         <Button to="/signup"
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact="true"
                            offset={-80}
                            primary={primary ? 1 : 0}
                            dark={dark ? 1 : 0}
                            dark2={dark2 ? 1 : 0}>more..</Button>

              </ServicesCard>
              <ServicesCard>
                  <ServicesIcon src={Icon4} />
                  <ServicesH2>Solidity + Ethereum: The Complete Course</ServicesH2>
                  <ServicesP>Learn the fundamentals of the field of Blockchain, Careers, and basic terms. </ServicesP>
                        <ServicesSmall>24 Videos</ServicesSmall>
                         <Button to="/signup"
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact="true"
                            offset={-80}
                            primary={primary ? 1 : 0}
                            dark={dark ? 1 : 0}
                            dark2={dark2 ? 1 : 0}>more..</Button>

              </ServicesCard>
              <ServicesCard>
                  <ServicesIcon src={Icon5} />
                  <ServicesH2>Deploying DAPPS : Beginner to Advanced</ServicesH2>
                  <ServicesP>Learn the fundamentals of the field of Blockchain, History, Careers, and basic terms. </ServicesP>
                  <ServicesSmall>24 Videos</ServicesSmall>
                   <Button to="/signup"
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact="true"
                            offset={-80}
                            primary={primary ? 1 : 0}
                            dark={dark ? 1 : 0}
                            dark2={dark2 ? 1 : 0}>more..</Button>

              </ServicesCard>
              <ServicesCard>
                  <ServicesIcon src={Icon6} />
                  <ServicesH2>Smart Contracts - Advanced to Master</ServicesH2>
                  <ServicesP>Learn the fundamentals of the field of Blockchain, History, Careers, and basic terms. </ServicesP>
                        <ServicesSmall>24 Videos</ServicesSmall>
                         <Button to="/signup"
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact="true"
                            offset={-80}
                            primary={primary ? 1 : 0}
                            dark={dark ? 1 : 0}
                            dark2={dark2 ? 1 : 0}>more..</Button>

              </ServicesCard>
          </ServicesWrapper>
            </ServicesContainer>
            </>
  )
}

export default Courses