import styled from 'styled-components'

const Button = styled.button`
    color: #fff;
    text-decoration: none;
    padding: 0.9rem 2.5rem;
    background: #191847;
    text-transform: uppercase;
    border-radius: 0.3rem;
    border: none;
    cursor: pointer;
    font-size: 12pt;

    ${({ confirm }) => confirm && `
        background-color: #2291cc;
    `}

    ${({ cancel }) => cancel && `
        border: none;
        color: gray;
        background: unset;
    `}
`

export { Button }
