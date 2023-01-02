import { useEffect, useState } from "react";
import { createWorker } from "tesseract.js";
import CopyToClipboard from "react-copy-to-clipboard";

function Imagetotext() {

  const [ocr, setOcr] = useState("");
  const [imageData, setImageData] = useState(null);
  
  const worker = createWorker({
    logger: (m) => {
      console.log(m);
    },
  });
  
  const convertImageToText = async () => {
    if (!imageData) return;
    await worker.load();
    await worker.loadLanguage("eng+hin+mar");
    await worker.initialize("eng+hin+mar");
    const {
      data: { text },
    } = await worker.recognize(imageData);
    setOcr(text);
  };

  useEffect(() => {
    convertImageToText();
  }, [imageData]);

  function handleImageChange(e) {
    const file = e.target.files[0];
    if(!file)return;
    const reader = new FileReader();
    reader.onloadend = () => {
      const imageDataUri = reader.result;
      console.log({ imageDataUri });
      setImageData(imageDataUri);
    };
    reader.readAsDataURL(file);
  }

  return (

    <div className="container col-5 text-center">
      <div>
        <p>Choose an Image</p>
        
        <input
         type="file"
         className="form-control"
         onChange={handleImageChange}
         accept="image/*"
        />

      </div>
      <div className="display-flex mb-2">
        <img src={imageData} alt="" srcset=""  className="mt-4"/>
        <div className="mb-5 mt-2">
        {ocr}
        <CopyToClipboard text={ocr}>
              <button className="btn btn-primary mt-2">
                Copy URL 
              </button>
            </CopyToClipboard>
        </div>

      </div>
    </div>
  );
}

export default Imagetotext