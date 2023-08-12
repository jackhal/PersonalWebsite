import React, { useEffect, useState, useRef, useCallback } from 'react';
import * as pdfjsLib from "pdfjs-dist/build/pdf";
import pdfjsWorker from "pdfjs-dist/build/pdf.worker.entry";

function PDFViewer({ url }) {
  const canvasRef = useRef();
  const renderTaskRef = useRef(); // to hold reference to the rendering task
  pdfjsLib.GlobalWorkerOptions.workerSrc = pdfjsWorker;

  const [pdfRef, setPdfRef] = useState();
  const [currentPage, setCurrentPage] = useState(1);

  const renderPage = useCallback((pageNum, pdf = pdfRef) => {
    if (renderTaskRef.current) {
      // Cancel the ongoing rendering task if there's one
      renderTaskRef.current.cancel();
    }

    pdf && pdf.getPage(pageNum).then(function (page) {
      const viewport = page.getViewport({ scale: 1.25 });
      const canvas = canvasRef.current;
      canvas.height = viewport.height;
      canvas.width = viewport.width;
      const renderContext = {
        canvasContext: canvas.getContext('2d'),
        viewport: viewport
      };
      renderTaskRef.current = page.render(renderContext); // store the rendering task
    });
  }, [pdfRef]);

  useEffect(() => {
    renderPage(currentPage, pdfRef);
  }, [pdfRef, currentPage, renderPage]);

  useEffect(() => {
    const loadingTask = pdfjsLib.getDocument(url);
    loadingTask.promise.then(loadedPdf => {
      setPdfRef(loadedPdf);
    }, function (reason) {
        if(reason != "Rendering cancelled, page 1"){
            console.error(reason);
        }
    });
  }, [url]);

  const nextPage = () => pdfRef && currentPage < pdfRef.numPages && setCurrentPage(currentPage + 1);

  const prevPage = () => currentPage > 1 && setCurrentPage(currentPage - 1);

  return <canvas ref={canvasRef}></canvas>;
}

export default PDFViewer;
