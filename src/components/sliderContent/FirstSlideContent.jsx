import './FirstSlideContent.css'
import './SliderContent.css'
import styled, { keyframes } from 'styled-components'

const nameAnimation = keyframes`
    from {
        width: 50px;
    }
    to {
        width: 270px;
    }
`
// const bracketAnimation = keyframes`
//     from {
//         transform: translateX(0);
//     }
//     to {
//         transform: translateX(225px);
//     }
// `
const NameWraper = styled.span`
    width: 270px;
    // background-color: #0D1A63;
    color: #0AC4E0;
    margin-left: 6px;
    display: inline-flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    overflow: hidden;
    animation: ${nameAnimation} 1.5s ease;
    `
    const Name = styled.span`
    // display: inline-block;
    width: 230px;
    // color: #0AC4E0;
    position: absolute;
    left: 20px;
    padding: 2px 4px;
    background-color: #0D1A63;
    z-index: -1;
    `
    const SquareBracket = styled.span`
    padding: 2px 4px;
    background-color: #0D1A63;
`

function FirstSlideContent() {
    return (
        <div className="first-slide-content">
            <div className="image-container"></div>
            <div className="content-container">
                <h1 className='content-header'>hi! i am 
                    <NameWraper>
                        <SquareBracket>[</SquareBracket>
                        <Name>bishal sardar</Name>
                        <SquareBracket>]</SquareBracket>
                    </NameWraper>
                </h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo minus, quo suscipit ad maiores assumenda itaque ab distinctio officiis dolore atque vero sint</p>
            </div>
        </div>
    )
}
export default FirstSlideContent