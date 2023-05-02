import React from "react";

const Tabel1 = () => {
  return (
    <div className="mx-auto py-4">
      {/* TABEL 1 */}
      <div className="">
        <table className="w-full m-auto border-2 border-white leading-10 border-collapse">
          <thead className="bg-cyan-950 text-white font-bold">
            <tr className="">
              <th rowSpan="2" className="p-1">
                No
              </th>
              <th rowSpan="2" className="border-2 border-white ">
                Jenis SDM Kesehatan
              </th>
              <th colSpan="2" className="border-2 border-white ">
                Usia
              </th>
              <th rowSpan="2" className="border-2 border-white ">
                Gol Minimal
              </th>
            </tr>
            <tr>
              <th>DTPK</th>
              <th>Non DPTK</th>
            </tr>
          </thead>
          <tbody className="text-center bg-slate-300 border  ">
            <tr>
              <td rowSpan="6" className="border-2 border-white ">
                1
              </td>
              <td
                colSpan="4"
                className="p-3 font-semibold text-lg border-2 border-white "
              >
                Tenaga Kesehatan
              </td>
            </tr>
            <tr>
              <td className="border-2 border-white ">DIII→DIV/SI</td>
              <td className="border-2 border-w ">47 tahun</td>
              <td className="border-2 border-white ">42 tahun</td>
              <td className="border-2 border-white ">IIc</td>
            </tr>
            <tr>
              <td className="border-2 border-white ">DIII→S1+Profesi</td>
              <td className="border-2 border-white ">46 tahun</td>
              <td className="border-2 border-white ">42 tahun</td>
              <td className="border-2 border-white ">IIc</td>
            </tr>
            <tr>
              <td className="border-2 border-white ">DIV/SI → Profesi</td>
              <td className="border-2 border-white ">48 tahun</td>
              <td className="border-2 border-white ">43 tahun</td>
              <td className="border-2 border-white ">IIc</td>
            </tr>
            <tr>
              <td className="border-2 border-white ">SI→SII</td>
              <td className="border-2 border-white ">47 tahun</td>
              <td className="border-2 border-white ">47 tahun</td>
              <td className="border-2 border-white ">IIa</td>
            </tr>
            <tr>
              <td className="border-2 border-white ">SI→SII+Spesialis</td>
              <td className="border-2 border-white ">46 tahun</td>
              <td className="border-2 border-white ">46 tahun</td>
              <td className="border-2 border-white ">IIa</td>
            </tr>

            <tr>
              <td rowSpan="5" className="border-2 border-white ">
                2
              </td>
              <td
                colSpan="4"
                className="p-3 font-semibold text-lg border-2 border-white"
              >
                Non Tenaga Kesehatan (Peneliti, Widya Iswara, Audiitor, dll)
              </td>
            </tr>
            <tr>
              <td className="border-2 border-white ">DIII→SI</td>
              <td className="border-2 border-white ">37 tahun</td>
              <td className="border-2 border-white ">25 tahun</td>
              <td className="border-2 border-white ">IIc</td>
            </tr>
            <tr>
              <td className="border-2 border-white ">DIII→S1</td>
              <td className="border-2 border-white ">37 tahun</td>
              <td className="border-2 border-white ">25 tahun</td>
              <td className="border-2 border-white ">IIc</td>
            </tr>
            <tr>
              <td className="border-2 border-white ">SI → SII</td>
              <td className="border-2 border-white ">42 tahun</td>
              <td className="border-2 border-white ">37 tahun</td>
              <td className="border-2 border-white ">IIIa</td>
            </tr>
            <tr>
              <td className="border-2 border-white ">SII→SIII</td>
              <td className="border-2 border-white ">47 tahun</td>
              <td className="border-2 border-white ">40 tahun</td>
              <td className="border-2 border-white ">IIIb</td>
            </tr>

            <tr>
              <td rowSpan="2" className="border-2 border-white ">
                3
              </td>
              <td colSpan="4" className="p-3 font-semibold text-lg ">
                Dosen Poltekkes Kemenkes
              </td>
            </tr>
            <tr>
              <td className="border-2 border-white ">SII→SIII</td>
              <td className="border-2 border-white ">50 tahun</td>
              <td className="border-2 border-white ">50 tahun</td>
              <td className="border-2 border-white ">IIIb</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Tabel1;
