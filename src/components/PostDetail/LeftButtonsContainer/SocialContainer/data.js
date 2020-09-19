import { FaFacebook, FaTwitter, FaPaperclip } from "react-icons/fa";

// action
import { LOCAL_RQEUEST_ALERT } from "store/actions/commonAction";

export const socialInfo = [
  {
    animation: [48, -52],
    icon: FaFacebook,
  },
  {
    animation: [84, 0],
    icon: FaTwitter,
  },
  {
    animation: [48, 52],
    icon: FaPaperclip,
    action: {
      type: LOCAL_RQEUEST_ALERT,
      data: {
        case: "copy",
      },
    },
    click(text) {
      const tempInput = document.createElement("input");
      tempInput.type = "text";
      tempInput.value = text;
      if (!document.body) return;
      document.body.appendChild(tempInput);
      tempInput.select();
      document.execCommand("Copy");
      if (!document.body) return;
      document.body.removeChild(tempInput);
    },
  },
];
