import React from 'react'
import styled from 'styled-components'

export default function Button({
  children = 'default button',
  onclick = () => {
    console.error('Button click event is not declared')
  },
  style = {},
}: {
  children: any
  onclick?: () => void
  style?: React.CSSProperties
  small?: boolean
}): JSX.Element {
  return (
    <StyledButton onClick={onclick} style={style}>
      {children}
    </StyledButton>
  )
}

const StyledButton = styled.button`
   {
    border: 0 none;
    border-radius: 50px;
    min-width: 100px;
    min-height: 60px;
    backdrop-filter: blur(6px);
    font-size: 20px;
    font-weight: 400;
    margin: 5px;
    padding: 0px;
    transition: all 0.2s ease-in;
    position: relative;
    color: ${(props) => props.theme.text};
    width: 100%;
    background: ${(props) =>
      props.theme.isDark
        ? `radial-gradient(100% 2388.37% at 0% 0%, rgba(255, 255, 255, 0.48) 0%, rgba(255, 255, 255, 0.06) 100%);`
        : `radial-gradient(100% 2388.37% at 0% 50%, rgba(105, 113, 151, 0.48) 0%, rgba(105, 113, 151, 0.06) 100%);`};

    .themeIcon-enter {
      opacity: 0;
    }
    .themeIcon-enter-active {
      opacity: 1;
      transition: 0.2s ease-in;
    }
    .themeIcon-exit {
      opacity: 1;
    }
    .themeIcon-exit-active {
      opacity: 0;
      transition: 0.2s ease-in;
    }
  }
`
