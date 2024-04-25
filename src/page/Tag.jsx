import React, { useState } from 'react';
import '../style/tag.css';

const Tag = ({ predefinedTags }) => {
  const [selectedTag, setSelectedTag] = useState('');
  const [newTag, setNewTag] = useState('');

  const handleTagChange = (e) => {
    setSelectedTag(e.target.value);
  };

  const handleNewTagChange = (e) => {
    setNewTag(e.target.value);
  };

  return (
    <div className="tag-container">
      <label htmlFor="tag">Tag:</label>
      <div className='d-flex'>
          <input type="text" placeholder="New tag..." value={newTag} onChange={handleNewTagChange} />
        <select id="tag" value={selectedTag} onChange={handleTagChange}>
          <option value="">Select tag...</option>
          {predefinedTags.map((tag, index) => (
            <option key={index} value={tag}>{tag}</option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Tag;
