import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import ResultTable from './ResultTable'
import '../styles/Result.css'
import { useDispatch, useSelector } from 'react-redux';
import { attempts_number,earnPoints_Number,flagResult } from '../helper/helper';
import { usePublishResult } from '../hooks/setResult';
export default function Result() {
    const dispatch = useDispatch()
    const {questions:{queue,answers},result:{result,userId}}= useSelector(state=>state)
    // useEffect(()=>{
    //     console.log(flag)
    // })
    const totalPoints= queue.length *10;
    const attempts = attempts_number(result)
    const earnPoints = earnPoints_Number(result,answers,10)
    const flag =flagResult(totalPoints,earnPoints)

    usePublishResult({
        result,
        username:userId,
        attempts,
        points:earnPoints,
        achived:flag?"Passed":"Failed"
    });



    function onRestart() {
        console.log('onRestart')
        dispatch(resetAllAction);
        dispatch(resetResultAction);

    }
    //console.log({result,username:userId,attempts,points:earnPoints,achived:flag?"Passed":"Failed"})
    return (
        <div className='container'>
            <h1 className='title text-light'>Quiz Application</h1>

            <div className='result flex-center'>
            <div className='flex'>
                <span>Username</span>
                <span className='bold'>{userId}</span>
            </div>
                <div className='flex'>
                <span>Total Quiz Points : </span>
                <span className='bold'>{totalPoints || 0}</span>
            </div>
            <div className='flex'>
                <span>Total Questions : </span>
                <span className='bold'>{ queue.length || 0}</span>
            </div>
                <div className='flex'>
                <span>Total Attempts : </span>
                <span className='bold'>{attempts || 0}</span>
            </div>
            <div className='flex'>
                <span>Total Earn Points : </span>
                <span className='bold'>{earnPoints || 0}</span>
            </div>
                <div className='flex'>
                <span>Quiz Result</span>
                <span style={{ color : `${flag ? "#2aff95" : "#ff2a66" }` }} className='bold'>{flag ? "Passed" : "Failed"}</span>
            </div>
            </div>

            <div className="start">
                <Link className='btn' to={'/'} onClick={onRestart}>Restart</Link>
            </div>

            <div className="container">
                <ResultTable />
            </div>

        </div>
    )
}
