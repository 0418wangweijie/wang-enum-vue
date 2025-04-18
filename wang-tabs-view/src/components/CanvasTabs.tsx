import React, { useRef, useEffect, useMemo } from 'react';

interface Tab {
    name: string;
    label: string;
}

interface CanvasTabsProps {
    tabList: Tab[];
    activeTab: string;
    onTabChange: (tabName: string) => void;
    style?: React.CSSProperties;
}

const CanvasTabs: React.FC<CanvasTabsProps> = ({ tabList, activeTab, onTabChange, style }) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const activeTabIndex = useMemo(() => tabList.findIndex(tab => tab.name === activeTab), [tabList, activeTab]);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        // Canvas dimensions
        const width = canvas.width;
        const height = 152;
        const tabWidth = width / tabList.length;
        const borderRadius = 35;
        const skewAngle = 15;

        // Clear canvas
        ctx.clearRect(0, 0, width, height);

        // Draw background
        ctx.fillStyle = '#ede6f2';
        ctx.beginPath();
        ctx.moveTo(borderRadius, 0);
        ctx.lineTo(width - borderRadius, 0);
        ctx.arcTo(width, 0, width, borderRadius, borderRadius);
        ctx.lineTo(width, height);
        ctx.lineTo(0, height);
        ctx.lineTo(0, borderRadius);
        ctx.arcTo(0, 0, borderRadius, 0, borderRadius);
        ctx.closePath();
        ctx.fill();

        // Draw active tab
        const activeX = activeTabIndex * tabWidth;
        ctx.fillStyle = '#ffffff';
        ctx.save();
        ctx.translate(activeX, 0);
        
        // Main rectangle
        ctx.beginPath();
        ctx.moveTo(borderRadius, 0);
        ctx.lineTo(tabWidth - borderRadius, 0);
        ctx.arcTo(tabWidth, 0, tabWidth, borderRadius, borderRadius);
        ctx.lineTo(tabWidth, height);
        ctx.lineTo(0, height);
        ctx.lineTo(0, borderRadius);
        ctx.arcTo(0, 0, borderRadius, 0, borderRadius);
        ctx.closePath();
        ctx.fill();

        // Left skew
        ctx.fillStyle = '#ede6f2';
        ctx.beginPath();
        ctx.moveTo(-53, height);
        ctx.lineTo(-18, 0);
        ctx.lineTo(-18 + 35 * Math.cos(skewAngle * Math.PI / 180), 35 * Math.sin(skewAngle * Math.PI / 180));
        ctx.lineTo(-53 + 35 * Math.cos(skewAngle * Math.PI / 180), height);
        ctx.closePath();
        ctx.fill();

        // Right skew
        ctx.beginPath();
        ctx.moveTo(tabWidth + 53, height);
        ctx.lineTo(tabWidth + 18, 0);
        ctx.lineTo(tabWidth + 18 - 35 * Math.cos(skewAngle * Math.PI / 180), 35 * Math.sin(skewAngle * Math.PI / 180));
        ctx.lineTo(tabWidth + 53 - 35 * Math.cos(skewAngle * Math.PI / 180), height);
        ctx.closePath();
        ctx.fill();

        ctx.restore();

        // Draw tab labels
        ctx.fillStyle = '#844ca8';
        ctx.font = '600 44px sans-serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        tabList.forEach((tab, index) => {
            const x = (index + 0.5) * tabWidth;
            const y = height / 2;
            ctx.fillText(tab.label, x, y);
        });

    }, [tabList, activeTabIndex]);

    const handleClick = (e: React.MouseEvent) => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const rect = canvas.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const tabWidth = canvas.width / tabList.length;
        const clickedIndex = Math.floor(x / tabWidth);
        onTabChange(tabList[clickedIndex].name);
    };

    return (
        <canvas
            ref={canvasRef}
            width={window.innerWidth}
            height={152}
            onClick={handleClick}
            style={{ ...style, cursor: 'pointer' }}
        />
    );
};

export default CanvasTabs; 