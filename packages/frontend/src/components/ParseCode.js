import React from 'react'






const labels = ["Peanut-Free",
"Tree-Nut-Free",
"Vegan",
"Vegetarian",
"Alcohol-Cocktail",
"Alcohol-Free",
"Sugar-Conscious"]




const ParseCode = (columns, name) => {
    const header = () => `switch ${name}`
    const caseStatement = (item) => `case ${item} console.log(${header});break;`
    const profit = header() + columns.map(x => caseStatement(x))
    const defaultStatement = `default:console.log('whoa bro you done goofed up')`;

    const makeSwitch = profit + defaultStatement

    return (
        <div>{makeSwitch.toString()}</div>
    )
}

//const SwitchStatement = ParseCode(labels, 'foods')

const Test = () => <div style={{height: '6rem', backgroundColor:'red'}}>TEST</div>
export default Test