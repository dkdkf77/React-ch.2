import React from "react";
import _ from "lodash";

const Search = () => {
	const [text, setText] = React.useState("");

	const debounce = _.debounce((e) => {
		console.log("debounce :::", e.target.value);
	}, 1000);

	const throttle = _.throttle((e) => {
		console.log("debounce :::", e.target.value);
	}, 1000);

	const KeyPress = React.useCallback(debounce, []);

	const onChange = (e) => {
		setText(e.target.value);
		KeyPress(e);
	}

	
	return (
		<div>
			<input type = "text" onChange = {onChange} value = {text}/>
		</div>
	)
}

export default Search