'use client'

import React, { useState } from 'react';
import { db } from '@/config/firebase';
import { collection, addDoc, updateDoc } from 'firebase/firestore';
import { serverTimestamp } from 'firebase/firestore';


function Page() {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [link, setLink] = useState('');
  const [description, setDiscription] = useState('');

  const handleAddWarp = async () => {
    try {
      const docRef = await addDoc(collection(db, 'warps'), {
        title: String(title),
        category: String(category),
        description: String(description),
        link: String(link),
        dateCreatedAt: serverTimestamp(),
      });
      const warpnumbers = docRef.id;
      await updateDoc(docRef, {warpnumbers});
    } catch (e) {
      console.error('Error adding document: ', e);
    }
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault()
    handleAddWarp()
    setTitle("");
    setCategory("");
    setDiscription("");
    setLink("");
    alert('Document added successfully!');
  }


  return (
    <form action="addwarp" className='text-[#e9f6f4] flex justify-center text-center items-center md:' onSubmit={handleSubmit}>
      <div className='w-5/6 mx md:w-2/6 lg:w-3/4 p-4 text-lg sm:text-2xl font-semibold'>
        <div className="p-4">
        <h1 className="text-3xl sm:text-5xl font-bold mb-4">Add New Warp</h1>
        <div className="mb-2">
          <label className='name'>Title</label>
          <input className="border rounded p-2 w-full mb-2 bg-[#12171c] "
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="mb-2">
          <label className='category'>Category</label>
          <input className="border rounded p-2 w-full mb-2 bg-[#12171c] "
            type="text"
            placeholder="Category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          />
        </div>
        <div className="mb-2">
          <label className='Description'>Description</label>
          <input className="border rounded p-2 w-full mb-2 bg-[#12171c] "
            type="text"
            placeholder="Description"
            value={description}
            onChange={(e) => setDiscription(e.target.value)}
            required
          />
        </div>
        <div className="mb-2">
          <label className='Link'>Link</label>
          <input className="border rounded p-2 w-full mb-2 bg-[#12171c] "
            type="url"
            placeholder="Link"
            value={link}
            onChange={(e) => setLink(e.target.value)}
            required
          />
        </div>
        <button
          className="bg-[#9cd7ce] text-[#060f0d] p-2 rounded hover:bg-[#4b69b7]"
        >
          Add Warp
        </button>
      </div>
      </div>
    </form>
  );
}

export default Page;