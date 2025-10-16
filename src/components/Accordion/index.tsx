"use client";
import { useState, type FC, type ReactNode } from "react";
import AccordionItem from "components/Accordion/Item";

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

const Accordion: FC<AccordionProps> = ({
  allowMultipleOpen = false,
  items = [],
  title,
}) => {
  const [openIndex, setOpenIndex] = useState<number[]>([]);

  const handleToggle = (index: number) => {
    if (openIndex.includes(index)) {
      return setOpenIndex(openIndex.filter((i) => i !== index));
    }
    setOpenIndex(allowMultipleOpen ? [...openIndex, index] : [index]);
  };

  const isActive = (index: number): boolean => {
    return openIndex.includes(index);
  };

  return (
    <div className="accordion">
      {title && <h3 className="title">{title}</h3>}
      <ul className="accordion">
        {items?.map((item, index) => (
          <AccordionItem
            key={item.title.replaceAll(" ", "-")}
            active={isActive(index)}
            title={item.title}
            onToggle={() => handleToggle(index)}
          >
            {item.children}
          </AccordionItem>
        ))}
      </ul>
    </div>
  );
};

export default Accordion;
