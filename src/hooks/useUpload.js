import { useCallback, useState } from "react";

const useUpload = () => {
  const [image, setImage] = useState(null);

  const upload = useCallback(() => {
    const input = document.createElement("input"); // input 생성
    input.type = "file"; // input type을 file로 설정
    input.accept = "image/*"; // file은 image 형태만 accpet 하도록 설정
    input.click();
    input.onchange = () => {
      // 파일 선택창에서 [모든 파일]로 전환할 경우, image 외 다른 확장자 파일 선택이 가능
      // type에 jpg, png, gif가 들어가지 않으면 즉시 return
      const { name, type } = input.files[0];
      const extensions = ["image/jpg", "image/png", "image/gif"];
      if (!extensions.some((word) => type.toLowerCase().includes(word))) return;
      const formData = new FormData();
      formData.append("image", name);
      setImage(formData);
    };
  }, []);

  return [image, upload];
};

export default useUpload;
