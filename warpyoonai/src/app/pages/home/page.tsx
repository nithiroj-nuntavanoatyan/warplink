'use client'
// import React, { useState, useEffect } from 'react';
import Link from 'next/link';
// import { query, collection, onSnapshot, orderBy } from "firebase/firestore";
// import { db } from "@/config/firebase";
// import Warpcard from "@/components/Warpcard";

function Home() {
//   const [warps, setWarps] = useState([]);
//   const [isLoading, setIsLoading] = useState(true); // Start loading

//   useEffect(() => {
//     const unSubscribe = onSnapshot(
//       query(collection(db, "warps"), orderBy("dateCreatedAt", "desc")),
//       (snapshot) => {
//         setIsLoading(true);
//         const retrievedWarps = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
//         setWarps(retrievedWarps);
//         setIsLoading(false);
//       },
//       (error) => {
//         console.error("Error fetching warps:", error);
//         setIsLoading(false); // Ensure loading is stopped on error
//       }
//     );

//     // Cleanup function to unsubscribe from the listener
//     return () => unSubscribe();
//   }, []); // Empty dependency array to run only once

  return (
    <div>
      <div className=''>
        <div className='items-center justify-items-center m-4'>
          <div className="headername flex justify-center items-center text-3xl md:text-6xl font-black text-[#e9f6f4] uppercase">
          วาป
          <ul>
            <li>
              <Link href="/pages/addwarp">
                <span className='flex items-center p-2 xl:p-3'>
                  <button className="bg-[#9cbbe2] rounded-2xl border-4 border-solid flex items-center justify-center bg-foreground text-background gap-2 text-2xl p-2">
                    เพิ่มวาป
                  </button>
                </span>
              </Link>
            </li>
          </ul>
        </div>
        </div>
        

        {/* Warppart */}
        {/* <div>
          <div className="cardcategory place-items-center grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {isLoading ? (
              <h1 className="loadingtext text-3xl font-semibold text-center items-center">กำลังโหลดข้อมูล</h1>
            ) : (
              warps.map((warp) => (
                <Warpcard key={warp.id} warpdata={warp} warpId={warp.id} />
              ))
            )}
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default Home;