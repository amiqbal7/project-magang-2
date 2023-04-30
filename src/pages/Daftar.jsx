import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";

const Daftar = () => {
  const [value, setValue] = useState("");
  const [provs, setProvs] = useState([]);
  const [data, setData] = useState([]);

  const handleSelectChange = (event) => {
    setValue(event.target.value);
  };

  const Alert = () => {
    Swal.fire("Good job!", "Data Anda Sudah Tersimpan !", "success");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // kirim data form ke server atau lakukan proses lainnya
    // setelah proses selesai, panggil fungsi untuk merefresh halaman
    window.location.reload();
  };

  //   useEffect(() => {
  //   axios
  //     .get(`https://dev.farizdotid.com/api/daerahindonesia/provinsi`)
  //     .then((response) => {
  //       setProvs(response.data);
  //       console.log(provs); // tambahkan ini untuk memeriksa nilai dari variable provs
  //     });
  // });
  useEffect(() => {
    axios
      .get(
        "https://pkgstore.datahub.io/core/world-cities/world-cities_json/data/5b3dd46ad10990bca47b04b4739a02ba/world-cities_json.json"
      )
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  //removing duplicate country names
  let country = [...new Set(data.map((item) => item.country))];
  country.sort();

  return (
    <div className="max-w-7xl md:mx-auto mx-5 ">
      <div className="my-16">
        <h1 className="text-xl font-semibold pb-3">
          Angkatan Tahun 2023 Gelombang 2
        </h1>
        <p>Dibuka : 26 April 2023 | Ditutup : 03 Mei 2023</p>
      </div>
      <form className="container bg-slate-300" onConfirm={handleSubmit}>
        <div className="">
          <h1 className="bg-blue-600 mb-4 pl-5">Formulir Pendaftaran Online</h1>
        </div>
        <div className="">
          <div className="pb-5 mx-5">
            <p>Ketentuan Pengisian :</p>
            <p>
              Lengkapi formulir pendaftaran di bawah ini dengan data anda yang
              sebenarnya. Kotak dengan tanda (*) wajib diisi
            </p>
            <p>
              Penulisan gunakan huruf kapital, Kecuali penulisan gelar sesuai
              atuaran
            </p>
          </div>
          <div className="grid grid-cols-2 border-b border-b-gray-600 ">
            <div className="mx-5">
              <p>Status Pelamar * :</p>
              <p className="text-red-600 text-sm italic">* Requester status</p>
            </div>
            <div className="">
              <select
                className="rounded-sm border-gray-300 border-2 block mt-2 "
                id="question"
                onChange={(e) => setValue(e.target.value)}
                value={value}
              >
                <option>Pilih Status</option>
                <option>Parsial</option>
                <option>Baru</option>
              </select>
            </div>
          </div>
          <div className="grid grid-cols-2 border-b border-b-gray-600 pt-4">
            <div className="mx-5">
              <p>Nama Lengkap * :</p>
              <p className="text-red-600">Full Name</p>
            </div>
            <div className="mt-1">
              <input
                className="border border-gray-400 md:w-64 placeholder-gray-300"
                placeholder=" Nama Lengkap Tanpa Gelar"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 border-b border-b-gray-600 pt-4">
            <div className="mx-5">
              <p>Gelar SKCPNS :</p>
            </div>
            <div className="mt-1 grid">
              <input
                className="border mb-3 border-gray-400 md:w-64 placeholder-gray-300"
                placeholder=" Gelar Depan"
              />
              <input
                className="border border-gray-400 md:w-64 placeholder-gray-300"
                placeholder=" Gelar Belakang"
              />
              <p className="text-red-500 text-sm pt-2">
                * Ditulis Sesuai Gelar Resmi
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 border-b border-b-gray-600 pt-4">
            <div className="mx-5">
              <p>Gelar SK Terakhir :</p>
            </div>
            <div className="mt-1 grid">
              <input
                className="border mb-3 border-gray-400 md:w-64 placeholder-gray-300"
                placeholder=" Gelar Depan"
              />
              <input
                className="border border-gray-400 md:w-64 placeholder-gray-300"
                placeholder=" Gelar Belakang"
              />
              <p className="text-red-500 text-sm pt-2">
                * Ditulis Sesuai Gelar Resmi
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 border-b border-b-gray-600 pt-4">
            <div className="mx-5">
              <p>Tempat Lahir * :</p>
              <p className="text-red-500 text-sm italic">* Birth Place</p>
            </div>
            <div className="mt-1 grid">
              <input
                className="border mb-3 border-gray-400 md:w-64 placeholder-gray-300"
                placeholder=" Kota Saja"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 border-b border-b-gray-600 pt-4">
            <div className="mx-5">
              <p>Tanggal Lahir * :</p>
              <p className="text-red-500 text-sm italic">* Birth Day</p>
            </div>
            <div className="mt-1 grid">
              <input
                className="border mb-3 border-gray-400 md:w-64 placeholder-gray-300"
                placeholder=" Tanggal-Bulan-Tahun"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 border-b border-b-gray-600 pt-4">
            <div className="mx-5">
              <p>NIP * :</p>
              <p className="text-red-500 text-sm italic">* NIP</p>
            </div>
            <div className="mt-1 grid">
              <div className="md:flex gap-2 grid">
                <input
                  className="border mb-3 border-gray-400 w-32 placeholder-gray-300"
                  placeholder=" XXXXXXX"
                />
                <input
                  className="border mb-3 border-gray-400 w-24 placeholder-gray-300"
                  placeholder=" XXXX"
                />
                <input
                  className="border mb-3 border-gray-400 w-20 placeholder-gray-300"
                  placeholder=" XX "
                />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 border-b border-b-gray-600 pt-4">
            <div className="mx-5">
              <p>NO KTP * :</p>
              <p className="text-red-500 text-sm italic">* NIK</p>
            </div>
            <div className="mt-1 grid">
              <input
                className="border mb-3 border-gray-400 md:w-64 placeholder-gray-300"
                placeholder=" XXXXXXXXXXXXXX"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 border-b border-b-gray-600 pt-4">
            <div className="mx-5">
              <p>Alamat Sesuai KTP * :</p>
              <p className="text-red-500 text-sm italic">* Address</p>
            </div>
            <div className="mt-1 grid">
              <input
                className="border mb-3 border-gray-400 md:w-64 placeholder-gray-300"
                placeholder=" XXXXXXXXXXXXXX"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 border-b border-b-gray-600 pt-4">
            <div className="mx-5">
              <p>Telepon Rumah * :</p>
              <p className="text-red-500 text-sm italic">* Phone Number</p>
            </div>
            <div className="mt-1 grid">
              <input
                className="border mb-3 border-gray-400 md:w-64 placeholder-gray-300"
                placeholder=" 08XXXXXXXXXXXX"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 pt-5 border-b pb-5 border-b-gray-600">
            <div className="mx-5">
              <p>Jenjang Pendidikan * :</p>
              <p className="text-red-600 text-sm italic">* yang diinginkan</p>
            </div>
            <div className="mx-4">
              <select
                id="jenjang"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full md:w-64 p-1"
              >
                <option value="">Pilih Jenjang</option>
                <option value="D-IV">D-IV</option>
                <option value="D-IV dengan profesi">D-IV dengan profesi</option>
                <option value="S-1">S-1</option>
                <option value="S-1 dengan profesi (non dokter)">
                  S-1 dengan profesi (non dokter)
                </option>
                <option value="Profesi (non dokter)">
                  Profesi (non dokter)
                </option>
                <option value="S-2">S-2</option>
                <option value="S-2 dengan spesialis Keperawatan">
                  S-2 dengan spesialis Keperawatan
                </option>
                <option value="Spesialis Keperawatan">
                  Spesialis Keperawatan
                </option>
                <option value="S-3 (Dosen, WI, Peneliti)">
                  S-3 (Dosen, WI, Peneliti)
                </option>
                <option value="Doble Degree">Doble Degree</option>
              </select>
            </div>
          </div>
          <div className="grid grid-cols-2 pt-5 ">
            <p className="mx-4">Asal Daerah :</p>
            <div className="mx-4">
              <select
                id="countries"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full md:w-64 p-1"
              >
                <option>Select Country</option>
                {country?.map((item, index) => (
                  <option key={index} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
        <div className="pt-5">
          <h1 className="bg-blue-600 mb-4 pl-5">
            Persayaratan Status Kepegawaian
          </h1>
        </div>
        <div className="grid grid-cols-2 pt-5 border-b pb-5 border-b-gray-600">
          <div className="mx-4">
            <p  className="">Jenis Pegawai :</p>
            <p className="text-red-500 text-sm italic">* yang diinginkan</p>
          </div>
          <div className="mx-4">
            <select
              id="countries"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full md:w-64 p-1"
            >
              <option value="">Jabatan Struktural</option>
              <option value="Jabatan Struktural"> Jabatan Struktural</option>
              <option value="Fungsional Umum">Fungsional Umum</option>
              <option value="Fungsional Tertentu">fungsional Tertentu</option>
              <option value="WI/Dosen">WI/Dosen</option>
              <option value="Peneliti">Peneliti</option>
            </select>
          </div>
        </div>
        <div className="grid grid-cols-2 pt-5 border-b pb-5 border-b-gray-600">
          <p className="mx-4">Jenis SDM Kesehatan :</p>
          <div className="mx-4">
            <select
              id="countries"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full md:w-64 p-1"
            >
              <option value="">Jenis Pegawai</option>
              <option value="Jabatan Struktural"> Tenaga Kesehatan</option>
              <option value="Fungsional Umum">Tenaga non Kesehatan</option>
              <option value="Fungsional Tertentu">fungsional Tertentu</option>
              <option value="WI/Dosen">Dosen Poltekkes Kemenkes</option>
            </select>
            <p className="text-red-600 text-sm italic">
              Peneliti masuk dalam rumpung Non Kesehatan
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 pt-5 border-b pb-5 border-b-gray-600">
          <h1 className="mx-5">Asal Daerah :</h1>
          <div>
            <div className="">
              <input
                id="default-radio-1"
                type="radio"
                value=""
                name="default-radio"
                className="w-4 h-4"
              />
              <label
                htmlFor="default-radio-1"
                className="ml-2 text-sm font-medium"
              >
                DTPK
              </label>
            </div>
            <div className="">
              <input
                checked
                id="default-radio-2"
                type="radio"
                value=""
                name="default-radio"
                className="w-4 h-4 "
              />
              <label
                htmlFor="default-radio-2"
                className="ml-2 text-sm font-medium"
              >
                Non DTPK
              </label>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 pt-5 border-b pb-5 border-b-gray-600">
          <div className="mx-4">
            <p>Golongan :</p>
          </div>
          <div className="mx-4">
            <select
              id="countries"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option value="">Jenis Pegawai</option>
              <option value="Jabatan Struktural"> Tenaga Kesehatan</option>
              <option value="Fungsional Umum">Tenaga non Kesehatan</option>
              <option value="Fungsional Tertentu">fungsional Tertentu</option>
              <option value="WI/Dosen">Dosen Poltekkes Kemenkes</option>
            </select>
            <p className="text-red-600 text-sm italic">
              Peneliti masuk dalam rumpung Non Kesehatan
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 pt-5 border-b pb-5 border-b-gray-600">
          <div className="mx-4">
            <p>Jabatan :</p>
          </div>
          <div className="mx-4">
            <select class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              <option value="">Pilih Jabatan</option>
            </select>
            <p className="text-red-600 text-sm italic"></p>
          </div>
        </div>
        <div className="grid grid-cols-2 border-b border-b-gray-600 pt-4">
          <p className="mx-5">No. SK PNS * :</p>
          <div className="mt-1 grid mr-4">
            <input
              className="border mb-3 border-gray-400 md:w-64 placeholder-gray-300"
              placeholder=" XXXXXXXXXXXXXX"
            />
          </div>
        </div>
        <div className="grid grid-cols-2 border-b border-b-gray-600 pt-4">
          <p className="mx-5">Tanggal SK PNS * :</p>
          <div className="mt-1 grid mr-4">
            <input
              className="border mb-3 border-gray-400 md:w-64 placeholder-gray-300"
              placeholder=" XXXXXXXXXXXXXX"
            />
          </div>
        </div>
        <div>
          <p className="bg-blue-600 text-white pl-5 font-semibold">
            Data Pengusul
          </p>
          <div className="mx-4">
            <div className="grid grid-cols-2 pt-5 border-b pb-5 border-b-gray-600">
              <p>Status Kepegawaian :</p>
              <div>
                <select className="bg-gray-50 border md:w-64 w-full rounded-md p-2">
                  <option value="">Kepesertaan</option>
                  <option value="PNS">PNS Pusat</option>
                </select>
                <p className="text-red-600 text-sm italic"></p>
              </div>
            </div>
          </div>
        </div>
      </form>
      <div>
        <button onClick={Alert}>Submit</button>
      </div>
    </div>
  );
};

export default Daftar;
