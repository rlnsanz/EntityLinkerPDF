import React from 'react';

function EntityList({ entities, onSelect }) {
  if (!entities || entities.length === 0) {
    return <p>No entities found in this document.</p>;
  }

  return (
    <div className="entity-list">
      <h2>Named Entities</h2>
      <ul>
        {entities.map((entity, index) => (
          <li key={index} onClick={() => onSelect(entity)}>
            {entity.text} ({entity.type})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EntityList;

