import spacy

# Load the SpaCy model
nlp = spacy.load("en_core_web_sm")

def perform_ner(pdf_text):
    """
    Perform Named Entity Recognition on the given text from a PDF.

    Args:
        pdf_text (str): Text extracted from a PDF.

    Returns:
        list: List of named entities found in the text.
    """
    doc = nlp(pdf_text)
    entities = [(ent.text, ent.label_) for ent in doc.ents]
    return entities

