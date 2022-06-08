import styled from 'styled-components';


export const ServicesContainer = styled.div`
    // height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    background: grey;

    // @media screen and (max-width: 768px){
    //     height: 100vh;
    // }
    //  @media screen and (max-width: 768px){
    //     height: 100vh;
    // }
    padding: 1rem 0;
    background: #1f2641;
`
export const ServicesWrapper = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 16px;
    padding: 0 50px;

    @media screen and (max-width: 790px){
        grid-template-columns: 1fr;
    }
    @media screen and (max-width: 490px){
        grid-template-columns: 1fr;
    }

`

export const ServicesCard = styled.div`
    background: whitesmoke;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 10px;
    height: 340px;
    padding: 30px;
    text-align: center;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    transition: all 0.2s ease-in-out;
    cursor: pointer;

    &:hover{
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
    }
    @media screen and (max-width: 490px){
        width: 300px;
        height: 340px;
    }
    @media screen and (max-width: 380px){
        width: 13rem;
        height: 25rem;
    }
`
export const ServicesIcon = styled.img`
    height: 80px;
    width: 80px;
    margin-bottom: 10px;

    @media screen and (max-width: 790px){
        height: 60px;
        width: 60px;
    }
`

export const ServicesH1 = styled.h1`
    font-size: 2.5rem;
    color: whitesmoke;
    margin-bottom: 64px;

    @media screen and (max-width: 480px){
        font-size: 2rem;
    }
`

export const ServicesH2 = styled.div`
    font-size: 1.3rem;
    margin-bottom: 10px;
    color: #1f2641;
    font-weight: bold;
       
`
export const ServicesP = styled.div`
    font-size: 1rem;
    text-align: center;
    margin-bottom: 1rem;

`
export const ServicesSmall = styled.div`
font - size: 1.5rem;
color: #1f2641;
margin-bottom: 0.8rem;
    `