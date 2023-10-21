// import express
import express from "express";
 
// init express router
const router = express.Router();

router.get('/biodata/:nama/:tempat/:tanggal/:jk/:Agama/:Alamat/:Telepon/:Email/:Hobi/:Cita_Cita', (req, res) => {
    var nama = req.params.nama;
    var tempat_lahir = req.params.tempat;
    var tanggal_lahir = req.params.tanggal;
    var Jenis_Kelamin = req.params.jk;
    var Agama = req.params.Agama;
    var Alamat = req.params.Alamat;
    var Telepon = req.params.Telepon;
    var Email = req.params.Email;
    var Hobi = req.params.Hobi;
    var Cita_Cita = req.params.Cita_Cita;
        res.send(
            'Nama : ' + nama + '<br>' +
            'Tempat Lahir : '+ tempat_lahir +' <br>' +
            'Tanggal Lahir : ' + tanggal_lahir +' <br>' +
            'Jenis Kelamin : ' + Jenis_Kelamin +' <br>' +
            'Agama : ' + Agama + '<br>' +
            'Alamat :  '  + Alamat +  '<br>' +
            'Telepon : ' + Telepon +' <br>' +
            'Email : ' + Email + ' <br>' +
            'Hobi : '+ Hobi + ' <br>' +
            'Cita-cita :' + Cita_Cita + '<br>' 
            );
    });
    
    router.get('/aritmatika', (req, res) => {
        var bilangan  =10;
        var bilangan2 =5;
        var tambah = bilangan + bilangan2;
        var kurang = bilangan - bilangan2;
        var bagi = bilangan / bilangan2;
        var kali = bilangan * bilangan2;
        res.send(
        '<h3>Penjumlahan</h3>' +
        'bilangan 1 :' + bilangan + '<br>' +
        'bilangan 2 :' + bilangan2 + '<br>' +
        'Hasil :' + tambah + '<hr>' +
    
        '<h3>Pembagian</h3>' +
        'bilangan 1 :' + bilangan + '<br>' +
        'bilangan 2 :' + bilangan2 + '<br>' +
        'Hasil :' + bagi + '<br>' +
    
        '<h3>perkalian</h3>' +
        'bilangan 1 :' + bilangan + '<br>' +
        'bilangan 2 :' + bilangan2 + '<br>' +
        'Hasil :' + kali  + '<br>' +
    
        '<h3>Pengurangan</h3>' +
        'bilangan 1 :' + bilangan + '<br>' +
        'bilangan 2 :' + bilangan2 + '<br>' +
        'Hasil :' + kurang + '<br>'
        );
    });
    
    router.get('/Bangun_datar', (req, res) => {
       var sisi = 5;
       var persegi = sisi * sisi;
       var panjang = 15;
       var lebar = 10;
       var persegi_panjang = panjang * lebar;
       var v = 3.14;
       var jari_jari = 14;
       var lingkaran = v * jari_jari * jari_jari;
       var alas = 20;
       var tinggi = 16;
       var segitiga = 1/2 * alas * tinggi;
       res.send(
        '<h2>Bangun Datar</h2>' +
    
        '<h3>Persegi</h3>' +
        'Nilai sisi :' + sisi + '<br>' +
        'Rumus persegi : sisi kali sisi' + '<br>' +
        'Hasil :' + persegi + 'cm' + '<br>' + '<hr>' +
    
        '<h3>Persegi Panjang</h3>' +
        'Nilai Panjang :' + panjang + '<br>' +
        'Nilai lebar :' + lebar + '<br>' +
        'Rumus Persegi Panjang : Panjang Kali Lebar' + '<br>' +
        'Hasil :' + persegi_panjang + 'cm' + '<br>' + '<hr>' +
    
        '<h3>Lingkaran</h3>' +
        'Nilai v :' + v + '<br>' +
        'Nilai jari-jari :' + jari_jari + '<br>' +
        'Rumus Lingkaran : v x r2' + '<br>' +
        'Hasil :' + lingkaran + 'cm2' + '<br>' + '<hr>' +
    
        '<h3>Segitiga</h3>' +
        'Nilai alas :' + alas + '<br>' +
        'Nilai tinggi :' + tinggi + '<br>' +
        'Rumus segitiga : 1/2 x alas x tinggi' + '<br>' +
        'Hasil :' + segitiga + 'cm' + '<br>' + '<hr>' 
    
        );
    });
    
    router.get('/tes/:nama/:kelas/:pts/:pas', (req, res) => {
        var nama = req.params.nama;
        var kelas = req.params.kelas;
        var pts = parseInt(req.params.pts);
        var pas = parseInt(req.params.pas);
        
        var rapot = (pts + pas) / 2;
    
        if (rapot >= 90 && rapot <= 100) {
            var grade = 'Grade A';
        } else if (rapot >= 80) {
            var grade = 'Grade B';
        } else if (rapot >= 70) {
            var grade = 'Grade C';
        } else if (rapot >= 60) {
            var grade = 'Grade D';
        } else if (rapot >= 50) {
            var grade = 'Grade E';
        } else if (rapot >= 0) {
            var grade = 'Diajar Cing Getol!!!';
        } else {
            var grade = 'Nilai Tidak Valid'
        }
        res.send(
                'Nama : ' + nama + '<br>' +
                'Kelas : '+ kelas +' <br>' +
                'Nilai PTS : ' + pas +' <br>' +
                'Nilai PAS : ' + pts +' <br>' +
                'Nilai Rapot : ' + rapot + '<br>' +
                'Keterangan : ' + grade + '<br>'
                );
        });
    
    router.get('/Bersarang/:Nama/:Jurusan/:kelas', (req, res) => {
            var Nama = req.params.Nama;
            var jurusan = req.params.Jurusan;
            var kelas = req.params.kelas;
    
            if ( jurusan == 'RPL') { 
                if (kelas == '10 RPL') {
                    var ket = "Anda Kelas 10 RPL";
                } else if (kelas == '11 RPL') {
                    var ket = "Anda Kelas 11 RPL";
                }else if (kelas == '12 RPL') {
                    var ket = "Anda Kelas 12 RPL";
                } else {
                    var ket = "Anda Alumni cuy !";
                }
            } else if ( jurusan == 'TKRO') { 
                 if (kelas == '10 TKRO') {
                    var ket = "Anda Kelas 10 TKRO";
                } else if (kelas == '11 TKRO') {
                    var ket = "Anda Kelas 11 TKRO";
                } else if (kelas == '12 TKRO') {
                    var ket = "Anda Kelas 12 TKRO";
                } else {
                    var ket = "Anda Alumni cuy !";
                }
        } else if ( jurusan == 'TBSM') { 
                if (kelas == '10 TBSM') {
                    var ket = "Anda Kelas 10 TBSM";
                } else if (kelas == '11 TBSM') {
                    var ket = "Anda Kelas 11 TBSM";
                } else if (kelas == '12 TBSM') {
                    var ket = "Anda Kelas 12 TBSM";
                } else {
                    var ket = "Anda Alumni cuy !";
                }
        } else {
            var ket = 'Jurusan Tidak Tersedia'
        }
        res.send(
                'Nama :' + Nama + '<br>' +
                'Jurusan :' + ket + '<br>'
                );
            });
    
    router.get('/Starbucks/:nama/:tanggal/:jenis/:pesanan/:jumlah', (req, res) => {
    
        var nama = req.params.nama
        var tanggal = req.params.tanggal
        var jenis = req.params.jenis
        var pesanan = req.params.pesanan
        var jumlah = req.params.jumlah
    
        if (jenis == 'Makanan') {
            if (pesanan == 'Nasi Goreng'){
                var harga = 20000;
            } else if (pesanan == 'Mie Goreng'){
                var harga = 30000;
            } else if (pesanan == 'Ayam Goreng'){
                var harga = 40000;
            } else {
                var pesanan = "Tidak ada di daftar menu"
            }
        } else if (jenis == 'Minuman') {
            if (pesanan == 'Air Mineral'){
                var harga = 100000;
            } else if (pesanan == 'Jus'){
                var harga = 20000;
            } else if (pesanan == 'Kopi'){
                var harga = 30000;
            } else {
                var pesanan = "Tidak ada di daftar menu"
            }
        }
    
        var total = harga * jumlah;
    
        if (total >= 100000){
            var diskon = total * 0.5
        } else {
            var diskon = 0
        }
    
        var total_pembayaran = total - diskon;
                
                res.send(
                    'Nama Pembeli : ' + nama + '<br>' +
                    'Tanggal : ' + tanggal + '<br>' +
                    'Jenis : ' + jenis + '<br>' +
                    'Pesanan : ' + pesanan + '<br>' +
                    'Harga : ' + harga + '<br>' +
                    'Jumlah : ' + jumlah + '<br>' +
                    '------------------------------<br>' +
                    'Total : ' + total + '<br>' +
                    'Diskon 50% : ' + diskon + '<br>' +
                    'Total Pembayaran : ' + total_pembayaran 
                 )
             });

    router.get('/Sample', (req, res) => {
    
         res.send(
            '<h3>Siuuuuuuuu</h3>'        
              );
         });

// export default router
export default router;