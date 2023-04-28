import React, { useState } from "react"
import styles from './style.module.css'
import PasswordSvg from '@/assets/images/signUp/password.svg'


interface IProps {
    value: string
    onChange: (e: any) => void
    label: string
    type?: string
    className?: string
    placeholder?: string
}

export const Input: React.FC<IProps> = ({ value, placeholder, onChange, label, type = 'text', className }) => {
    
    const [show, setShow] = useState(false)
    
    return (
        <div className={className}>
            <label className={styles.label}>
                {label}
                <input
                 className={styles.input} 
                 value={value} 
                 placeholder={placeholder}
                 onChange={(e) => onChange(e.target.value)} 
                 type={(type === 'password' && !show) ? type : 'text' }
                />
                {type === 'password' && <img onClick={() => setShow(!show)} className={styles.passSvg} src={PasswordSvg.src}></img>}
            </label>
        </div>
    )
}
