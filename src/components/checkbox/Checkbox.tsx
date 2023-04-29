import React from "react"
import styles from './style.module.css'

interface IProps {
    title?: string
    onChange?: any
    label: any
    value: any
    checked: boolean
}

export const Checkbox: React.FC<IProps> = ({ value, title, onChange, label }) => {
    return (
        <label className={styles.block}>
            <input  checked={value} className={styles.checkbox} onChange={onChange} type="checkbox"/>
            <div className={styles.label}>
                {label}
            </div>
        </label>
    )
}
