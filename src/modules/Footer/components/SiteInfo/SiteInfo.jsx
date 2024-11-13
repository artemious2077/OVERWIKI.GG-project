import styles from './SiteInfo.module.scss'

export const SiteInfo = () => {
  return (
    <section className={styles.aboutWiki}>
      <h3>OVERWIKI.GG</h3>
      <span className={styles.aboutWikiInfoText}>
        OVERWIKI.GG is not endorsed by any of the companies listed above.
        OVERWIKI.GG improved Wikipedia without water and advertising for games
        such as Overwatch, Valorant, Borderlands, W.O.T. © OVERWIKI.GG 2024, ~by
        artem~
      </span>
    </section>
  )
}
