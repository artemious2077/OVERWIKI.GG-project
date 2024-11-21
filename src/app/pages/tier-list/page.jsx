import { TierListModule } from '@/modules/TierListModule/TierListModule'
import styles from './tier-list.module.scss'

export const TierList = () => {
  return (
    <section>
      <main className={styles.tierListPage}>
        <TierListModule />
      </main>
    </section>
  )
}
export default TierList
