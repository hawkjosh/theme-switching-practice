import { useEffect, useState } from 'react'

import { ThemeProvider } from 'styled-components'
import {
	light,
	dark,
	blue,
	green,
	brown,
	pink,
} from './components/styles/Theme.styled.jsx'
import { GlobalStyles } from './components/styles/Global.jsx'
import { Header } from './components/styles/Header.styled.jsx'
import { Footer } from './components/styles/Footer.styled.jsx'
import { Quotes } from './components/Quotes.jsx'
import {
	ThemeContainer,
	ThemeButton,
} from './components/styles/ThemeSwitching.styled.jsx'

export const App = () => {
	const [selectedTheme, setSelectedTheme] = useState(light)

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

	const invertedSelectedTheme = ({ colors }) => ({
		colors: {
			background: colors.footer,
			footer: colors.background,
		},
	})

	return (
		<ThemeProvider theme={selectedTheme}>
			<div className='App'>
				<GlobalStyles />
				<Header>Game of Thrones Quotes</Header>

				<ThemeContainer>
					<span>Themes: </span>
					<ThemeButton
						className={`light ${selectedTheme === light ? 'active' : ''}`}
						onClick={() => handleThemeChange(light)}></ThemeButton>
					<ThemeButton
						className={`dark ${selectedTheme === dark ? 'active' : ''}`}
						onClick={() => handleThemeChange(dark)}></ThemeButton>
					<ThemeButton
						className={`blue ${selectedTheme === blue ? 'active' : ''}`}
						onClick={() => handleThemeChange(blue)}></ThemeButton>
					<ThemeButton
						className={`green ${selectedTheme === green ? 'active' : ''}`}
						onClick={() => handleThemeChange(green)}></ThemeButton>
					<ThemeButton
						className={`brown ${selectedTheme === brown ? 'active' : ''}`}
						onClick={() => handleThemeChange(brown)}></ThemeButton>
					<ThemeButton
						className={`pink ${selectedTheme === pink ? 'active' : ''}`}
						onClick={() => handleThemeChange(pink)}></ThemeButton>{' '}
				</ThemeContainer>

				<ThemeProvider theme={pink}>
					<Quotes />
				</ThemeProvider>

				<Footer
					// theme={{
					// 	colors: {
					// 		background: 'hsl(37, 83%, 54%)',
					// 		footer: 'hsl(39, 50%, 20%)',
					// 	},
					// }}
					>
					<p>
						Awesome content created by{' '}
						<a href='https://www.hawkjosh.com/'>hawkjosh</a>
					</p>
				</Footer>
				<ThemeProvider theme={invertedSelectedTheme}>
					<Footer>
						<p>
							Awesome content created by{' '}
							<a href='https://www.hawkjosh.com/'>hawkjosh</a>
						</p>
					</Footer>
				</ThemeProvider>
			</div>
		</ThemeProvider>
	)
}
