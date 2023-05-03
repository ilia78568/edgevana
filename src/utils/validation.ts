
import { Dispatch, SetStateAction } from "react"

interface IProp {
    firstName: boolean
    lastName: boolean
    userName: boolean
    email: boolean
    password: boolean
}

const emailRegex = /^(.+)@(.+)$/iu;

export const validateSign = (firstName: string, lastName: string, userName: string, email: string, password: string, setErrors: Dispatch<SetStateAction<IProp>>) => {
    if (!firstName) {
        setErrors(prev => ({ ...prev, firstName: true }))
        return true
    }

    if (!lastName) {
        setErrors(prev => ({ ...prev, lastName: true }))
        return true
    }
    if (!userName) {
        setErrors(prev => ({ ...prev, userName: true }))
        return true
    }
    if (!email || !emailRegex.test(email)) {
        setErrors(prev => ({ ...prev, email: true }))
        return true
    }
    if (!password || password.length < 6) {
        setErrors(prev => ({ ...prev, password: true }))
        return true
    }
}