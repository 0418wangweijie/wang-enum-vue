"use client"

import { useState } from "react"
import styles from "./TabNav.module.scss"

export default function TabNavigation() {
  const [activeTab, setActiveTab] = useState<"pickup" | "dropoff">("pickup")

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.tabListCnt}>
          <div className={styles.tabList}>
            {/* Pickup Tab */}
            <div
              className={`${styles.tabItem}`}
              onClick={() => setActiveTab("pickup")}
            >
              接站
            </div>

            {/* Dropoff Tab */}
            <div
              className={`${styles.tabItem}`}
              onClick={() => setActiveTab("dropoff")}
            >
              送站
            </div>

            {/* Tab Selection Indicator with Slanted Edges */}
            <div 
              className={styles.tabSelected} 
              style={{ 
                left: activeTab === "pickup" ? "0" : "50%",
                width: "50%" 
              }}
            >
              <div className={styles.left}></div>
              <div className={styles.right}></div>
            </div>
          </div>
        </div>

        <div className={styles.tabContent}>
          {activeTab === "pickup" ? (
            <div>
              {/* Content for pickup tab */}
              <p className={styles.contentText}>接站内容区域</p>
            </div>
          ) : (
            <div>
              {/* Content for dropoff tab */}
              <p className={styles.contentText}>送站内容区域</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

