"use client";
import { useRef, useState, type FC, type PropsWithChildren, type ReactNode } from "react";

import "./style.css";

type Item = {
  title: string;
  children: ReactNode;
};

type AccordionProps = {
    allowMultipleOpen?: boolean;
  title?: string;
  items?: Item[];
};

const Accordion: FC<AccordionProps> = ({ allowMultipleOpen = false, items, title }) => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const handleToggle = (index: number) => {
        console.log("Accordion toggle")
        if (openIndex === index) {
            return setOpenIndex(null);
        }
        setOpenIndex(openIndex === index ? null : index);
    };

    return <div className="accordion">
        {title && <h3 className="title">{title}</h3>}
        <ul className="accordion">
        {items?.map((item, index) => (
            <AccordionItem key={item.title.replaceAll(" ", "-")} active={allowMultipleOpen ? undefined : openIndex === index} title={item.title} onToggle={allowMultipleOpen ? undefined : () => handleToggle(index)}>{item.children}</AccordionItem>
        ))}
        </ul>
    </div>;
};

const AccordionItem: FC<PropsWithChildren<{ active?: boolean; onToggle?: () => void; title: string }>> = ({ active = false, onToggle, title, children }) => {
    const contentRef = useRef<HTMLDivElement>(null);
    const [isOpen, setIsOpen] = useState(active);

    const handleToggle = () => {
        if (onToggle) {
            console.log(1);
            return onToggle();
        }
        console.log(2);
        setIsOpen(!isOpen);
    };

    return (
        <li className={`accordion-item ${active ? "active" : ""}`}>
            <button className="item-title" onClick={handleToggle}>
                {title} <span className="control">{isOpen ? "-" : "+"}</span>
            </button>
            <div className="item-content" ref={contentRef} style={{ height: isOpen ? contentRef.current?.scrollHeight : 0 }}>{children}</div>
        </li>
    );
};

export default Accordion;
