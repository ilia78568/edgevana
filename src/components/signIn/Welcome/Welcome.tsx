import { useState } from 'react'

import { Badge } from '../../badge/Badge'
import { Button } from '../../button/Button'

import IndividualSvg from '@/assets/images/signUp/ind.svg'
import BusinessSvg from '@/assets/images/signUp/business.svg'

import styles from './Welcome.module.css'

interface IProps {
    getStarted: () => void
}

export const Welcome: React.FC<IProps> = ({getStarted}) => {

    const [activeBadge, setActiveBadge] = useState('individual')

    return (
        <div className={styles.signupMain}>
            <div className={styles.title}>Welcome to Edgevana</div>
            <div className={styles.subtitle}>Choose your account type to get started</div>
            <Badge
                onClick={() => {setActiveBadge('individual')}} 
                svg={IndividualSvg.src}  
                title="Individual" 
                description="For individuals who want to participate, develop or build with a click of a button. "
                isActive={activeBadge === 'individual'}
            />
            <Badge 
                onClick={() => {setActiveBadge('bussiness')}}
                svg={BusinessSvg.src} 
                title="Business" 
                description="For companies and institutions who need access to our suite of tools and real-time insights to manage and run their operations. "
                className={styles.secondBadge}
                isActive={activeBadge === 'bussiness'}
            />
            <Button title="Get Started" onClick={getStarted}/>
            <p className={styles.linkText}>Already have an account? <a className={styles.link} href="/"> Sign in</a></p>
          </div>
    )
}