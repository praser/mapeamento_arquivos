import styled, { keyframes } from "styled-components"
import { COLORS_VARIANTS } from "../../utils/constants"

const fadeIn = keyframes`
  from {
    transform: scale(.25);
    opacity: 0;
  }

  to {
    transform: scale(1);
    opacity: 1;
  }
`

const fadeOut = keyframes`
  from {
    transform: scale(1);
    opacity: 0;
  }

  to {
    transform: scale(.25);
    opacity: 1;
  }
`

export const Container = styled.div`
  padding: 10px;
  border-radius: 5px;
  position: absolute;
  top: 0;
  width: 95%;
  margin-top: 90px;
  background-color: ${({ variant }) =>
    variant ? COLORS_VARIANTS[variant] : COLORS_VARIANTS.info};
  color: #ffffff;
  letter-spacing: 0.08rem;
  line-height: 1.5rem;
  box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.2);
  visibility: ${(props) => (props.out ? "hidden" : "visible")};
  animation: ${(props) => (props.out ? fadeOut : fadeIn)} 0.15s linear;
  transition: visibility 1s linear;
`
export const Text = styled.p``
