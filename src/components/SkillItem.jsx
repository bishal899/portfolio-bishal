import './SkillItem.css'
import styled, { css, keyframes } from 'styled-components'

const barAnimation = keyframes`
  from {
    width: 0;
  }
  to {
    width: ${(props) => props.$value}
  }
`
const PercentBar = styled.div`
  // content: '${(props) => props.$value}';
  padding-right: 5px;
  border-radius: 8px;
  text-align: right;
  font-size: 10px;
  margin-left: 12px;
  animation: ${barAnimation} 1.5s ease;
  width: ${(props) => props.$value};
  ${(props) => {
    switch (props.$bgcolor) {
      case "red":
        return css`
          background-color: #ff4800;
        `;
      case "blue":
        return css`
          background-color: #00ccff;
        `;
      case "yellow":
        return css`
          background-color: #ffe600;
        `;
      case "deepblue":
        return css`
          background-color: #0059ff;
          color: #fff;
        `;
      default:
        return css`
          background-color: black;
        `;
    }
  }}
`
function SkillItem(props) {
    return (
        <div className={`item ${props.skillName}`}>
            <h4>{props.skillName}</h4>
            <div className="percent-view">
                {props.children}
                <PercentBar $bgcolor={props.bgcolor} $value={props.value}>{props.value}</PercentBar>
            </div>
        </div>
    )
}

export default SkillItem