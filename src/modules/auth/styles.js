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
    padding: 2rem 0;
`

export const Flex = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 960px) {
        flex-direction: column;   
    }
`
