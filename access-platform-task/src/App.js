import React from 'react';
import PageWrapper from 'components/page-wrapper'
import MainPage from 'pages/main/entry';

class App extends React.Component {
	render() {
		return (
			<PageWrapper>
				<MainPage />
			</PageWrapper>
		)
	}
}

export default App;
