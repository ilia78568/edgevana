import styles from './Sign.module.css'

import { Input } from '../../input/Input'
import { useState } from 'react'
import { Checkbox } from '../../checkbox/Checkbox'
import { Button } from '../../button/Button'

const emailregex = /^(.+)@(.+)$/iu;

export const Sign = ({answ}: any) => {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [userName, setUserName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [privacy, setPrivacy] = useState(false)

    const [errors, setErrors] = useState({
        firstName: false,
        lastName: false,
        userName: false,
        email: false,
        password: false,
    })

    const filledOne = !!firstName && !!lastName
    const filledTwo = filledOne && !!userName && !!email
    const fillefFull = filledOne && filledTwo && !!password

    const submitInfo = async (e: any) => {
        e.preventDefault()

        //validation
        if(!firstName) {
            setErrors(prev => ({...prev, firstName: true}))
            return
        }

        if(!lastName) {
            setErrors(prev => ({...prev, lastName: true}))
            return
        }
        if(!email || emailregex.test(email)) {
            setErrors(prev => ({...prev, email: true}))
            return
        }
        if(!userName) {
            setErrors(prev => ({...prev, userName: true}))
            return
        }
        if(!password || password.length < 6) {
            setErrors(prev => ({...prev, password: true}))
            return
        }

        const data = {
            firstName, lastName, email, userName, password
        }

        const res = await fetch(`http://localhost:3000/api/signup`, {
            method: "POST",
            body: JSON.stringify(data)
        } );

        const answ = await res.json();


        if (answ.message) {
            alert(answ.message)

        }
    }

    return (
        <form className={styles.signupMain}>
            <div className={styles.title}>Sign Up</div>
            <div className={styles.subtitle}>Create your account</div>
            <div className={styles.blockInputs}>
                <Input
                    label={'First Name'} 
                    onChange={setFirstName} 
                    value={firstName}
                    type='text'
                    placeholder='First Name'
                    isError={errors.firstName}
                    disableError={() => setErrors(prev => ({...prev, firstName: false}))}
                />
                <Input
                    label={'Last Name'} 
                    onChange={setLastName} 
                    value={lastName}
                    type='text'
                    className={styles.lastName}
                    placeholder='Last Name'
                    isError={errors.lastName}
                    disableError={() => setErrors(prev => ({...prev, lastName: false}))}
                />
            </div>
            <Input 
                label={'Username'} 
                onChange={setUserName} 
                value={userName} 
                className={styles.userName}
                type='text'
                placeholder='Username'
                isError={errors.userName}
                disableError={() => setErrors(prev => ({...prev, userName: false}))}
            />
            <Input 
                label={'Email'} 
                onChange={setEmail} 
                value={email} 
                className={styles.email}
                type='email'
                placeholder='Email'
                isError={errors.email}
                disableError={() => setErrors(prev => ({...prev, email: false}))}
            />
            <Input 
                label={'Password'} 
                onChange={setPassword} 
                value={password} 
                type='password' 
                placeholder='******'
                className={styles.password}
                isError={errors.password}
                disableError={() => setErrors(prev => ({...prev, password: false}))}
            />
            <div className={styles.occupancyBlock}>
                <div className={filledOne ? styles.filled : ''}></div>
                <div className={filledTwo ? styles.filled : ''}></div>
                <div className={fillefFull ? styles.filled : ''}></div>
            </div>

            <Checkbox 
                value={privacy}
                onChange={() => setPrivacy(!privacy)}
                checked={privacy}
                label={<p>I certify that i am 18 years of age or older, i agree to the to Edgevana`s <a href='/'>Terms of Use</a>, and i have read the <a>Privacy Policy</a>.</p>} 
            />

            <Button className={styles.btnSign} title='Sign Up' onClick={submitInfo} type='submit' disabled={!privacy}/>

            <div className={styles.link} ><a href='/'>Sign up</a> for business account</div>
          </form>
    )
}
