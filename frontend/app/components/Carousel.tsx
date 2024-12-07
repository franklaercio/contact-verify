import { motion } from "framer-motion";

export default function Carousel() {
  const banks = [
    { name: "Banco do Brasil" },
    { name: "Bradesco" },
    { name: "Itaú" },
    { name: "Santander" },
    { name: "Caixa Econômica Federal" },
  ];

  return (
    <div className="overflow-hidden">
      <motion.div
        className="flex space-x-4 animate-marquee"
        initial={{ x: "100%" }}
        animate={{ x: "-100%" }}
        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
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
