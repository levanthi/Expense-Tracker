import { INPUT_TITLE,INPUT_AMOUNT,ADD_TRACK } from "./constants"
export const initState = {
    available:0,
    income:0,
    expense:0,
    history:[],
    setInputTitle:'',
    setInputAmount:'',
    isValid:false,
}

function Reducer(state,action)
{
    switch (action.type)
    {
        case INPUT_TITLE:
            return {
                ...state,
                setInputTitle:action.payload
            }
        case INPUT_AMOUNT:
            return{
                ...state,
                setInputAmount:action.payload
            }
        case ADD_TRACK:
            let amount = Number(state.setInputAmount)
            if(isNaN(amount)|| amount===0)
                return {
                    ...state,
                    isValid:true,
                }
            else if(amount>=0)
            {
                return {
                    ...state,
                    available:state.available+amount,
                    income:state.income+amount,
                    history:[[state.setInputTitle,state.setInputAmount],...state.history],
                    setInputTitle:'',
                    setInputAmount:'',
                    isValid:false
                }
            }
            else if(amount<0)
            {
                amount*=-1
                if(amount>state.available)
                    return {...state,isValid:true,}
                else{
                    return{
                        ...state,
                        available:state.available-amount,
                        expense:state.expense+amount,
                        history:[[state.setInputTitle,state.setInputAmount],...state.history],
                        setInputTitle:'',
                        setInputAmount:'',
                        isValid:false,
                    }
                }
            }
            return state
        
        default:throw new Error()
    }
}

export default Reducer
