import React from 'react';
import Dad from "./comps/dad_and_bros";
import DadB from "./comps/dad_and_bros_B";

function App() {
	return (
		<div>
			<h1>Passing values with Hooks in TS</h1>
			<hr/>
			<Dad/>
			<hr/>
			<DadB/>
		</div>
	);
}

export default App;
