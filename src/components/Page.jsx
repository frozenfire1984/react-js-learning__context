import {useContext} from 'react'
//import {ThemeContext} from './../contexts/theme-context'
import {ThemeContext,FontSizeContext} from './../App'

const Page = () => {
	const {theme, toggle} = useContext(ThemeContext);
  const fontSize = useContext(FontSizeContext);


	return (
		<div
			style={{
				background: theme.background,
				color: theme.textColor,
				borderColor: theme.borderColor,
				fontSize: fontSize.value,
			}}>
			<div className="page" style={{background: theme.background, color: theme.textColor, borderColor: theme.borderColor}}>Page</div>
			<button type="button" onClick={toggle}>Toggle</button>
		</div>
	)
}

export default Page;
