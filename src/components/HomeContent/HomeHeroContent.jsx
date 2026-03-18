import './HomeHeroContent.css'
import myImage from '../../assets/bishal.png'
import styled, { keyframes } from 'styled-components'
import { FaArrowDown } from "react-icons/fa6";

const nameAnimation = keyframes`
    from {
        width: 50px;
    }
    to {
        width: 270px;
    }
`

const nameMobileAnimation = keyframes`
    from {
        width: 50px;
    }
    to {
        width: 210px;
    }
`

const NameWraper = styled.span`
    width: 270px;
    color: #0AC4E0;
    margin-left: 6px;
    display: inline-flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    overflow: hidden;
    animation: ${nameAnimation} 1.5s ease;

    @media (max-width: 768px) {
        width: 210px;
        animation: ${nameMobileAnimation} 1.5s ease;
    }
    `
    
const Name = styled.span`
    width: 270px;
    position: absolute;
    left: 20px;
    padding: 2px 4px;
    background-color: #0D1A63;
    z-index: -1;
    @media (max-width: 768px) {
        width: 210px;
        left: 18px;
    }
    `
const SquareBracket = styled.span`
    padding: 2px 4px;
    background-color: #0D1A63;
`

function HomeHeroContent() {
    return (
        <div className="home-hero-content">
            <div className="image-container">
                <img src={myImage} alt="bishal" />
            </div>
            <div className="content-container">
                <h1 className='content-header'>hi! i am
                    <NameWraper>
                        <SquareBracket>[</SquareBracket>
                        <Name>bishal sardar</Name>
                        <SquareBracket>]</SquareBracket>
                    </NameWraper>
                </h1>
                <p>I craft digital experiences from scratch — turning ideas into clean code and compelling designs.
                    Currently on a mission to master the web, one pixel at a time.
                    Open to opportunities, collabs, and the occasional all-nighter.</p>
            </div>
            <FaArrowDown className='scroll-down-indicator' />
        </div>
    )
}

export default HomeHeroContent