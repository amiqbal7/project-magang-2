import React, { useState } from "react";
import Video from "./Video";

function Faq() {
  const [activeIndex, setActiveIndex] = useState(-1);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? -1 : index);
  };

  const cardIsi = [
    {
      question: "Apa dasar hukum pelaksanaan Tugas Belajar SDMK?",
      answer:
        "Pemenkes No 28 tahun 2015 tentang Penyelenggaraan Pemberian Bantuan Tugas Belajar SDM Kesehatan.",
    },
    {
      question: "Apa saja syarat-syarat untuk mendaftar tugas belajar?",
      answer:
        "Silahkan lihat di Pemenkes No 28 Tahun 2015 dan Surat edaran Tugas Belajar tahun berjalan.",
    },
    {
      question:
        "Kapan SK Bantuan Tugas Belajar Kemenkes terbit setiap tahunnya?",
      answer:
        "SK Bantuan Tugas Belajar terbit sekitar bulan Oktober - November pada setiap tahunnya.",
    },
    {
      question: "Terhitung mulai kapan SK Tugas Belajar berlaku?",
      answer:
        "SK Bantuan Tugas Belajar berlaku mulai tanggal 1 September setiap tahunnya.",
    },
    {
      question:
        "Apa yang harus dilakukan peserta setelah ditetapkan SK Tugas Belajar?",
      answer:
        "Bagi Peserta Daerah segera melaporkan SK Bantuan Tugas Belajar dari Direktorat jenderal Tenaga Kesehatan Kementerian Kesehatan ke Badan Pembina Kepegawaian di daerah masing-masing untuk dibuatkan SK Tugas Belajar, kemudian mengirimkan SK Tugas Belajar tersebut ke Direktorat Penyediaan Tenaga Kesehatan. Bagi yang ingin mengajukan biaya kedatangan segera menggirimkan berkas persyaratan ke Direktorat Penyediaan Tenaga Kesehatan dan tidak boleh melewati tahun anggaran berjalan.",
    },
  ];

  return (
    <div name="Faq" className="max-w-7xl mx-5 flex xl:mx-auto py-9 ">
      <div className="">
        <div className=" mx-auto gap-10">
          <div className="text-center md:text-center">
            <h1 className="pb-5 pt-10 text-4xl font-bold text-center">
              Masih Bingung dan ada Pertanyaan ?
            </h1>
            <p className="text-lg md:mr-16 pb-7">
              Tenang, Kami akan membantu anda !
            </p>
          </div>
        </div>
        <div className="lg:flex gap-9 ">
          <div className="pb-10">
            {cardIsi.map((faq_info, i) => (
              <div
                className="border-gray-100 rounded m-[15px] shadow-md overflow-hidden mx-auto mb-4"
                key={i}
              >
                <div
                  className="flex items-center justify-between p-4 cursor-pointer "
                  onClick={() => toggleAccordion(i)}
                >
                  <p className="md:text-xl text-lg mx-7 font-semibold">
                    {faq_info.question}{" "}
                  </p>
                  <svg
                    className={`w-6 h-6 transition-transform transform ${
                      activeIndex === i ? "rotate-180" : ""
                    }`}
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"
                    />
                  </svg>
                </div>
                {activeIndex === i && (
                  <div className="px-10 pb-4">{faq_info.answer}</div>
                )}
              </div>
            ))}
          </div>
          <Video />
        </div>
      </div>
    </div>
  );
}

export default Faq;
