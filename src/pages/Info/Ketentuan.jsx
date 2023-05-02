import React from "react";
import Tabel1 from "./Tabel/Tabel1";
import Tabel3 from "./Tabel/Table3";
import Tabel2 from "./Tabel/Tabel2";

const Ketentuan = () => {
  return (
    <div className="mx-auto mb-10 p-8 ">
      <h1 className="font-bold text-3xl py-4">Ketentuan dan Persyaratan</h1>

      {/* BAGAN A */}
      <div className="pt-5">
        <h1 className="font-semibold text-xl ">
          A. Ketentuan dan Persyaratan Calon Peserta Tugas Belajar SDM Kesehatan
        </h1>
        <ol className="list-decimal pl-8 text-lg">
          <li>PNS Kementerian Kesehatan.</li>
          <li>
            PNS tenaga kesehatan yang bertugas di Dinas Kesehatan Prov/Kab/Kota,
            Rumah Sakit, Puskesmas dan jaringan layanan Puskesmas.
          </li>
          <li>
            Masa kerja minimal 1 tahun terhitung sejak diangkat sebagai PNS.
          </li>
          <li>
            Telah penyesuaian Ijazah
            <span className="italic">
              (gelar terakhir tercantum dalam SK Kepangkatan atau Surat
              Pencantuman Gelar Pendidikan terakhir atau surat keterangan proses
              pecantuman gelar)
            </span>
            .
          </li>
          <li>Usia maksimal pada 1 September 2020 bagi :</li>

          <Tabel1 />

          <li>
            Bagi PNS yang menduduki jabatan struktural bersedia diberhentikan
            dari jabatan strukturalnya.
          </li>
          <li>
            Bagi PNS yang menduduki jabatan fungsional bersedia dibebaskan
            sementara dari jabatan fungsionalnya
          </li>
          <li>
            Tidak pernah gagal dalam tugas belajar sebelumnya bagi peserta yang
            sudah pernah tugas belajar.
          </li>
          <li>
            Tidak pernah mengundurkan diri setelah ditetapkan dalam Surat
            Keputusan Tugas Belajar.
          </li>
          <li>
            Bagi calon peserta yang sudah pernah mengikuti tugas belajar
            sebelumnya harus telah mengabdikan diri minimal 2N{" "}
          </li>
          <span className="italic ">
            (N=masa pendidikan tugas belajar sebelumnya).
          </span>
          <li>
            Belum memiliki gelar sesuai dengan jenjang pendidikan yang akan
            ditempuh
          </li>
          <span className="italic">
            {" "}
            (Tidak diberikan untuk mendapatkan gelar kedua pada strata yang sama
            jika sudah pernah tugas belajar) kecuali untuk profesi.
          </span>
          <li>
            Tidak sedang menjalani hukuman disiplin tingkat sedang atau berat.
          </li>
          <li>
            Hanya diperuntukan untukkelas regular dan tidak diperuntukkan untuk
            kelas-kelas: Kelas eksekutif, kelas karyawan, kela skhusus, kelas
            jarak jauh, kelas yang bukan diselenggarakan di perguruan tinggi
            induk
          </li>
          <li> Tidak sedang dalam proses pindah ke instansi lain.</li>
          <li>
            Mendaftar secara online melalui http://tubel.bppsdmk.kemkes.go.id
          </li>
          <li>
            Perkuliahan dimulai pada semester gasal atau pada Tahun 2020.{" "}
          </li>
          <li>
            PNS yang dapat mengikuti tugas belajar yang dapat diikuti sebagai
            berikut :
          </li>
        </ol>
        <Tabel3 />
      </div>

      {/* BAGAN B */}
      <div className="pt-8">
        <h1 className="font-semibold text-xl ">
          B. Dokumen Kelengkapan Seleksi Administrasi
        </h1>
        <ol className="list-decimal pl-8 text-lg">
          <li>
            Bukti registrasi pendaftaran online (print out dari sistem
            informasi).
          </li>
          <li>
            Biodata peserta tugas belajar (Print out dari sistem informasi)
          </li>
          <li>
            Biodata peserta tugas belajar (Print out dari sistem informasi)
          </li>
          <li>
            Fotocopi SK Pencatuman gelar pendidikan terakhir atau bukti proses
            pengusulan pencantuman gelar
          </li>
          <li>Fotocopy SK Jabatan terakhir</li>
          <li>
            Fotocopy Penilaian Prestasi Kerja Pegawai selama2 tahun terakhir
            dengan setiap unsur sekurang-kurangnya bernilai baik
          </li>
          <li>Fotocopi SK tugas belajar atau Surat ijin belajar sebelumnya</li>
          <li>
            Fotocopy ijasah terakhir yang telah dilegalisir oleh institusi
            pendidikan
          </li>
          <li>
            Bukti akreditasi program studi minimal terakreditasi B atau setara
            sesuai dengan BAN PT/ LAM PT Kes
          </li>
          <li>
            Dokumen perencanaan kebutuhan tugas belajar SDM Kesehatan lima
            tahunan (Tahun 2019 - 2023) dan tahunan yang telah ditandatangani
            oleh pimpinan unit kerja setingkat eselon II atau fotokopi yang
            sudah dilegalisir oleh pejabat yang berwenang (dokumen harus sama
            dengan yang telah di input online dan rekap provinsi),
            direkapitulasi dan dikumpulkan oleh Dinas Kesehatan Prov/ Unit Utama
            (lampiran 1)
          </li>
          <li>
            Surat Rekomendasi/ijin tertulis dari atasan langsung dan disetujui
            oleh pimpinan unit kerja untuk mengikuti seleksi administrasi dan
            seleksi akademik (lampiran 3)
          </li>
          <li>
            Surat Rekomendasi mengikuti seleksi administrasi dan akademik dari
            Kepala Badan Kepegawaian Daerah/Biro Kepegawaian Kementerian
            Kesehatan
          </li>
          <li>Surat Ijin dari suami/istri (lampiran4)</li>
          <li>
            Surat Penghargaan sebagai Tenaga Kesehatan Teladan Nasional bagi
            yang pernah mendapatkannya.
          </li>
          <li>
            Surat pernyataan diatas materai Rp. 6.000 dan diketahui pimpinan
            unit kerja tentang (lampiran 6):
          </li>
          <div className="pb-4 p-2">
            <ul className="list-disc pl-6">
              <li>
                Bersedia melepaskan jabatan struktural bagi yang menduduki
                jabatan struktural
              </li>
              <li>
                Bersedia dibebaskan sementara dari jabatan fungsional bagi yang
                menduduki jabatan fungsional
              </li>
              <li>
                Bersedia bekerja kembali pada unit kerja pengusul setelah
                selesai mengikuti pendidikan, dengan ketentuan 2N
              </li>
              <span className="italic">(N = masa tugas belajar)</span>
              <li>
                Tidak akan pindah program studi/peminatan dan/ atau institusi
                pendidikansetelah ditetapkan sebagai peserta tugas belajar
              </li>
            </ul>
          </div>
          <li>
            Surat pernyataan dari pimpinan unit kerja bahwa calon peserta tugas
            belajar (Lampiran 6):
          </li>
          <div className="pb-4 p-2">
            <ul className="list-disc pl-6">
              <li>Tidak dalam proses pindah/ mutasi kerja.</li>
              <li>
                Tidak pernah gagal dalam tugas belajar sebelumnya dan/ atau
                dibatalkan mengikuti tugas belajar karena kesalahannya.
              </li>
              <li>
                Tidak sedang melaksanakan pendidikan dan pelatihan penjenjangan.
              </li>
              <li>
                Program studi/peminatan sudah sesuai dengan Dokumen Rencana
                Kebutuhan Tugas Belajar.
              </li>
              <li>
                Program studi/peminatan sudah sesuai dengan Dokumen Rencana
                Kebutuhan Tugas Belajar.
              </li>
            </ul>
          </div>
        </ol>
      </div>

      {/* BAGAN C */}
      <div className="pt-8">
        <h1 className="font-semibold text-xl capitalize ">
          C. Ketentuan Penjilidan dokumen seleksi administrasi :
        </h1>
        <ol className="list-decimal pl-8 text-lg">
          <li>Penjilidan Dokumen Seleksi</li>
          <Tabel2 />
          <div className="pb-4">
            <ul className="list-disc pl-6">
              <li>
                Jenjang DIV/S1 dan profesi dijilid cover plastik bening dan
                cover belakang warna biru
              </li>
              <li>
                Jenjang SII, Spesialis dijilid cover plastik bening dan cover
                belakang warna kuning
              </li>
              <li>
                Jenjang SIII dijilid cover plastik bening dan cover belakang
                warna merah
              </li>
            </ul>
          </div>
          <li>
            Jenjang SIII dijilid cover plastik bening dan cover belakang warna
            merah
          </li>
          <div className="pb-4 p-2">
            <ul className="list-disc pl-6">
              <li>Surat keterangan lulus seleksi akademik.</li>
              <li>Surat Keterangan aktif kuliah atau KRS.</li>
              <li>
                Fotocopy NPWP, halaman depan Buku Tabungan Bank Rakyat
                Indonesia/BRI yang bukan rekening gaji (di isi dan di upload
                dalam SIM Tubel).
              </li>
              <li>Surat keterangan berbadan sehat dari RS Pemerintah</li>
              <li>
                Surat Keterangan bebas narkoba minimal tiga zat pemeriksaan asli
                dari rumah sakit pemerintah/BNN
              </li>
            </ul>
          </div>
          <li>Dokumen Kelengkapan setelah Penetapan SK</li>
          <p>
            Dokumen yang harus dikirimkan ke Pusat Peningkatan Mutu SDMK setelah
            terbit Penetapan Surat Keputusan Tugas Belajar antara lain:
          </p>
          <div className="pb-4 p-2">
            <ul className="list-disc pl-6">
              <li>
                Surat keputusan Tugas Belajar dari Badan Kepegawaian Daerah
                (BKD) bagi PNS daerah, dari Biro Kepegawaian bagi PNS Pusat dan
                UPT.
              </li>
              <li>
                Perjanjian antara Pusat Peningkatan Mutu SDM Kesehatan dengan
                Peserta Tugas Belajar/ Peneriman Bantuan Tugas Belajar yang
                sudah ditandatangani diatas materai Rp. 6000,- dan diketahui
                oleh ketua Prodi di institusi pendidikan
              </li>
              <span className="italic">
                {" "}
                (didownload dalam Sistem Informasi Tugas Belajar)
              </span>
              <li>
                Surat Keputusan pemberhentian dari Jabatan struktural bagi
                pejabat struktural.
              </li>
              <li>
                Surat keputusan pembebasan sementara dari jabatan fungsional
                bagi pejabat fungsional
              </li>
              <span className="italic">
                (dikirimkan paling lambat tujuh bulan setelah perkuliahan).
              </span>
              <li>
                Surat keputusan pembebasan sementara dari jabatan fungsional
                bagi pejabat fungsional{" "}
              </li>
              <span className="italic">
                (dikirimkan paling lambat tujuh bulan setelah perkuliahan).
              </span>
            </ul>
          </div>
        </ol>
      </div>
    </div>
  );
};

export default Ketentuan;
