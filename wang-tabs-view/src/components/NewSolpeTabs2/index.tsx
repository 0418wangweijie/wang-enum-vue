import React, { useState } from 'react';
import './index.scss';

const TrapezoidTab = () => {
    const [activeIndex, setActiveIndex] = useState(1);
    const tabWidth = 375 / 3;

    return (
        <div className="wrap2">
            <div className="tabs">
                {Array.from({ length: 3 }, (_, index) => (
                    <div
                        key={index + 1}
                        onClick={() => setActiveIndex(index + 1)}
                        className="tab"
                    >
                        标签{index + 1}
                    </div>
                ))}
                <div
                    className="active-marker"
                    style={{
                        transform: `translateX(${tabWidth * (activeIndex - 1)}px)`,
                    }}
                ></div>
            </div>
            <div className="content-wrap"></div>
        </div>
    );
};

export default TrapezoidTab;