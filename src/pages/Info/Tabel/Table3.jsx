import React from "react";

const Table3 = () => {
  return (
    <div className="mx-auto py-4">
      <div className="">
        <table className="w-full m-auto border-2 border-gray-600 leading-10 border-collapse">
          <thead className="bg-cyan-950 text-white font-bold">
            <tr className="">
              <th className="p-2">No</th>
              <th>Status</th>
              <th>Unit Kerja</th>
              <th> </th>
            </tr>
          </thead>
          <tbody className="text-center bg-slate-300 border  ">
            <tr>
              <td>1</td>
              <td>Pemerintah Daerah</td>
              <td>DinasKesehatanProvinsi/ Kabupaten/Kota</td>
              <td>Tenaga Kesehatan, SDM Kesehatan</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Unit Utama Kemenkes</td>
              <td>
                UPT Pelayanan Kesehatan, Poltekkes, Badan Penyelenggara Diklat,
                fungsional Dosen, Peneliti
              </td>
              <td>Tenaga Kesehatan, SDM Kesehatan</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table3;
