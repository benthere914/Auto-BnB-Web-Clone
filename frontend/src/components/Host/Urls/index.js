import { useState } from "react"
import { useSelector } from "react-redux";

export const Urls = ({data}) => {
    const {urls, setUrls, urlsError} = data
    const [input1, setInput1] = useState('');
    const [input2, setInput2] = useState('');
    const [input3, setInput3] = useState('');
    const [input4, setInput4] = useState('');
    const [input5, setInput5] = useState('');
    const [input6, setInput6] = useState('');
    const [input7, setInput7] = useState('');
        let tempArr = [];
        if (input1){tempArr.push(input1)}
        if (input2){tempArr.push(input2)}
        if (input3){tempArr.push(input3)}
        if (input4){tempArr.push(input4)}
        if (input5){tempArr.push(input5)}
        if (input6){tempArr.push(input6)}
        if (input7){tempArr.push(input7)}
        setUrls(tempArr.join(','))
        console.log(urls)

    return (
        <div className='addImageDiv'>
        <label>{urlsError?urlsError:'Add one image url per line'}</label>
        <input value={input1} onChange={(e) => setInput1(e.target.value)}></input>
        <input value={input2} onChange={(e) => setInput2(e.target.value)}></input>
        <input value={input3} onChange={(e) => setInput3(e.target.value)}></input>
        <input value={input4} onChange={(e) => setInput4(e.target.value)}></input>
        <input value={input5} onChange={(e) => setInput5(e.target.value)}></input>
        <input value={input6} onChange={(e) => setInput6(e.target.value)}></input>
        <input value={input7} onChange={(e) => setInput7(e.target.value)}></input>




        {/* <textarea rows={15} cols={100} value={urls} onChange={(e) => setUrls(e.target.value)}></textarea> */}
        </div>
    )
}
