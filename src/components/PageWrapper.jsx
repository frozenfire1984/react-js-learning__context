import Page from './Page'
import {ThemeContext,FontSizeContext} from './../App'
import {useContext} from "react";

const PageWrapper = (props) => {
  const {theme} = useContext(ThemeContext);
  const fontSize = useContext(FontSizeContext);
	return (
		<div
			className="page-wrapper"
			style={{
				background: theme.background,
				color: theme.textColor,
				borderColor: theme.borderColor,
        fontSize: fontSize.value,
			}}>
			PageWrapper
			<Page/>
			<Page/>
		</div>
	)
}

export default PageWrapper;
