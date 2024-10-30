'use client'

// Addwarp.js
import { useState } from 'react';
import { db } from '../config/firebase';
import { collection, addDoc } from 'firebase/firestore';

function Addwarp() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [link, setLink] = useState('');

  const handleAddWarp = async () => {
    try {
      await addDoc(collection(db, 'warps'), {
        title: title,
        description: description,
        link: link
      });
      alert('Document added successfully!');
      setTitle('');
      setDescription('');
      setLink('');
    } catch (e) {
      console.error('Error adding document: ', e);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="text"
        placeholder="Link"
        value={link}
        onChange={(e) => setLink(e.target.value)}
      />
      <button onClick={handleAddWarp}>Add Warp</button>
    </div>
  );
}

export default Addwarp;
