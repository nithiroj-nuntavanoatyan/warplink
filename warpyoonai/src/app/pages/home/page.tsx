'use client'
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { query, collection, onSnapshot, orderBy } from "firebase/firestore";
import { db } from "@/config/firebase";
import Warpcard from "@/components/Warpcard";

// กำหนดอินเทอร์เฟซสำหรับ Warp Data
interface WarpData {
  id: string;
  title: string;
  link: string;
  category: string;
  description: string;
  dateCreatedAt: string; // วันที่สร้าง
}

function Home() {
  const [warps, setWarps] = useState<WarpData[]>([]); // ใช้ WarpData[] แทน { id: string; [key: string]: any }[]
  const [isLoading, setIsLoading] = useState(true); // Start loading

  useEffect(() => {
    const unSubscribe = onSnapshot(
      query(collection(db, "warps"), orderBy("dateCreatedAt", "desc")),
      (snapshot) => {
        setIsLoading(true);
        const retrievedWarps = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })) as WarpData[]; // ใช้ Type Assertion ให้ชัดเจน
        setWarps(retrievedWarps);
        setIsLoading(false);
      },
      (error) => {
        console.error("Error fetching warps:", error);
        setIsLoading(false);
      }
    );

    // Cleanup function to unsubscribe from the listener
    return () => unSubscribe();
  }, []); // Empty dependency array to run only once

  return (
    <div>
      <div className=''>
        <div className='items-center justify-items-center m-4'>
          <div className="headername flex justify-between items-center text-3xl md:text-6xl font-black text-[#e9f6f4] uppercase">
            วาป
            <div className=''>
              <ul className='nav-items text-lg md:text-2xl font-bold text-[#e9f6f4] xl:flex uppercase'>
                <li className="flex space-x-2">
                  <Link href="/pages/addwarp">
                    <span className='flex items-center p-2 xl:p-3'>
                      <button className="bg-[#9cbbe2] rounded-2xl border-4 border-solid flex items-center justify-center bg-foreground text-background gap-2 text-2xl p-2">
                        AddWarp
                      </button>
                    </span>
                  </Link>
                  <Link href="/pages/search">
                    <span className='flex items-center p-2 xl:p-3'>
                      <button className="bg-[#9cbbe2] rounded-2xl border-4 border-solid flex items-center justify-center bg-foreground text-background gap-2 text-2xl p-2">
                        Search
                      </button>
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Warppart */}
        <div>
          <div className="cardcategory place-items-center grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {isLoading ? (
              <h1 className="loadingtext text-3xl font-semibold text-center items-center">กำลังโหลดข้อมูล</h1>
            ) : (
              warps.map((warp) => (
                <Warpcard key={warp.id} warpdata={warp} warpId={warp.id} />
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;


