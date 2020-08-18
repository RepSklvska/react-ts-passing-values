import React, {useState} from "react";

function Bro1({refresh}: { refresh: () => void }) {
	return (
		<div>
			<p>用传统的传值方法，在父组件里面存放State，以及用于修改State里面值的函数，</p>
			<p>值传到其中一个子组件里拿来显示，函数传到另一个组件里，其实是这个组件调用父组件中的函数</p>
			<button onClick={refresh}>
				更新兄弟组件，数值+1
			</button>
		</div>
	)
}

function Bro2({value}: { value: Number }) {
	return (
		<div>
			{value === 0 ? <p>未更新</p> : <p>{value}</p>}
		</div>
	)
}

function Dad() {
	let [value, setValue] = useState(0)
	let refresh = () => setValue(value + 1)
	return (
		<div>
			<Bro1 refresh={refresh}/>
			<Bro2 value={value}/>
		</div>
	)
}

export default Dad