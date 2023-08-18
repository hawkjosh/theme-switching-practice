import { useEffect, useState } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { GlobalStyles } from './styles/Global.jsx'
import * as theme from './styles/Theme.styled.jsx'
import { Cards } from './components/Cards.jsx'

const buttons = [
	{
		name: 'light',
		theme: theme.light,
	},
	{
		name: 'dark',
		theme: theme.dark,
	},
	{
		name: 'blue',
		theme: theme.blue,
	},
	{
		name: 'green',
		theme: theme.green,
	},
	{
		name: 'brown',
		theme: theme.brown,
	},
	{
		name: 'pink',
		theme: theme.pink,
	},
]

export const App = () => {
	const [selectedTheme, setSelectedTheme] = useState(theme.light)

	useEffect(() => {
		const currentTheme = JSON.parse(localStorage.getItem('current-theme'))
		if (currentTheme) {
			setSelectedTheme(currentTheme)
		}
	}, [])

	const handleThemeChange = (theme) => {
		setSelectedTheme(theme)
		localStorage.setItem('current-theme', JSON.stringify(theme))
	}

	// Change the background and footer properties to invert colors
	const invertedSelectedTheme = ({ colors }) => ({
		colors: {
			background: colors.background,
			footer: colors.footer,
		},
	})

	return (
		<ThemeProvider theme={selectedTheme}>
			<GlobalStyles />
			<Main>
				<Header>
					<Title>Game of Thrones Quotes</Title>
					<Container>
						{buttons.map((btn, index) => (
							<Button
								key={index}
								className={`${btn.name} ${
									selectedTheme === btn.theme ? 'active' : ''
								}`}
								onClick={() => handleThemeChange(btn.theme)}
							/>
						))}
					</Container>
				</Header>

				<ThemeProvider theme={selectedTheme}>
					<Cards />
				</ThemeProvider>

				<ThemeProvider theme={invertedSelectedTheme}>
					<Footer>
						Awesome content created by{' '}
						<a href='https://www.hawkjosh.com/'>hawkjosh</a>
					</Footer>
				</ThemeProvider>
			</Main>
		</ThemeProvider>
	)
}

const Main = styled.main`
	height: 100dvh;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`

const Header = styled.header`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 1.5rem;
	background-color: ${({ theme }) => theme.colors.header};
	padding: 20px;
`

const Title = styled.h1`
	color: ${({ theme }) => theme.colors.text};
	text-align: center;
	font-weight: bold;
`

const Container = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
	gap: 1rem;
`

const Button = styled.button`
	margin: 0 5px;
	padding: 10px;
	font-size: 0.5rem;
	border: 1px solid ${({ theme }) => theme.colors.border};
	border-radius: 5px;
	width: 30px;
	height: 30px;
	cursor: pointer;

	&:hover {
		box-shadow: 2px 2px 2px ${({ theme }) => theme.colors.border};
	}
`

const Footer = styled.footer`
	background-color: ${({ theme }) => theme.colors.footer};
	padding: 40px 20px;
	text-align: center;
	color: ${({ theme }) => theme.colors.background};

	& a {
		color: ${({ theme }) => theme.colors.background};
	}
`
