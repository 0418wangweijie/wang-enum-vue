import React, { useState } from 'react';
import styles from './index.module.scss';

const TrapezoidTab = ({ rootStyle,tabList}) => {
    const [activeIndex, setActiveIndex] = useState(1);
    const tabCount = tabList?.length
    const tabWidth = 375 / tabCount;

    return (
        <div className={styles.elevatedSlopeTabsRoot} style={{...rootStyle,'--tab-count': tabCount}}>
            <div className={styles.elevatedSlopeTabs}>
                <div className={styles.tabs}>
                    {tabList?.map((item, index) => (
                        <div
                            key={index + 1}
                            onClick={() => setActiveIndex(index + 1)}
                            className={styles.tab}
                        >
                            <div  className={styles.tabLabel}>{item.label}{index + 1}</div>
                        </div>
                    ))}
                    <div
                        className={styles.activeMarker}
                        style={{
                            transform: `translateX(${tabWidth * (activeIndex - 1)}px)`,
                            '--active-before-display': activeIndex === 1 ? 'none': 'flex',
                            '--active-after-display': activeIndex === 3 ? 'none' : 'flex',
                            borderTopRightRadius: activeIndex === 3 ? '8px' : '0',
                            borderTopLeftRadius: activeIndex === 1 ? '8px' : '0',

                    }}
                    ></div>
                </div>
                <div className={styles.contentWrap}></div>
            </div>
        </div>
    );
};

export default TrapezoidTab;