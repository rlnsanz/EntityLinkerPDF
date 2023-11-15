import React, { useEffect, useRef } from 'react';
import * as pdfjsLib from 'pdfjs-dist';
import pdfjsWorker from 'pdfjs-dist/build/pdf.worker.entry';

pdfjsLib.GlobalWorkerOptions.workerSrc = pdfjsWorker;

function PDFViewer({ pdf }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (pdf) {
      const canvas = canvasRef.current;
      const context = canvas.getContext('2d');

      // Load the PDF document
      const loadingTask = pdfjsLib.getDocument(pdf.url);
      loadingTask.promise.then(pdfDocument => {
        console.log(`PDF loaded: ${pdfDocument.numPages} pages`);

        // Get the first page
        pdfDocument.getPage(1).then(page => {
          console.log(`Page loaded`);

          const viewport = page.getViewport({ scale: 1.5 });
          canvas.height = viewport.height;
          canvas.width = viewport.width;

          // Render the page on the canvas
          const renderContext = {
            canvasContext: context,
            viewport: viewport,
          };
          const renderTask = page.render(renderContext);
          renderTask.promise.then(() => {
            console.log('Page rendered');
          });
        });
      }).catch(function (reason) {
        console.error('Error during PDF loading:', reason);
      });
    }
  }, [pdf]);

  return (
    <div className="pdf-viewer">
      <canvas ref={canvasRef}></canvas>
    </div>
  );
}

export default PDFViewer;

