import { deleteDoc, doc } from "firebase/firestore";
import { db } from "@/config/firebase";

interface DeletewarpProps {
  warpId: string;
}

function Deletewarp({ warpId }: DeletewarpProps) {
  // Function to handle delete operation
  const handleDelete = async () => {
    if (!warpId) return; // Ensure we have a valid ID
    try {
      const docRef = doc(db, "warps", warpId); // Use "warps" as the collection name
      await deleteDoc(docRef);
      console.log("Document deleted successfully!");
      alert("ลบวาร์ปเรียบร้อยแล้ว"); // Update alert message to match the context
    } catch (error) {
      console.error("Error deleting document:", error);
      alert("เกิดข้อผิดพลาดในการลบวาร์ป");
    }
  };

  return (
    <button className="text-lg md:text-2xl text-[#e9f6f4] bg-[#1e2e7e] p-2 rounded-lg " onClick={handleDelete}>
      ลบวาร์ป
    </button>
  );
}

export default Deletewarp;
