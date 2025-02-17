import React, { useEffect, useState } from 'react'
import Questions from './Questions'
import { useSelector, useDispatch } from 'react-redux'
import { MoveNextQuestion, MovePrevQuestion } from '../hooks/FetchQuestion'
import {Navigate} from 'react-router-dom'
import { PushAnswer } from '../hooks/setResult'
export default function Quiz() {

  const [check,setChecked]= useState(undefined)
  const trace = useSelector(state => state.questions.trace)
  
  const len = useSelector(state => state.questions.queue.length)
  const result = useSelector(state => state.result.result)
  const { queue } = useSelector(state => state.questions);
  const state = useSelector(state => state)

  const dispatch = useDispatch()

  // useEffect(() => {
  //   console.log(result)
  // })
  // useEffect(() => {
  //   console.log(state)
  // })
  // useEffect(() => {
  //   console.log(len)
  // })
  function onNext(){
    if(trace < queue.length){
        /** increase the trace value by one using MoveNextAction */
        dispatch(MoveNextQuestion());

        /** insert a new result in the array.  */
        if(result.length <= trace){
            dispatch(PushAnswer(check))
        }
    }
 
    /** reset the value of the checked variable */
    setChecked(undefined)
}

  function onPrev() {
    console.log('On prev Click')
    if (trace > 0) {
      dispatch(MovePrevQuestion());
    }
    if(result.length <= trace){
      dispatch(PushAnswer(check))
  }
  }
  function onChecked(check){
    setChecked(check)
  }

  /*Finish*/
  if(result.length && result.length>=len){
    return <Navigate to={'/result'} replace={true}></Navigate>
  }

  

  return (
    <div className='container'>
      <h1 className='title text-light'>Quiz Application</h1>

      <Questions onChecked={onChecked}/>

      <div className='grid'>
       {trace>0 ? <button className='btn prev' onClick={onPrev}>Prev</button>:<div></div>}
        <button className='btn next' onClick={onNext}>Next</button>
      </div>

    </div>
  )
}
