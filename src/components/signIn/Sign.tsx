import styles from './Sign.module.css'

import { Input } from '../input/Input'
import { useState } from 'react'

export const Sign = () => {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [userName, setUserName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const filledOne = !!firstName && !!lastName
    const filledTwo = filledOne && !!userName && !!email
    const fillefFull = filledOne && filledTwo && !!password

    return (
        <div className={styles.signupMain}>
            <div className={styles.title}>Sign Up</div>
            <div className={styles.subtitle}>Create your account</div>
            <div className={styles.blockInputs}>
                <Input
                    label={'First Name'} 
                    onChange={setFirstName} 
                    value={firstName}
                    type='text'
                    placeholder='First Name'
                />
                <Input
                    label={'Last Name'} 
                    onChange={setLastName} 
                    value={lastName}
                    type='text'
                    className={styles.lastName}
                    placeholder='Last Name'
                />
            </div>
            <Input 
                label={'Username'} 
                onChange={setUserName} 
                value={userName} 
                className={styles.userName}
                type='text'
                placeholder='Username'
            />
            <Input 
                label={'Email'} 
                onChange={setEmail} 
                value={email} 
                className={styles.email}
                type='email'
                placeholder='Email'
            />
            <Input 
                label={'Password'} 
                onChange={setPassword} 
                value={password} 
                type='password' 
                placeholder='******'
                className={styles.password}
            />
            <div className={styles.occupancyBlock}>
                <div className={filledOne ? styles.filled : ''}></div>
                <div className={filledTwo ? styles.filled : ''}></div>
                <div className={fillefFull ? styles.filled : ''}></div>
            </div>
          </div>
    )
}