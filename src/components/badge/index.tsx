import React from 'react'
import Image from 'next/image'
import styles from './style.module.css'

interface IProps {
    svg: string
    title: string
    description: string
    onClick: () => void
    className?: string
    isActive?: boolean
}

export const Badge: React.FC<IProps> = ({ svg, title, description, onClick, className, isActive }) => {
    return (
        <div className={styles.badge + ' ' + className + ' ' + (isActive ? styles.active : '')} onClick={onClick}>
            <div>
                <Image src={svg} alt="badge" />
            </div>
            <div className={styles.badgeText}>
                <div className={styles.title}>{title}</div>
                <div className={styles.descr}>{description}</div>
            </div>
        </div>
    )
}
