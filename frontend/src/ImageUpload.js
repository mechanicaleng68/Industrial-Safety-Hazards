import React, {useState} from 'react';
import './ImageUpload.css';

function ImageUpload () {
  const [file, setFile] = useState ();
  console.log (file);

  function handleChange (e) {
    console.log (e.target.files);
    setFile (URL.createObjectURL (e.target.files[0]));
  }

  return (
    <div className="main">
      <div className="upload-image">
        <label htmlFor="imgs">Add Photo</label>
      </div>
      <input
        id="imgs"
        type="file"
        accept="image/png, image/jpeg,.txt,.doc"
        onChange={handleChange}
      />
      <img
        src={file}
        style={{
          height: 150,
          width: 270,
          borderRadius: '10%',
          border: '1px orange',
        }}
        alt="Safety hazard"
      />

    </div>
  );
}
export default ImageUpload;
