from flask import Flask, request, jsonify, send_from_directory
import os

# Import other necessary modules and functions
from ner import perform_ner
from database import query_database
from pdf_handler import extract_text_from_pdf

app = Flask(__name__)

# Set your configuration directly here
# app.config['SECRET_KEY'] = 'your_secret_key'
app.config['UPLOAD_FOLDER'] = 'pdfs/'
app.config['ALLOWED_EXTENSIONS'] = {'pdf'}
app.config['DEBUG'] = True  # Set to False in production

PDF_DIRECTORY = '../pdfs'  # Adjust the path as per your project structure

@app.route('/api/pdf-list', methods=['GET'])
def list_pdfs():
    """
    Endpoint to list available PDFs in the specified directory.
    """
    pdf_files = [f for f in os.listdir(PDF_DIRECTORY) if f.endswith('.pdf')]
    return jsonify(pdf_files)

# Serve the React App
@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def serve(path):
    assert app.static_folder is not None
    if path != "" and os.path.exists(app.static_folder + '/' + path):
        return send_from_directory(app.static_folder, path)
    else:
        return send_from_directory(app.static_folder, 'index.html')

# Endpoint to upload PDFs
@app.route('/upload', methods=['POST'])
def upload_pdf():
    # Handle file upload and save to 'pdfs' directory
    file = request.files['file']
    assert file.filename is not None
    save_path = os.path.join('pdfs', file.filename)
    file.save(save_path)
    return jsonify({'message': 'File uploaded successfully!'})

# Endpoint to perform NER on a selected PDF
@app.route('/ner', methods=['POST'])
def handle_ner_request():
    """
    Endpoint to perform NER on a selected PDF.
    """
    # Extract the text from the PDF
    assert request.json is not None
    pdf_path = request.json['pdf_path']
    pdf_text = extract_text_from_pdf(pdf_path)

    # Perform NER on the extracted text
    entities = perform_ner(pdf_text)
    return jsonify(entities)

# Endpoint to get entity linking data from the database
@app.route('/entity-linking', methods=['POST'])
def get_entity_linking():
    # Get entity linking data from the database
    assert request.json is not None
    entity_name = request.json['entity_name']
    linking_data = query_database(entity_name)
    return jsonify(linking_data)

if __name__ == '__main__':
    app.run(debug=True)

