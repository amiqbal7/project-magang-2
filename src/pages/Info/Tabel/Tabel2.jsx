import React from "react";

const Tabel2 = () => {
  return (
    <div className="mx-auto py-4">
      <div className="">
        <table className="w-full m-auto border-2 border-gray-600 leading-10 border-collapse">
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
              <td>1</td>
              <td>DIV/SI/Profesi</td>
              <td>Biru</td>
              <td>Biru</td>
            </tr>
            <tr>
              <td>2</td>
              <td>SII/Spesialis</td>
              <td>Kuning</td>
              <td>Kuning</td>
            </tr>
            <tr>
              <td>3</td>
              <td>SIII</td>
              <td>Merah</td>
              <td>Merah</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Tabel2;
