import sqlite3

DATABASE_FILE = "path_to_your_database.db"

def query_database(entity_name):
    """
    Query the database for entity linking data.

    Args:
        entity_name (str): The named entity to query for.

    Returns:
        list: List of related entities or information from the database.
    """
    conn = sqlite3.connect(DATABASE_FILE)
    cursor = conn.cursor()
    
    # Example query - modify according to your database schema
    cursor.execute("SELECT * FROM entity_linking WHERE name = ?", (entity_name,))
    results = cursor.fetchall()

    conn.close()
    return results

