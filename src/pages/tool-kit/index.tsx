import { Navbar } from '@/components/navbar';
import { DiscoverPage } from '@/components/Toolkit/DiscoverPage/DiscoverPage';

import styles from '@/styles/ToolKit.module.css'

export default function ToolKit() {

  return (
    <div className={styles.main}>
      <div className={styles.nav}>
        <Navbar />
      </div>
      <div className={styles.discover}>
        <DiscoverPage />
      </div>
    </div>
  )
}