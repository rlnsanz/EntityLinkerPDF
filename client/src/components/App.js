import React, { useState } from 'react';
import PDFList from './components/PDFList';
import PDFViewer from './components/PDFViewer';
import EntityList from './components/EntityList';
import EntityDetails from './components/EntityDetails';
import Header from './components/Header';
import Footer from './components/Footer';
import './styles/App.css';

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

