import { motion } from "framer-motion"

function Footer() {

    return (
        <div className="py-4 overflow-hidden bg-black text-neutral-100 font-light text-center text-lg font-poppins shadow-[0px_0px_1px_1px] shadow-[#b1b1b131]">
            <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                viewport={{once: true}}
            >
                Copyright &copy; {new Date().getFullYear()} Kiran Bhattarai
            </motion.p>
        </div>
    )
}

export default Footer