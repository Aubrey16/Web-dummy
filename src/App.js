import React, { useState } from 'react';
import './App.css';

function App() {
  const [image, setImage] = useState(null);
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!image) return;
    setLoading(true);
    
    try {
      // Simulate upload with FileReader for demo
      const reader = new FileReader();
      reader.onload = (e) => {
        const imageUrl = e.target.result;
        setUrl(imageUrl);
        setLoading(false);
      };
      reader.readAsDataURL(image);
    } catch (err) {
      alert('Upload failed');
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <h1>Upload Gambar</h1>
      <input type="file" accept="image/*" onChange={handleChange} />
      <button onClick={handleUpload} disabled={loading}>
        {loading ? 'Uploading...' : 'Upload'}
      </button>
      {url && (
        <div>
          <p>Gambar berhasil di-upload!</p>
          <p>Link gambar: <strong>data:image/[type];base64,...</strong></p>
          <div><img src={url} alt="Uploaded" style={{maxWidth: '300px', marginTop: '10px', border: '2px solid white', borderRadius: '10px'}} /></div>
        </div>
      )}
    </div>
  );
}

export default App;
