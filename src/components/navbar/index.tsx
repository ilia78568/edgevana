import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useRouter } from 'next/router'

import { LINKS } from './Links'

import Logo from '@/assets/images/signUp/logo.svg'
import User from '@/assets/images/toolkit/user.png'
import LogoutSvg from '@/assets/images/toolkit/sign_out.svg'
import SunSvg from '@/assets/images/toolkit/sun.svg'
import MoonSvg from '@/assets/images/toolkit/moon.svg'

import styles from './style.module.css'

interface ILinkComponent {
    src: string
    title: string
    svg: string
    isActive: boolean
    pushToLink: (src: string) => void
}

export const Navbar: React.FC = () => {
    const pathname = usePathname();
    const { push } = useRouter();

    const [isSwitch, setIsSwitch] = useState(true)

    const pushToLink = (src: string) => {
        push(src)
    }

    const logout = () => {
        localStorage.removeItem('login')
        push('/sign-up');
    }

    return (
        <div className={styles.nav}>
            <div>
                <Image src={Logo} alt='' />
                <ul className={styles.ul}>
                    {LINKS.map(elem => {
                        return <LinkComponent
                            src={elem.src}
                            title={elem.title}
                            key={elem.title}
                            svg={elem.svg}
                            isActive={pathname === elem.src}
                            pushToLink={pushToLink}
                        />
                    })}
                </ul>
            </div>
            <div>
                <div className={styles.user}>
                    <div className={styles.userBlock}>
                        <Image className={styles.userImg} alt='user' src={User} />
                        <div className={styles.userName}>
                            <p>Ryan Fay</p>
                            <p>ryanfay@edgevana.com</p>
                        </div>
                    </div>
                    <Image onClick={logout} alt='log out' src={LogoutSvg} className={styles.logOut} />
                </div>
                <div className={styles.switcher}>
                    <div
                        onClick={() => setIsSwitch(true)}
                        className={styles.switcherLight + ' ' + (isSwitch ? styles.switcherActive : '')}
                    >
                        <Image alt='' src={SunSvg} />
                        <span>Light</span>
                    </div>
                    <div
                        onClick={() => setIsSwitch(false)}
                        className={styles.switcherDark + ' ' + (!isSwitch ? styles.switcherActive : '')}
                    >
                        <Image alt='' src={MoonSvg} />
                        <span>Dark</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

const LinkComponent = ({ src, title, svg, isActive, pushToLink }: ILinkComponent) => {
    return (
        <li className={styles.li + ' ' + (isActive ? styles.active : '')} onClick={() => pushToLink(src)}>
            <Image className={styles.image} alt='' src={svg} />
            <Link className={styles.title + ' ' + (isActive ? styles.activeLink : '')} href={src}>{title}</Link>
        </li>
    )
}