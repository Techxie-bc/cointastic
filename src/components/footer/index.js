import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'

const Footer = () => {
    const FooterContainer = styled.footer`
        background-color: #101522;

    `
    const FooterWrap = styled.div`
        padding: 40px 24px;
        display: flex;
        flex-direction: column;
        align-items: center;
        max-width: 1100px;
        margin: 0 auto;
    `
    const FooterLinksCon = styled.div`
        display: flex;
        justify-content: center;
        @media screen and (max-width: 820px){
            padding-top: 32px;

        }
    `
    const FooterLinksWrap = styled.div`
        display: flex;
        @media screen and (max-width: 820px){
            flex-direction: column;

        }
    `
        const FooterLinkItems = styled.div`
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            margin: 16px;
            text-align: left;
            width: 160px;
            box-sizing: border-box;
            color: lightgrey;

            @media screen and (max-width: 420px){
                margin: 0;
                padding: 10px;
                width: 100%;
            }
        `
    const FooterTitle = styled.h1`
            font-size: 18px;
            margin-bottom: 16px;
            text-align: left;

    `
    const FooterLink = styled(Link)`
            color: lightgrey;
            text-decoration: none;
            margin-bottom: 0.5rem;
            font-size: 16px;
            text-align: left;


            &:hover{
                color: green;
                transition: 0.3s ease-out;
            }
    `

    const SocialMedia = styled.section`
            max-width: 1000px;
            width: 100%;
            margin: 2rem 0;
        ` 
    const SocialWrap = styled.div`
            display: flex;
            // flex-direction: column;
            justify-content: space-between;
            align-items: center;
            max-width: 1100px;
            margin: 40px auto 0 aoto;
            @media screen and (max-width:820px) {
                flex-direction: column;
            }
    `
    const SocialLogo = styled(Link)`
            color: lightgrey;
            justify-self: start;
            cursor: pointer;
            text-decoration: none;
            font-size: 1.5rem;
            display: flex;
            align-items: center;
            margin-bottom: 16px;
            font-weight: bold;
    `
    const WebsiteR = styled.small`
            color: white;
            margin-bottom: 16px;

    `
    const SocialIcons = styled.div`
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 240px;
    `
    const SocialIconLink = styled.a`
            color: grey;
            font-size: 2rem;
    `
    const SocialName = styled.p`
            text-align: center;
            color: white;
            margin: 0.5rem 0;
    `
  return (
      <FooterContainer>
          <FooterWrap>
              <FooterLinksCon>
                  <FooterLinksWrap>
                      <FooterLinkItems>
                          <FooterTitle>About Us</FooterTitle>
                              
                              <FooterLink to='/signin'>Testimonials</FooterLink>
                              <FooterLink to='/signin'>Careers</FooterLink>
                              <FooterLink to='/signin'>Terms of Service</FooterLink>

                              <FooterLink to='/signin'>Legal Support</FooterLink>

                          
                      </FooterLinkItems>
                      <FooterLinkItems>
                          <FooterTitle>Contact Us</FooterTitle>
                              
                              <FooterLink to='/signin'>Scholarship</FooterLink>
                              <FooterLink to='/signin'>Courses</FooterLink>
                              <FooterLink to='/signin'>Pricing</FooterLink>

                              <FooterLink to='/signin'>Videos</FooterLink>

                          
                      </FooterLinkItems>
                  </FooterLinksWrap>
                  <FooterLinksWrap>
                      <FooterLinkItems>
                          <FooterTitle>Reach Us</FooterTitle>
                              
                              <FooterLink to='www.facebook.com'>Facebook</FooterLink>
                              <FooterLink to='www.instagram.com'>Instagram</FooterLink>
                              <FooterLink to='www.youtube.com'>YouTube</FooterLink>

                              <FooterLink to='www.twitter.com'>Twitter</FooterLink>

                          
                      </FooterLinkItems>
                      <FooterLinkItems>
                          <FooterTitle>Features</FooterTitle>
                              
                              <FooterLink to='/'>Ambassadors</FooterLink>
                              <FooterLink to='/'>Join Us</FooterLink>
                              <FooterLink to='/'>Influencer</FooterLink>

                              <FooterLink to='/'>Agency</FooterLink>

                          
                      </FooterLinkItems>
                  </FooterLinksWrap>
              </FooterLinksCon>
              <SocialMedia>
                  <SocialWrap>
                      <SocialLogo to='/'>CoinSchool</SocialLogo>
                      <WebsiteR>CoinSchool &copy; {new Date().getFullYear()} All Rights Reserved</WebsiteR>
                      <SocialIcons>
                          <SocialIconLink href= "/" target="_blank" aria-label="Facebook">
                              <FaFacebook />
                          </SocialIconLink>
                          <SocialIconLink href= "/" target="_blank" aria-label="Instagram">
                              <FaInstagram/>
                          </SocialIconLink>
                          <SocialIconLink href= "/" target="_blank" aria-label="Youtube">
                              <FaYoutube />
                          </SocialIconLink>
                          <SocialIconLink href= "/" target="_blank" aria-label="Twitter">
                              <FaTwitter />
                          </SocialIconLink>
                          
                        </SocialIcons>
                      <SocialName>Designed by Irene .C. Onyia</SocialName>

                  </SocialWrap>
              </SocialMedia>
          </FooterWrap>
    </FooterContainer>
  )
}

export default Footer