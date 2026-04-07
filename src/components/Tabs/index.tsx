import { useState, type FC, type ReactNode } from "react";

import "./style.css";

export type Tab = {
  title: string;
  content: ReactNode;
};

export type TabsProps = {
  tabs: Tab[];
};

const Tabs: FC<TabsProps> = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState<number>(0);

  return (
    <div className="tabs">
      <div className="header">
        {tabs.map((tab: Tab, index: number) => (
          <button
            key={tab.title.toLowerCase().replace(/\s+/g, "-")}
            className={index === activeTab ? "active" : ""}
            onClick={() => setActiveTab(index)}
          >
            {tab.title}
          </button>
        ))}
      </div>
      <div className="tab">{tabs[activeTab].content}</div>
    </div>
  );
};

export default Tabs;
