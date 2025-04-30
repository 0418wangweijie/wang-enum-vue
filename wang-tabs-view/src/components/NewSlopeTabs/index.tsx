import React, { useState } from 'react';
import './index.scss';

const TrapezoidTab = () => {
    const [activeIndex, setActiveIndex] = useState(1);

    const onTabClick = (index) => {
        setActiveIndex(index);
        // document.getElementById(`tab-${index}`).scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    };

    return (
        <div className="wrap">
            <div className="tabs">
                {Array.from({ length: 3 }, (_, index) => (
                    <div
                        key={index + 1}
                        onClick={() => onTabClick(index + 1)}
                        className={`tab ${activeIndex === index + 1 ? 'active' : ''}`}
                        style={activeIndex === 1 ? { '--active-before-display': 'none' } : activeIndex === 3 ? {'--active-after-display': 'none'} : {}}
                    >
                        标签{index + 1}
                    </div>
                ))}
            </div>
            <div className="content-wrap" style={
                activeIndex === 1 ? { borderTopRightRadius: '8px' } : activeIndex === 3 ? {'--active-after-display': 'none'} : {}
            }></div>
        </div>
    );
};

export default TrapezoidTab;