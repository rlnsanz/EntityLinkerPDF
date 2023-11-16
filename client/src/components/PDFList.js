import React, { useState, useEffect } from 'react';

function PDFList({ onSelect }) {
  const [pdfFiles, setPdfFiles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch PDF files from the server
  useEffect(() => {
    fetchPdfList();
  }, []);

  const fetchPdfList = () => {
    setIsLoading(true);
    fetch('/api/pdf-list')
      .then(response => response.json())
      .then(data => {
        setPdfFiles(data);
        setIsLoading(false);
      })
      .catch(error => {
        console.error('Error fetching PDF files:', error);
        setError(error);
        setIsLoading(false);
      });
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const formData = new FormData();
      formData.append('file', file, file.name); // Change 'pdf' to 'file'

      fetch('/api/upload-pdf', {
        method: 'POST',
        headers: {
          'Accept': 'application/pdf',
        },
        body: formData,
      })
        .then(response => {
          if (response.ok) {
            fetchPdfList(); // Refresh the list after upload
          } else {
            setError('Error uploading file');
          }
        })
        .catch(error => {
          console.error('Error uploading file:', error);
          setError(error);
        });
    }
  };

  return (
    <div className="pdf-list">
      <h2>Available PDFs</h2>
      <input type="file" onChange={handleFileUpload} accept="application/pdf" />
      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error loading PDFs!</p>
      ) : (
        <ul>
          {pdfFiles.map(pdf => (
            <li key={pdf} onClick={() => onSelect(pdf)}>
              {pdf}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default PDFList;
