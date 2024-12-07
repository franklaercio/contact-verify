import axios from "axios";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const fetchAllCompany = async () => {
  try {
    const response = await axios.get("http://localhost:8080/api/companies");
    return response.data;
  } catch {
    console.error("Failed to fetch companies");
    return [];
  }
};

export default function Carousel() {
  const [banks, setBanks] = useState([]);

  useEffect(() => {
    const fetchCompanies = async () => {
      const companies = await fetchAllCompany();
      setBanks(companies);
    };

    fetchCompanies();
  }, []);

  return (
    <div className="overflow-hidden">
      <motion.div
        className="flex space-x-4 animate-marquee"
        initial={{ x: "100%" }}
        animate={{ x: "-100%" }}
        transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
      >
        {banks.map((bank, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-48 h-24 flex items-center justify-center"
          >
            <div className="h-16">{bank.name}</div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
