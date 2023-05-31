import styled from 'styled-components'

const Header = styled.header`
	color: ${({ theme }) => theme.colors.text};
	background-color: ${({ theme }) => theme.colors.header};
	padding: 20px;
	text-align: center;
	font-weight: bold;
`

export { Header }
