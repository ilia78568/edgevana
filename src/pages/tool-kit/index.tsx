import styles from '@/styles/ToolKit.module.css'
import { Navbar } from '@/components/navbar/Navbar';
import { DiscoverPage } from '@/components/Toolkit/DiscoverPage';

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