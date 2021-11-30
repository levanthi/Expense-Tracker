import {INPUT_TITLE,INPUT_AMOUNT,ADD_TRACK} from './constants'
export function setInputTitle(value)
{
    return {
        type:INPUT_TITLE,
        payload:value
    }
}
export function setInputAmount(value)
{
    return {
        type:INPUT_AMOUNT,
        payload:value
    }
}

export function addTrack()
{
    return {
        type:ADD_TRACK,
    }
}
