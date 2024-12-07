import axios from "axios";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface Company {
  name: string;
}

const BACKEND_URL = `${process.env.NEXT_PUBLIC_BACKEND_HOST}:${process.env.NEXT_PUBLIC_BACKEND_PORT}`;

const fetchAllCompany = async (): Promise<Company[]> => {
  try {
    const response = await axios.get(`${BACKEND_URL}/api/companies`);
    return response.data;
  } catch (error) {
    console.error("Failed to fetch companies", error);
    return [];
  }
};

export default function Carousel() {
  const [banks, setBanks] = useState<Company[]>([]);

  useEffect(() => {
    const fetchCompanies = async () => {
      const companies = await fetchAllCompany();
      setBanks(companies);
    };

    fetchCompanies();
  }, []);

  return (
    <div className="overflow-hidden py-4">
      <motion.div
        className="flex space-x-6"
        initial={{ x: "100%" }}
        animate={{ x: "-100%" }}
        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
      >
        {banks.map((bank, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-48 h-24 flex items-center justify-center"
          >
            <p className="text-lg font-medium text-center">{bank.name}</p>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
