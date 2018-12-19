import styled from 'styled-components'

export const Card = styled.div`
    padding: 2rem;
    box-shadow: 3px 0px 20px 0 rgba(0, 0, 0, 0.1);
    align-self: center;
    width: 90%;
    margin: 0 auto;

    ${({ register }) => register && `
        width: 60%;
    `}
`

export const Center = styled.div`
    text-align: center;
`

export const Wrapper = styled.div`
    padding: 4rem 0;
`

export const Show = styled.span`
    border: none;
    cursor: pointer;
    color: rgb(43, 133, 255);
    position: absolute;
    right: 0;
`
