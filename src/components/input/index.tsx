import React, { useState } from 'react'
import Image from 'next/image'

import PasswordSvg from '@/assets/images/signUp/password.svg'

import styles from './style.module.css'

interface IProps {
    value: string
    onChange: (e: string) => void
    label: string
    type?: string
    className?: string
    placeholder?: string
    isError?: boolean
    disableError?: () => void
}

export const Input: React.FC<IProps> = (props) => {
    
    const {disableError, isError, value, placeholder, onChange, label, type = 'text', className} = props
    
    const [show, setShow] = useState(false)
    
    const passType = (type === 'password' && !show) ? 'password' : 'text'

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
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
                {type === 'password' && 
                    <Image 
                        onClick={() => setShow(!show)} 
                        className={styles.passSvg} 
                        src={PasswordSvg}
                        alt='search icon'
                    ></Image>}
            </label>
        </div>
    )
}
