import React, { use, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useFetchQuestion } from '../hooks/FetchQuestion'
import { updateResult } from '../hooks/setResult'
export default function Questions({onChecked}) {

    const [checked, setChecked] = useState(undefined)
    const result = useSelector(state => state.result.result);
    const { trace } = useSelector(state => state.questions);
    const [{ isLoading, apiData, serverError }] = useFetchQuestion()
    const dispatch= useDispatch()

    const questions = useSelector(state => state.questions.queue[state.questions.trace])
    useEffect(() => {
        dispatch(updateResult({ trace, checked}))
    }, [checked])

    function onSelect(i){
        onChecked(i)
        setChecked(i)
        dispatch(updateResult({ trace, checked}))
    }

    // if (isLoading) return <h3 className='text-light'>isLoading</h3>
    // if (serverError) return <h3 className='text-light'>{serverError || "Unknown Error"}</h3>
    return (
        <div className='questions'>
            <h2 className='text-light'>{questions?.question}</h2>
            <ul key={questions?.id}>
                {
                    questions?.options.map((q, i) => (
                        <li key={i}>
                            <input
                                type="radio"
                                value={false}
                                name='options'
                                id={`q${i}`}
                                onChange={()=>onSelect(i)}
                            />
                            <label className='text-primary' htmlFor={`q${i}`}>{q}</label>
                            <div className={`check ${result[trace]==i?'checked':''}`}></div>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}
