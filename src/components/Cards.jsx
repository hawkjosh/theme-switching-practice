import styled from 'styled-components'

const characters = [
	{
		name: `Bran Stark`,
		quote: `I was never going to be as good a lady as you. So I had to be something else. I never could have survived what you survived.`,
	},
	{
		name: `Tyrion Lannister`,
		quote: `It's not easy being drunk all the time. If it were easy, everyone would do it.`,
	},
	{
		name: `Jon Snow`,
		quote: `Sometimes there is no happy choice Sam, only one less grievous than the others.`,
	},
]

export const Cards = () => {
	return (
		<Container>
			{characters.map((character, index) => (
				<Card key={index}>
					<Title>{character.name}</Title>
					<Body>{character.quote}</Body>
				</Card>
			))}
		</Container>
	)
}

const Container = styled.section`
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

const Title = styled.div`
	color: ${({ theme }) => theme.colors.quoteTitle};
	border-bottom: 1px solid ${({ theme }) => theme.colors.quoteBorder};
	text-align: center;
	padding: 10px;
	font-weight: bold;
`

const Body = styled.div`
	color: ${({ theme }) => theme.colors.quoteBody};
	padding: 10px;
`
