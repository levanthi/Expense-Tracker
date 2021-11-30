import clsx from 'clsx'
import { useContext, useMemo } from 'react'
import { appContex } from '../../App'
import styles from './expense.module.scss'

function Expense()
{
    const context = useContext(appContex)
    const income = context.income
    const expense = context.expense
    return useMemo(
        ()=><div className={clsx(styles.wrapper)}>
        <div className={clsx(styles.expenseWrap,styles.ex1)}>
            <p>Income</p>
            <div className={clsx(styles.total)}>
                ${income}
            </div>
        </div>
        <div className={clsx(styles.expenseWrap,styles.ex2)}>
            <p>Expense</p>
            <div className={clsx(styles.expense)}>
                ${expense}
            </div>
        </div>
    </div>
    ,[income,expense])
}

export default Expense
