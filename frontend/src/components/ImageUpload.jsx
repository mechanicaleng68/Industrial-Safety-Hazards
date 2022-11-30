import React, {useState} from 'react';
import '../App.css';

function ImageUpload () {
  const [file, setFile] = useState ();
  console.log (file);

  function handleChange (e) {
    console.log (e.target.files);
    setFile (URL.createObjectURL (e.target.files[0]));
  }

  return (
    <div className="new-image">
      <input
        className="choose-image"
        id="imgs"
        type="file"
        display="inline-block"
        accept="image/png, image/jpeg, image/gif, image/tiff"
        onChange={handleChange}
      />
      <img
        src={file}
        style={{
          height: 150,
          width: 270,
          borderRadius: '10%',
          display: 'inline-block',
        }}
        alt="Safety hazard"
      />

    </div>
  );
}

export default ImageUpload;
