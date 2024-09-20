import { BsChevronDown } from "react-icons/bs";

export const navList = [
  {
    list: "My URLs",
    href: "/",
  },
  {
    list: "Features",
    icon: (
      <>
        <BsChevronDown />
      </>
    ),
    href: "#why-us",
  },
  { list: "Pricing", href: "#pricing" },
  { list: "Analytics", href: "/" },
  { list: "FAQs", href: "#faq" },
];
