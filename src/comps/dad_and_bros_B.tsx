import React, {createContext, useContext, useState} from "react";

function Bro1() {
	let {refresh} = useContext(MyContext)
	return (
		<div>
			<button onClick={refresh}>
				更新兄弟组件，数值+1
			</button>
		</div>
	)
}

function Bro2() {
	let {value} = useContext(MyContext)
	return (
		<div>
			{value === 0 ? <p>未更新</p> : <p>{value}</p>}
		</div>
	)
}

let MyContext = createContext({
	value: -1,
	refresh: () => {
	}
})

function DadB() {
	let [value, setValue] = useState(0)
	let refresh = () => setValue(value + 1)
	return (
		<MyContext.Provider value={{value: value, refresh: refresh}}>
			<div>
				<p>用Hooks的Context功能，先创建一个Context，定义Context里面存放的值的类型，</p>
				<p>在父组件里存放的State里的值和修改值的函数绑定到Context里面对应上，</p>
				<p>Context套在两个子组件外面，子组件从Context里面获得值和函数</p>
				<Bro1/>
				<Bro2/>
			</div>
		</MyContext.Provider>
	)
}

export default DadB