# EntityLinkerPDF

EntityLinkerPDF is a web application designed to recognize named entities in PDF documents and assist with entity linking. Users can upload PDFs, view them, and interact with named entities extracted from the documents.

## Features

- Upload and manage PDF documents.
- View PDF documents within the web interface.
- Extract named entities from PDFs using SpaCy.
- Link entities to a SQLite database.
- Highlight occurrences of entities within the PDF.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

### Prerequisites

- [Conda](https://docs.conda.io/projects/conda/en/latest/user-guide/install/)
- Node.js and npm (for the React front-end)

### Installing

A step-by-step series of examples that tell you how to get a development environment running.

1. Clone the repository:
   ```bash
   git clone https://github.com/rlnsanz/EntityLinkerPDF.git
   cd EntityLinkerPDF
   ```

2. **Create a Conda environment and install Python dependencies:**
   - Create a new Conda environment:
     ```bash
     conda create --name entitylinkerpdf python=3.10
     ```
   - Activate the environment:
     ```bash
     conda activate entitylinkerpdf
     ```
   - Install the required Python packages:
     ```bash
     pip install -r requirements.txt
     ```
   - Download the SpaCy English language model:
     ```bash
     python -m spacy download en_core_web_sm
     ```
 

3. Install Node modules for the React front end:
   ```bash
   cd client
   npm install
   cd ..
   ```

4. Run the application:

   - Start the Flask server:
     ```bash
     python server/app.py
     ```

   - In a new terminal, start the React front end:
     ```bash
     cd client
     npm start
     ```
