import clsx from 'clsx'
import {useContext, useMemo} from 'react'
import { appContex } from '../../App'
import styles from './available.module.scss'

function Available()
{
    
    const context = useContext(appContex)
    return useMemo(()=>
        <div>
            <h4 className={clsx(styles.heading)}>Available</h4>
            <div className={clsx(styles.spareNumber)}>${context.available}</div>
        </div>
    ,[context.available])
}

export default Available
