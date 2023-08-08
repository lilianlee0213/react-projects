import React, {useState} from 'react';
import data from './data';
import Question from './Question';
function App() {
	return (
		<main>
			<section className="container">
				<h1>Questions</h1>
				{data.map((question) => {
					return <Question key={question.id} {...question} />;
				})}
			</section>
		</main>
	);
}

export default App;
