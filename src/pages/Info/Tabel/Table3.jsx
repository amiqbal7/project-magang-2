import React from "react";

const Table3 = () => {
  return (
    <div className="mx-auto py-4">
      <div className="">
        <table className="w-full m-auto border-2 border-white leading-10 border-collapse">
          <thead className="bg-cyan-950 text-white font-bold">
            <tr className="">
              <th className="p-2 border-2 border-white">No</th>
              <th className="border-2 border-white ">Status</th>
              <th className="border-2 border-white ">Unit Kerja</th>
              <th className="border-2 border-white "> </th>
            </tr>
          </thead>
          <tbody className="text-center bg-slate-300 border  ">
            <tr>
              <td className="border-2 border-white ">1</td>
              <td className="border-2 border-white ">Pemerintah Daerah</td>
              <td className="border-2 border-white ">
                DinasKesehatanProvinsi/ Kabupaten/Kota
              </td>
              <td className="border-2 border-white ">
                Tenaga Kesehatan, SDM Kesehatan
              </td>
            </tr>
            <tr>
              <td className="border-2 border-white ">2</td>
              <td className="border-2 border-white ">Unit Utama Kemenkes</td>
              <td className="border-2 border-white ">
                UPT Pelayanan Kesehatan, Poltekkes, Badan Penyelenggara Diklat,
                fungsional Dosen, Peneliti
              </td>
              <td className="border-2 border-white ">
                Tenaga Kesehatan, SDM Kesehatan
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table3;
