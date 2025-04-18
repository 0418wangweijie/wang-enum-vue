import React, {useMemo} from 'react';

import {TabsProps} from '@/env';

import styles from './index.module.scss';

const ElevatedSlopeTabs: React.FC<TabsProps> = ({tabList, activeTab, onTabChange, style, rootStyle}) => {

    const activeTabIndex = useMemo(() =>
            tabList?.findIndex((tab: { name: any; }) => tab.name === activeTab)
        , [tabList, activeTab]);

    return (
        <div className={styles.elevatedSlopeTabsRoot} style={rootStyle}>
            <div className={styles.tabListCnt} style={style}>
                <div className={styles.tabList}>
                    {tabList.map((tab: { name: any; render: () => string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined; label: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined; }, index: React.Key | null | undefined) => (
                        <div
                            key={index}
                            className={`${styles.tabItem} ${activeTabIndex === index ? styles.selectTabItem : ''}`}
                            onClick={() => onTabChange(tab.name)}
                            style={{
                                width: `${(100 - (120 / tabList.length) ) / (tabList.length - 1)}%`,
                            }}
                        >
                            {tab?.render ? tab.render() : <div className={styles.tabLabel}>{tab.label}</div>}
                        </div>
                    ))}
                    <div
                        className={styles.tabSelected}
                        style={{
                            left: `calc(${(activeTabIndex * 100) / tabList.length}% - ${(120 / tabList.length - 100 / tabList.length) / 2}%)`, // 调整 left 计算方式
                            width: `${120 / tabList.length}%`, // 增加宽度比例
                        }}
                    >
                        <div className={styles.left}></div>
                        <div className={styles.right}></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ElevatedSlopeTabs;

