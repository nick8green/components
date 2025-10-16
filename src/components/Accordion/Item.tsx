"use client";
import {
  useLayoutEffect,
  useRef,
  useState,
  type FC,
  type PropsWithChildren,
} from "react";

import "./style.css";

const AccordionItem: FC<
  PropsWithChildren<{ active?: boolean; onToggle?: () => void; title: string }>
> = ({ active, onToggle, title, children }) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState<number | "auto">(0);

  useLayoutEffect(() => {
    if (!contentRef.current) return;

    if (active) {
      contentRef.current.style.height = "auto";
      const scrollHeight = contentRef.current.scrollHeight;
      setHeight(scrollHeight);
    } else {
      setHeight(0);
    }
  }, [active, children]);

  return (
    <li className={`accordion-item ${active ? "active" : ""}`}>
      <button className="item-title" onClick={onToggle}>
        {title} <span className="control">{active ? "-" : "+"}</span>
      </button>
      <div className="item-content" ref={contentRef} style={{ height }}>
        {children}
      </div>
    </li>
  );
};

export default AccordionItem;
