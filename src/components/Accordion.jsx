import { useState } from "react";
import "../App.css";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

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
  const [open, setOpen] = useState(null);

  return (
    <div className="accordion">
      {data.map((item) => (
        <AccordionItem
          key={item.id}
          item={item}
          setOpen={setOpen}
          open={open}
        />
      ))}
    </div>
  );
}

export default Accordion;

function AccordionItem({ item, setOpen, open }) {
  const isOpen = item.id === open;

  return (
    <div className={`accordion-item ${isOpen ? "accordion__expanded" : ""}`}>
      <div
        className="accordion-item__header"
        onClick={() => setOpen(item.id === open ? null : item.id)}
      >
        <div> {item.title}</div>
        <ChevronDownIcon className="accordion-item__chevron" />
      </div>
      <div className="accordion-item__content">{item.content}</div>
    </div>
  );
}
