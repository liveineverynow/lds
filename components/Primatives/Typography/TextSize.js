import React, { useRef, useState, useEffect } from 'react'
import { resolve } from 'styled-jsx/css'

const pStyle = resolve`
p {
color: green;
}
`

export const FontDemo = ({ cls }) => {
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

export const TextSizes = () => {

    return (
        <>
        <table>
            <thead>
                <tr>
                    <td>Variable Name</td>
                    <td>Computed Font Size</td>
                    <td>Example</td>
                </tr>
            </thead>
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
            <p className={pStyle.className}>hello world</p>
                        <span className="blue">Wackadoo</span>

            {pStyle.styles}
        </>
    )
}
