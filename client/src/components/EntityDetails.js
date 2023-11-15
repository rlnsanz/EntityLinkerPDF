import React from 'react';

function EntityDetails({ entity }) {
  if (!entity || !entity.candidates) {
    return <p>Select an entity to view details.</p>;
  }

  return (
    <div className="entity-details">
      <h2>Details for: {entity.text}</h2>
      <ul>
        {entity.candidates.map((candidate, index) => (
          <li key={index}>
            <strong>{candidate.name}</strong> (Rank: {candidate.rank})
            <div>More info: {candidate.description}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EntityDetails;

