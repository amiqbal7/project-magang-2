import React from "react";

const Tabel2 = () => {
  return (
    <div className="mx-auto py-4">
      <div className="">
        <table className="w-full m-auto border-2 border-white leading-10 border-collapse">
          <thead className="bg-cyan-950 text-white font-bold">
            <tr className="">
              <th>No</th>
              <th>Jenjang</th>
              <th>Sampul depan (Plastik Bening)</th>
              <th>Sampul Belakang</th>
            </tr>
          </thead>
          <tbody className="text-center bg-slate-300 border  ">
            <tr>
              <td className="border-2 border-white ">1</td>
              <td className="border-2 border-white ">DIV/SI/Profesi</td>
              <td className="border-2 border-white ">Biru</td>
              <td className="border-2 border-white ">Biru</td>
            </tr>
            <tr>
              <td className="border-2 border-white ">2</td>
              <td className="border-2 border-white ">SII/Spesialis</td>
              <td className="border-2 border-white ">Kuning</td>
              <td className="border-2 border-white ">Kuning</td>
            </tr>
            <tr>
              <td className="border-2 border-white ">3</td>
              <td className="border-2 border-white ">SIII</td>
              <td className="border-2 border-white ">Merah</td>
              <td className="border-2 border-white ">Merah</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Tabel2;
