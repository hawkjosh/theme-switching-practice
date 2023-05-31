import styled from 'styled-components'

const CardsContainer = styled.section`
	margin: 50px;
`

const Card = styled.div`
	background-color: ${({ theme }) => theme.colors.quoteBgc};
	border: 1px solid ${({ theme }) => theme.colors.quoteBorder};
	margin-left: auto;
	margin-right: auto;
	margin-bottom: 20px;
	border-radius: 3px;
	max-width: 450px;
`

const CardTitle = styled.div`
	color: ${({ theme }) => theme.colors.quoteTitle};
	border-bottom: 1px solid ${({ theme }) => theme.colors.quoteBorder};
	text-align: center;
	padding: 10px;
	font-weight: bold;
`

const CardBody = styled.div`
	color: ${({ theme }) => theme.colors.quoteBody};
	padding: 10px;
`

export { CardsContainer, Card, CardTitle, CardBody }
