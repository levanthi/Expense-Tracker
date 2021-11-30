import clsx from 'clsx'
import { useContext,useMemo } from 'react'
import { appContex } from '../../App'
import styles from './history.module.scss'

function History ()
{
    const context = useContext(appContex)
    const history = context.history
    return useMemo(
        ()=><div className={clsx(styles.history)}>
        <h4>History</h4>
        <ul>
            {history.map((item,index)=>{
                return <li 
                    key={index}
                    className={clsx(Number(item[1])<0?styles.subtract:
                        styles.add)}
                    >
                    <span className={clsx(styles.name)}>{index+1}.{item[0]}</span>
                    <span className={clsx(styles.price)}>
                        {Number(item[1])<0?`-$${Math.abs(Number(item[1]))}`:`+$${Number(item[1])}`}
                    </span>
                </li>
            })}
        </ul>
    </div>
    ,[history])
}

export default History
