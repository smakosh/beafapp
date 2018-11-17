import styled from 'styled-components'

export const Center = styled.div`
  text-align: center;
`

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

export const Flex = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const Item = styled.div`
    width: 100%;
    max-width: 48%;
`
