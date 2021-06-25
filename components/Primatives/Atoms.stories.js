import React, { useEffect, useState, useRef } from 'react';
import './Atoms.module.css'

// Tester Component
const ColorDemo = ({ cls }) => {
    const boxClass = `box ${cls}`
    const label = `${cls || 'none'}`
    return (
        <div className="demo">
            <span>{ label }</span>
            <div className={boxClass}></div>
        </div>
    )
}
/*
class FontDemo extends React.Component {

    constructor(props) {
        super(props)
        this.myRef = React.createRef()
        this.size = "0px"
    }

    componentDidMount() {
        // console.log(this.myRef)
        // console.log(window.getComputedStyle(this.myRef.current).fontSize)
        this.size = window.getComputedStyle(this.myRef.current).fontSize
        this.forceUpdate()
        console.log("mounting")
    }

    render() {
        const boxClass = `typo ${this.props.cls}`
        const label = `${this.props.cls || 'none'}`

        return (
            <tr className="row">
                <td>{ label }</td>
                <td>{ this.size }</td>
                <td ref={this.myRef} className={boxClass}>Sphinx of black quartz, judge my vow.</td>
            </tr>
        )
    }
}
*/
const FontDemo = ({ cls }) => {
    const myRef = useRef()
    const [size, setSize] = useState("0px")

    useEffect(() => {
        setSize(window.getComputedStyle(myRef.current).fontSize)
    })

    const boxClass = `typo ${cls}`
    const label = `${cls || 'none'}`

    return (
        <tr className="row">
            <td>{ label }</td>
            <td>{ size }</td>
            <td ref={myRef} className={boxClass}>Sphinx of black quartz, judge my vow.</td>
        </tr>
    )
}

export default {
    title: 'Primatives',
    argTypes: {
        ratio: {
            control: {
                type: "range",
                min: 1,
                max: 2,
                step: 0.01,
            },
            defaultValue: null,
        }
    }
};

export const Colors = () => (
    <>
        <ColorDemo cls="bg-black" />
        <ColorDemo cls="bg-white" />
        <ColorDemo cls="bg-brand" />
        <ColorDemo cls="bg-gray1" />
        <ColorDemo cls="bg-gray2" />
        <ColorDemo cls="bg-gray3" />
        <ColorDemo cls="bg-gray4" />
    </>
)

export const TextSizes = ({ratio}) => {

    document.documentElement.style.setProperty('--ratio', ratio);

    return (
        <table>
            <tbody>
                <FontDemo cls="fs1" />
                <FontDemo cls="fs2" />
                <FontDemo cls="fs3" />
                <FontDemo cls="fs4" />
                <FontDemo cls="fs5" />
                <FontDemo cls="fs6" />
                <FontDemo cls="fs7" />
                <FontDemo cls="fs8" />
            </tbody>
    </table>
    )
}
