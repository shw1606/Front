import { BsTypeH1, BsTypeH2, BsTypeH3, BsTypeBold, BsTypeItalic, BsLink, BsImageFill, BsCode } from "react-icons/bs";

import { AiOutlineFontSize } from "react-icons/ai";

import { FaQuoteRight } from "react-icons/fa";

export const LeftIcons = [
  {
    icon: BsTypeH1,
    name: "BsTypeH1",
    mode: "heading1",
  },
  {
    icon: BsTypeH2,
    name: "BsTypeH2",
    mode: "heading2",
  },
  {
    icon: BsTypeH3,
    name: "BsTypeH3",
    mode: "heading3",
  },
];

export const MiddleLeftIcons = [
  {
    icon: BsTypeBold,
    name: "BsTypeBold",
    mode: "bold",
  },
  {
    icon: BsTypeItalic,
    name: "BsTypeItalic",
    mode: "italic",
  },
  {
    icon: AiOutlineFontSize,
    name: "AiOutlineFontSize",
    mode: "strike",
  },
];

export const MiddleRightIcons = [
  {
    icon: FaQuoteRight,
    name: "FaQuoteRight",
    mode: "blockquote",
  },
  {
    icon: BsLink,
    name: "BsLink",
    mode: "link",
  },
  {
    icon: BsImageFill,
    name: "BsImageFill",
    mode: "upload",
  },
];

export const RightIcons = [
  {
    icon: BsCode,
    name: "BsCode",
    mode: "codeblock",
  },
];
