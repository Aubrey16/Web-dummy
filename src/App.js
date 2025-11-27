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
    const formData = new FormData();
    formData.append('image', image);
    try {
      const res = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });
      const data = await res.json();
      setUrl(data.url);
    } catch (err) {
      alert('Upload failed');
    }
    setLoading(false);
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
          <p>Link gambar:</p>
          <a href={url} target="_blank" rel="noopener noreferrer">{url}</a>
          <div><img src={url} alt="Uploaded" style={{maxWidth: '300px', marginTop: '10px'}} /></div>
        </div>
      )}
    </div>
  );
}

export default App;
