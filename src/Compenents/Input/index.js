import clsx from 'clsx'
import { useContext, useRef } from 'react'
import { appContex } from '../../App'
import styles from './input.module.scss'
import {setInputTitle, setInputAmount,addTrack} from '../../Reducer/action'


function Input({dispatch})
{
    const inputRef = useRef()
    const context = useContext(appContex)
    return (
        <div className={clsx(styles.inputWrap)}>
            <h4>
                Add new transaction
            </h4>
            <label htmlFor='nameInput'>Text</label>
            <input 
                ref={inputRef}
                value={context.setInputTitle}
                id='nameInput'
                placeholder="Transaction title"
                onChange={(e)=>dispatch(setInputTitle(e.target.value))}
                />
            <label htmlFor='amountInput'>Amount</label>
            <input 
                value={context.setInputAmount}
                id='amountInput'
                placeholder="0"
                onChange={(e)=>dispatch(setInputAmount(e.target.value))}
                />
            {context.isValid?<span
                    style={{color:'red',fontSize:'0.8rem',position:'relative',bottom:'10px'}}
                >Invalid character or Spare Number not enough</span>:""}
            <button onClick={()=>{dispatch(addTrack());inputRef.current.focus()}}>Add transaction</button>
            
        </div>
    )
}

export default Input
