import React, { useState } from 'react';
import './in.css';

const TabsComponent = () => {
  const [activeTab, setActiveTab] = useState('market');

  return (
    <div className="tabs-container">
      <div className="tabs-wrapper">
        <div 
          className={`tab-item ${activeTab === 'market' ? 'active' : ''} left-tab`}
          onClick={() => setActiveTab('market')}
        >
          <h2>布局全市场</h2>
          <p>多元均衡布局，风险分散</p>
        </div>
        <div 
          className={`tab-item ${activeTab === 'industry' ? 'active' : ''} right-tab`}
          onClick={() => setActiveTab('industry')}
        >
          <h2>聚焦行业</h2>
          <p>捕捉上涨机会，但风险增加</p>
        </div>
      </div>
    </div>
  );
};

export default TabsComponent;