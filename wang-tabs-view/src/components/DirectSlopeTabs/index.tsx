import React, { useMemo } from 'react';
import { TabsProps } from '@/env'; // 假设 TabsProps 类型定义在 @/env
import styles from './index.module.scss';

const DirectSlopeTabs: React.FC<TabsProps> = ({ tabList, activeTab, onTabChange, style, rootStyle }) => {
    const activeTabIndex = useMemo(() =>
        tabList?.findIndex((tab) => tab.name === activeTab) ?? -1 // 添加空值检查和默认值
    , [tabList, activeTab]);

    // 检查 tabList 是否有效
    if (!tabList || tabList.length === 0) {
        return null; // 或者返回一些提示信息
    }

    return (
        <div className={styles.directSlopeTabsRoot} style={rootStyle}>
            <div className={styles.tabListCnt} style={style}>
                <div className={styles.tabList}>
                    {tabList.map((tab, index) => (
                        <div
                            key={tab.name} // 使用 tab.name 作为 key 通常更稳定
                            className={`${styles.tabItem} ${activeTabIndex === index ? styles.selectTabItem : ''}`}
                            onClick={() => onTabChange(tab.name)}
                            // 注意：这里的宽度计算可能需要根据新的设计调整，
                            // 因为不再有固定宽度的 tabSelected 元素。
                            // 暂时先平均分配宽度。
                            style={{
                                flexBasis: `${100 / tabList.length}%`, // 平均分配基础宽度
                            }}
                        >
                            {/* 确保 tabLabel 在伪元素之上 */}
                            <div className={styles.tabLabel}>
                                {tab?.render ? tab.render() : tab.label}
                            </div>
                        </div>
                    ))}
                    {/* 不再需要独立的 tabSelected 元素 */}
                </div>
            </div>
        </div>
    );
};

export default DirectSlopeTabs;