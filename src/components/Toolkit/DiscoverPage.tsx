import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import Discover from '@/assets/images/toolkit/discoverGray.svg'
import SearchIcon from '@/assets/images/toolkit/search.svg'

import styles from './DiscoverPage.module.css'
import { SetupGuide } from './SetupGuide/SetupGuide'
import { Button } from '../button/Button'

export const DiscoverPage: React.FC = () => {
    const pathname = usePathname();
    return (
        <div className={styles.discoverPage}>
            <div className={styles.header}>
                <div className={styles.firstBlock}>
                    <div className={styles.circle}>
                        <Image src={Discover}  alt=''></Image>
                    </div>
                    <div className={styles.name}>
                        <h3>Discover Web3</h3>
                        <p>Web3/Entrepreneur Toolkit</p>
                    </div>
                </div>
                <div className={styles.input}>
                    <div className={styles.menuMobile}>
                        <Button title='Open Menu' onClick={() => {}}></Button>
                    </div>
                    <input type='text' disabled placeholder='Search'/>
                    <Image className={styles.search} src={SearchIcon} alt=''/>
                </div>
            </div>
            <div className={styles.nav}>
                <Link className={(pathname === '/') ? styles.activeLink : '' } href={'/'}>Overview</Link>
                <Link className={(pathname === '/') ? styles.activeLink : '' } href={'/'}>Projects</Link>
                <Link className={(pathname === '/') ? styles.activeLink : '' } href={'/'}>Events</Link>
                <Link className={(pathname === '/') ? styles.activeLink : '' } href={'/'}>News</Link>
                <Link className={(pathname === '/') ? styles.activeLink : '' } href={'/'}>Developer Toolkit</Link>
                <Link className={(pathname === '/tool-kit') ? styles.activeLink : '' } href={'/tool-kit'}>Entrepreneur Toolkit</Link>
            </div>
            <div className={styles.setupBlock}>
                <SetupGuide />
            </div>
            
        </div>
    )
}