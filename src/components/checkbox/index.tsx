import React, { ReactHTMLElement } from 'react'
import styles from './style.module.css'

interface IProps {
    onChange?: () => void
    label: JSX.Element
    value: boolean
    checked: boolean
}

export const Checkbox: React.FC<IProps> = ({ value, onChange, label }) => {
    return (
        <label className={styles.block}>
            <input checked={value} className={styles.checkbox} onChange={onChange} type="checkbox"/>
            <div className={styles.label}>
                {label}
            </div>
        </label>
    )
}
