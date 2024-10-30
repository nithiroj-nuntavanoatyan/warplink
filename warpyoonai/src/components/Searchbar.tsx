'use client';

import { useState } from "react";
import { collection, orderBy, query, where } from "firebase/firestore";
import { getDocs } from "firebase/firestore";
import { db } from "@/config/firebase";
import Warpcard from "./Warpcard";

// Define an interface for the warp data
interface WarpData {
    id: string;
    title: string; // เพิ่มคุณสมบัติที่ขาดไป
    link: string;  // เพิ่มคุณสมบัติที่ขาดไป
    category: string;
    description: string; // เพิ่มคุณสมบัติที่ขาดไป
    dateCreatedAt: string; // Change this according to your actual Firestore document structure
}

function Searchbar() {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState<WarpData[]>([]); // Specify the type here
    const [showNoResults, setShowNoResults] = useState(false);

    const searchBar = async () => {
        if (!searchTerm) return; // Early exit if search term is empty

        try {
            const q = query(
                collection(db, "warps"),
                where("category", "==", searchTerm),
                orderBy("dateCreatedAt", "desc")
            );

            const querySnapshot = await getDocs(q);
            const results: WarpData[] = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id } as WarpData)); // Type assertion
            setSearchResults(results);
            setShowNoResults(results.length === 0);
        } catch (error) {
            console.error("Error searching Firestore:", error);
        }
    };

    // Specify the type for the event parameter
    const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        searchBar();
    };

    return (
        <div>
            <div className='search'>
                <div className="search-input flex justify-center items-center m-4">
                    <form onSubmit={handleSearchSubmit}>
                        <div className="searchbar flex justify-center items-center">
                            <input
                                className="w-[220px] h-[60px] sm:h-[80px] sm:w-[450px] text-xl sm:text-2xl text-center bg-[#305577] text-[#e9f6f4] rounded-lg font-semibold"
                                type="text"
                                placeholder="category"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                required
                            />
                            <button
                                className="searchbutton m-2 bg-[#305577] p-3 rounded-md text-white text-2xl md:text-4xl"
                            >
                                <span className="flex items-center">Search</span>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <div className="searchresult place-items-center grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
                {searchResults.length > 0 ? (
                    searchResults.map((result) => (
                        <Warpcard key={result.id} warpdata={result} warpId={result.id} /> 
                    ))
                ) : showNoResults && (
                    <div className="noresult text-lg text-center">
                        ขออภัย ไม่พบสิ่งที่คุณค้นหา
                    </div>
                )}
            </div>
        </div>
    );
}

export default Searchbar;



