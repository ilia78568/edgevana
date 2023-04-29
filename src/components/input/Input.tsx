import React, { useState } from 'react'
import PasswordSvg from '@/assets/images/signUp/password.svg'
import styles from './style.module.css'

interface IProps {
    value: string
    onChange: (e: any) => void
    label: string
    type?: string
    className?: string
    placeholder?: string
    isError?: boolean
    disableError?: () => void
}

export const Input: React.FC<IProps> = ({ disableError, isError, value, placeholder, onChange, label, type = 'text', className }) => {
    
    const [show, setShow] = useState(false)
    
    const passType = (type === 'password' && !show) ? 'password' : 'text'

    const onChangeHandler = (e: any) => {
        if(disableError) disableError()
        onChange(e.target.value)
    }

    return (
        <div className={className}>
            <label className={styles.label}>
                {label}
                <input
                 className={styles.input + " " + (isError ? styles.error : '')} 
                 value={value} 
                 placeholder={placeholder}
                 onChange={onChangeHandler} 
                 type={type === 'password' ? passType : type }
            />
                {type === 'password' && <img onClick={() => setShow(!show)} className={styles.passSvg} src={PasswordSvg.src}></img>}
            </label>
        </div>
    )
}
