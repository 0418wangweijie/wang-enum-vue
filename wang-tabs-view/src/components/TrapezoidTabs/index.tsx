"use client"

import { useState } from "react"
import styles from "./index.module.scss"

export default function TransportationTabs() {
  const tabs = [
    { id: "bus", label: "公交码" },
    { id: "metro", label: "地铁码" },
    { id: "card", label: "交通卡" },
  ]

  const [activeTab, setActiveTab] = useState("card")

  return (
    <div className={styles.container}>
      <div className={styles.tabsWrapper}>
        {tabs.map((tab) => (
          <div
            key={tab.id}
            className={`${styles.tab} ${activeTab === tab.id ? styles.active : ""}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </div>
        ))}
      </div>

      <div className={styles.content}>
        {activeTab === "card" && (
          <>
            <div className={styles.title}>
              北京市政交通一卡通 <span className={styles.arrow}>›</span>
            </div>
            <div className={styles.subtitle}>极速认证 · 线上充值 · 余额提醒</div>
            <div className={styles.cardWrapper}>
              <img src="/placeholder.svg?height=200&width=350" alt="交通卡" className={styles.cardImage} />
            </div>
            <button className={styles.button}>绑定实体卡</button>
          </>
        )}

        {activeTab === "bus" && <div className={styles.emptyState}>公交码内容</div>}

        {activeTab === "metro" && <div className={styles.emptyState}>地铁码内容</div>}
      </div>
    </div>
  )
}
