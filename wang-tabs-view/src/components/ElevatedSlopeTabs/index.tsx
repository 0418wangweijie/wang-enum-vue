import React, {useMemo, useEffect, useRef} from 'react';

import {TabsProps} from '@/env';

import styles from './index.module.scss';

const ElevatedSlopeTabs: React.FC<TabsProps> = ({tabList, activeTab, onTabChange, style, rootStyle}) => {

    const activeTabIndex = useMemo(() =>
            tabList?.findIndex((tab: { name: any; }) => tab.name === activeTab)
        , [tabList, activeTab]);
    
    const prevActiveIndexRef = useRef(activeTabIndex);
    
    // 使用useEffect跟踪activeTabIndex的变化
    useEffect(() => {
        prevActiveIndexRef.current = activeTabIndex;
    }, [activeTabIndex]);

    return (
        <div className={styles.elevatedSlopeTabsRoot} style={rootStyle}>
            <div className={styles.tabListCnt} style={style}>
                <div className={styles.tabList}>
                    {tabList.map((tab: { name: any; render: () => string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined; label: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined; }, index: React.Key | null | undefined) => (
                        <div
                            key={index}
                            className={`${styles.tabItem}`}
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
                            left: `calc(${(activeTabIndex * 100) / tabList.length}% - ${(120 / tabList.length - 100 / tabList.length) / 2}%)`,
                            width: `${120 / tabList.length}%`,
                        }}
                    >
                        <div className={styles.left}></div>
                        <div className={styles.right}></div>
                        {tabList[activeTabIndex] && (
                            <div className={styles.activeTabContent}>
                                {tabList[activeTabIndex]?.render ? 
                                    tabList[activeTabIndex].render() : 
                                    <div className={styles.tabLabel}>{tabList[activeTabIndex].label}</div>
                                }
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ElevatedSlopeTabs;

