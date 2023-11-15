import React, { useState } from 'react';
import PDFList from './PDFList';
import PDFViewer from './PDFViewer';
import EntityList from './EntityList';
import EntityDetails from './EntityDetails';
import Header from './Header';
import Footer from './Footer';

function App() {
  const [selectedPDF, setSelectedPDF] = useState(null);
  const [selectedEntity, setSelectedEntity] = useState(null);

  const handlePDFSelect = (pdf) => {
    setSelectedPDF(pdf);
    setSelectedEntity(null);
  };

  const handleEntitySelect = (entity) => {
    setSelectedEntity(entity);
  };

  return (
    <div className="App">
      <Header />
      <div className="content">
        <PDFList onSelect={handlePDFSelect} />
        {selectedPDF && <PDFViewer pdf={selectedPDF} />}
        {selectedPDF && <EntityList pdf={selectedPDF} onSelect={handleEntitySelect} />}
        {selectedEntity && <EntityDetails entity={selectedEntity} />}
      </div>
      <Footer />
    </div>
  );
}

export default App;

