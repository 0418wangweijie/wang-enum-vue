import {useState} from 'react';
import styles from './index.module.scss';

const TrapezoidTab = ({tabsWidth, tabList, activeTab, onTabChange, rootStyle = {}}) => {
    const tabCount = tabList?.length

    const [activeIndex, setActiveIndex] = useState(1);

    const onTabClick = (index:number) => {
        setActiveIndex(index);
    };

    return (
        <div className={styles.elevatedSlopeTabsRoot}
             style={{...rootStyle, ['--tab-count' as string]: tabCount}}>
            <div className={styles.elevatedSlopeTabs}>
                <div className={styles.tabs}>
                    {tabList?.map((item, index) => (
                        <div
                            key={index + 1}
                            onClick={() => onTabClick(index + 1)}
                            className={`${styles.tab} ${activeIndex === index + 1 ? styles?.active : ''}`}
                            style={{
                                ['--active-before-display' as string]: activeIndex === 1 ? 'none' : undefined,
                                ['--active-left-radius' as string]: activeIndex === 1 ? '8px' : undefined,
                                ['--active-after-display' as string]: activeIndex === 3 ? 'none' : undefined, 
                                ['--active-right-radius' as string]: activeIndex === 3 ? '8px' : undefined,
                            }}
                        >
                            <div className={styles.tabLabel}>{item?.label}</div>
                        </div>
                    ))}
                </div>
                <div className={styles.contentWrap} style={
                    activeIndex === 1 ? {borderTopRightRadius: rootStyle['--content-radius'] || '8px'} : activeIndex === 3 ? {borderTopLeftRadius: rootStyle['--content-radius'] || '8px'} : {}
                }></div>
            </div>
        </div>
    );
};

export default TrapezoidTab;