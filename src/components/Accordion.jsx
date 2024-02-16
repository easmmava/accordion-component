import { useState } from "react";
import "../App.css";

const data = [
  {
    id: 1,
    title: "Accordion One",
    content:
      "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam id itaque repellendus ad quibusdam tempora aperiam, provident, atque quaerat, impedit ducimus quasi nam magnam iusto ab officiis? Vel, perspiciatis soluta.",
  },

  {
    id: 2,
    title: "Accordion Two",
    content:
      "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam id itaque repellendus ad quibusdam tempora aperiam, provident, atque quaerat, impedit ducimus quasi nam magnam iusto ab officiis? Vel, perspiciatis soluta.",
  },
  {
    id: 3,
    title: "Accordion Three",
    content:
      "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam id itaque repellendus ad quibusdam tempora aperiam, provident, atque quaerat, impedit ducimus quasi nam magnam iusto ab officiis? Vel, perspiciatis soluta.",
  },
];

function Accordion() {
  return (
    <div className="accordion">
      {data.map((item) => (
        <AccordionItem key={item.id} item={item} />
      ))}
    </div>
  );
}

export default Accordion;

function AccordionItem({ item }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={`accordion-item ${isOpen ? "accordion__expanded" : ""}`}>
      <div
        className="accordion-item__header"
        onClick={() => setIsOpen((is) => !is)}
      >
        {item.title}
      </div>
      <div className="accordion-item__content">{item.content}</div>
    </div>
  );
}
