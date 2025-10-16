"use client";
import Navbar from "./components/Navbar";
import { motion } from "framer-motion";
import { FaInstagram, FaYoutube } from "react-icons/fa";
import Link from "next/link";

export default function Home() {
    const fadeInUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    };

    return (
        <main className="bg-gray-50 min-h-screen font-sans">
            <Navbar />

            {/* 🔹 HERO SECTION */}
            <motion.section
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
                style={{ backgroundColor: "#2563eb" }}
                className="pt-28 pb-16 text-center text-white"
            >
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="text-4xl font-bold mb-3"
                >
                    Welcome to ASTRAtech OIA Dashboard
                </motion.h1>
                <p className="text-lg text-white max-w-2xl mx-auto">
                    Office of International Affairs – bridging ASTRAtech with the world
                    through collaboration, innovation, and global education.
                </p>
            </motion.section>

            {/* 🔹 INFORMASI ASTRA GROUP */}
            <motion.section
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeInUp}
                className="py-16 px-6 md:px-20 text-center"
            >
                <h2 className="text-3xl font-bold text-[#2563eb] mb-6">
                    About ASTRA Group
                </h2>
                <p className="text-[#2563eb]/80 max-w-3xl mx-auto leading-relaxed">
                    ASTRA Group is one of Indonesia’s largest diversified conglomerates...
                </p>
                <motion.img
                    src="siapa_pemilik_astra_international.jpg"
                    alt="Astra Group"
                    className="mx-auto mt-8 w-full max-w-3xl rounded-lg shadow-md"
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.3 }}
                />
            </motion.section>

            {/* 🔹 PROGRAM OIA */}
            <motion.section
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeInUp}
                className="py-16 bg-white text-center"
            >
                <h2 className="text-3xl font-bold text-[#2563eb] mb-6">
                    OIA Programs & Collaborations
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6 md:px-20">
                    {[
                        {
                            title: "Student Exchange",
                            desc: "International exchange programs with partner universities...",
                        },
                        {
                            title: "Research Collaboration",
                            desc: "Joint research and innovation with global industries...",
                        },
                        {
                            title: "Internship Abroad",
                            desc: "Industry internships across ASTRA Group’s international branches.",
                        },
                    ].map((program, idx) => (
                        <motion.div
                            key={idx}
                            className="bg-[#2563eb]/10 rounded-xl p-6 shadow hover:shadow-lg transition"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ delay: idx * 0.2 }}
                        >
                            <h3 className="font-semibold text-xl text-[#2563eb] mb-2">
                                {program.title}
                            </h3>
                            <p className="text-[#2563eb]/80 text-sm">{program.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </motion.section>

            {/* 🔹 BERITA & KEGIATAN */}
            <motion.section
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeInUp}
                className="py-16 px-6 md:px-20 bg-[#2563eb]/10 text-center"
            >
                <h2 className="text-3xl font-bold text-[#2563eb] mb-6">
                    Global News & Activities
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        {
                            img: "/Ilustrasi-pekerja-di-PT-Astra-International.jpg",
                            title: "ASTRAtech Hosts ASEAN Student Exchange 2025",
                            desc: "Over 10 partner universities joined our cultural and academic collaboration event.",
                        },
                        {
                            img: "Photobooth-ID-Jakarta-Astra-Expert-Forum-2018.jpg",
                            title: "Joint Research Forum with Toyota Foundation",
                            desc: "OIA facilitated innovation and applied research collaboration with global partners.",
                        },
                        {
                            img: "1729439622042.jpg",
                            title: "Expanding Global Partnerships 2025",
                            desc: "New Memorandums of Understanding signed with universities in Korea and Australia.",
                        },
                    ].map((news, idx) => (
                        <motion.div
                            key={idx}
                            className="bg-white rounded-xl shadow-md hover:shadow-lg transition"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ delay: idx * 0.2 }}
                        >
                            <img
                                src={news.img}
                                alt={news.title}
                                className="rounded-t-xl w-full h-48 object-cover"
                            />
                            <div className="p-5 text-left">
                                <h3 className="font-semibold text-lg text-[#2563eb]">{news.title}</h3>
                                <p className="text-[#2563eb]/80 text-sm mt-2">{news.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.section>

            {/* 🔹 FOOTER */}
            <footer
                style={{
                    backgroundColor: "#2563eb",
                    color: "white",
                    padding: "40px 20px",
                    fontFamily: "Poppins, sans-serif",
                }}
            >
                <div
                    style={{
                        display: "flex",
                        flexWrap: "wrap",
                        justifyContent: "space-between",
                        alignItems: "flex-start",
                        gap: "30px",
                        maxWidth: "1200px",
                        margin: "0 auto",
                    }}
                >
                    <div style={{ flex: "1 1 400px" }}>
                        <h2 style={{ fontSize: "30px", marginBottom: "10px" }}>Contact Us</h2>

                        <p>
                            <Link
                                href="/dashboard"
                                style={{
                                    color: "white",
                                    textDecoration: "none",
                                    fontWeight: "500",
                                    transition: "0.3s",
                                }}
                                onMouseEnter={(e) =>
                                    (e.currentTarget.style.textDecoration = "underline")
                                }
                                onMouseLeave={(e) =>
                                    (e.currentTarget.style.textDecoration = "none")
                                }
                            >
                                Home
                            </Link>
                        </p>

                        <p>
                            <a
                                href="mailto:nazarsptra42@gmail.com"
                                style={{
                                    color: "white",
                                    textDecoration: "none",
                                    transition: "0.3s",
                                }}
                                onMouseEnter={(e) =>
                                    (e.currentTarget.style.textDecoration = "underline")
                                }
                                onMouseLeave={(e) =>
                                    (e.currentTarget.style.textDecoration = "none")
                                }
                            >
                                Email: nazarsptra42@gmail.com
                            </a>
                        </p>

                        <p>
                            <a
                                href="tel:+6281511778793"
                                style={{
                                    color: "white",
                                    textDecoration: "none",
                                    transition: "0.3s",
                                }}
                                onMouseEnter={(e) =>
                                    (e.currentTarget.style.textDecoration = "underline")
                                }
                                onMouseLeave={(e) =>
                                    (e.currentTarget.style.textDecoration = "none")
                                }
                            >
                                Telepon: +62 815 1177 8793
                            </a>
                        </p>

                        <h3 style={{ marginTop: "25px" }}>Alamat</h3>
                        <p style={{ maxWidth: "400px", lineHeight: "1.6" }}>
                            Kampus Cikarang: Jl. Gaharu Blok F3 Delta Silicon II Cibatu, Cikarang
                            Selatan, Kabupaten Bekasi, Jawa Barat 17530
                        </p>
                    </div>

                    <div
                        style={{
                            flex: "1 1 500px",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            gap: "20px",
                        }}
                    >
                        <div
                            style={{
                                borderRadius: "10px",
                                overflow: "hidden",
                                width: "100%",
                                height: "300px",
                                maxWidth: "600px",
                            }}
                        >
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.354639749172!2d107.14572727453287!3d-6.348105362105805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e699b896d7fc649%3A0xe0a940b1f200d008!2sPoliteknik%20Astra!5e0!3m2!1sid!2sid!4v1760538415107!5m2!1sid!2sid"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>

                        <div
                            style={{
                                display: "flex",
                                justifyContent: "center",
                                gap: "25px",
                            }}
                        >
                            <a
                                href="https://www.instagram.com/astrapolytechnic?igsh=YnFzeWpoNWV4bHM1"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                    color: "white",
                                    fontSize: "35px",
                                    transition: "transform 0.3s, color 0.3s",
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.color = "#2563eb";
                                    e.currentTarget.style.transform = "scale(1.2)";
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.color = "white";
                                    e.currentTarget.style.transform = "scale(1)";
                                }}
                            >
                                <FaInstagram />
                            </a>

                            <a
                                href="https://www.youtube.com/@ASTRAtechChannel"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                    color: "white",
                                    fontSize: "35px",
                                    transition: "transform 0.3s, color 0.3s",
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.color = "#2563eb";
                                    e.currentTarget.style.transform = "scale(1.2)";
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.color = "white";
                                    e.currentTarget.style.transform = "scale(1)";
                                }}
                            >
                                <FaYoutube />
                            </a>
                        </div>
                    </div>
                </div>

                <p
                    style={{
                        marginTop: "40px",
                        fontSize: "14px",
                        opacity: 0.8,
                        textAlign: "center",
                    }}
                >
                    &copy; {new Date().getFullYear()} Website Sederhana by Next.js
                </p>
            </footer>
        </main>
    );
}
