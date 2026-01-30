import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ProductCard from './ProductCard';
import ProductModal from './ProductModal';
import SectionHeader from './SectionHeader';

const ProductCatalogSection = ({ openWhatsApp }) => {
    const [selectedCategory, setSelectedCategory] = useState('semua');
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Data produk dari Shopee (update link sesuai produk asli)
    const products = [
        // ===== PAKAIAN PRIA =====
        {
            id: 1,
            category: 'pakaian-pria',
            image: 'https://down-id.img.susercontent.com/file/0b68cc7f91c646b0f40c34a11da12b84@resize_w900_nl.webp',
            title: 'Sweater / Jaket Pria Rajut Ariel Round Hand Hoodie & Zipper Pria',
            description: 'Tampil gaya dan hangat dengan Sweater / Jaket Pria Rajut Ariel Round Hand Hoodie & Zipper Pria! Dibuat dari bahan rajut premium yang lembut dan nyaman, sweater ini memiliki desain turtleneck yang elegan dengan potongan slim fit yang pas di badan. Tersedia dalam berbagai pilihan warna netral yang mudah dipadukan dengan outfit apapun. Cocok untuk gaya kasual maupun semi-formal.',
            price: 'Rp99.000',
            sales: 127,
            rating: 4.9,
            shopeeUrl: 'https://shopee.co.id/MASAKI-Sweater-Jaket-Pria-Rajut-Ariel-Round-Hand-Hoodie-Zipper-Pria-i.850151327.18947666185?extraParams=%7B%22display_model_id%22%3A182408777681%7D',
            delay: '0s',
        },
        {
            id: 2,
            category: 'pakaian-pria',
            image: 'https://down-id.img.susercontent.com/file/38e075f1dcb85f09e1c9ca40a54f59e8@resize_w900_nl.webp',
            title: 'Turtleneck Adam Pria',
            description: 'Tampil gaya dan hangat dengan Turtleneck Adam Pria! Dibuat dari bahan rajut premium yang lembut dan nyaman, sweater ini memiliki desain turtleneck yang elegan dengan potongan slim fit yang pas di badan. Tersedia dalam berbagai pilihan warna netral yang mudah dipadukan dengan outfit apapun. Cocok untuk gaya kasual maupun semi-formal.',
            price: 'Rp99.000',
            sales: 89,
            rating: 4.8,
            shopeeUrl: 'https://shopee.co.id/MASAKI-Turtleneck-Adam-Pria-i.850151327.17884361250?extraParams=%7B%22display_model_id%22%3A126680311034%7D',
            delay: '0.1s',
        },
        {
            id: 3,
            category: 'pakaian-pria',
            image: 'https://down-id.img.susercontent.com/file/id-11134207-8224u-mgrnbbygvyfj83@resize_w900_nl.webp',
            title: 'Heart Bloom Sweater',
            description: 'Hadir dengan desain yang ceria dan youthful, sweater rajut ini menampilkan motif hati berwarna pink dan krem yang tersusun rapi di atas dasar warna kuning yang hangat. Terbuat dari bahan rajut lembut yang nyaman di kulit, sweater ini memberikan rasa hangat tanpa terasa berat. Finishing rib pada bagian kerah, lengan, dan bawah sweater menambah kesan rapi dan berkualitas.',
            price: 'Rp99.000',
            sales: 65,
            rating: 4.7,
            shopeeUrl: 'https://shopee.co.id/MASAKI-Heart-Bloom-Sweater-i.850151327.50451018487?extraParams=%7B%22display_model_id%22%3A370092539844%7D',
            delay: '0.2s',
        },
        // ===== PAKAIAN WANITA =====
        {
            id: 4,
            category: 'pakaian-wanita',
            image: 'https://down-id.img.susercontent.com/file/id-11134211-7ra0r-mb577oqqca7o8d@resize_w900_nl.webp',
            title: 'Vintage Bunga Cardigan',
            description: 'Tampil cantik dan elegan dengan cardigan rajut motif bunga ini! Cardigan ini didesain dengan warna dasar krem yang lembut dipadukan dengan detail motif floral berwarna hijau dan hitam, memberikan kesan vintage dan feminin. Bagian kerah berbentuk V-neck dengan list hijau tua menambah aksen manis dan modern. Dilengkapi dengan kancing depan berwarna emas yang memberikan sentuhan klasik dan mewah.',
            price: 'Rp99.000',
            shopeeUrl: 'https://shopee.co.id/MASAKI-Vintage-Bunga-Cardigan-i.850151327.42204139947?extraParams=%7B%22display_model_id%22%3A265352751792%7D',
            delay: '0s',
        },
        {
            id: 5,
            category: 'pakaian-wanita',
            image: 'https://down-id.img.susercontent.com/file/id-11134207-82250-mgrnbbyh76z390.webp',
            title: 'Octagram Cardigan',
            description: 'Hadir dengan desain modern dan motif bintang geometris yang stylish, cardigan rajut ini cocok untuk kamu yang ingin tampil modis tanpa mengorbankan kenyamanan. Dibuat dari bahan rajut premium yang lembut, tebal, dan tidak mudah melar, sehingga nyaman dipakai sepanjang hari.',
            price: 'Rp99.000',
            shopeeUrl: 'https://shopee.co.id/MASAKI-Octagram-Cardigan-i.850151327.57301028095?extraParams=%7B%22display_model_id%22%3A340092595858%7D',
            delay: '0.1s',
        },
        {
            id: 6,
            category: 'pakaian-wanita',
            image: 'https://down-id.img.susercontent.com/file/id-11134207-8224q-mh49bdzt6pl679.webp',
            title: 'Cardigan Zenitsu Kimetsu No Yaiba Acrylic',
            description: 'Dress rajut dengan potongan yang menawan, cocok untuk acara formal maupun pesta.',
            price: 'Rp199.000',
            shopeeUrl: 'https://shopee.co.id/MASAKI-Cardigan-Zenitsu-Kimetsu-No-Yaiba-Acrylic-i.850151327.50901028237?extraParams=%7B%22display_model_id%22%3A350092632410%7D',
            delay: '0.2s',
        },
        {
            id: 7,
            category: 'pakaian-wanita',
            image: 'https://down-id.img.susercontent.com/file/id-11134211-7ra0h-mb577oqqt510ba@resize_w900_nl.webp',
            title: 'Cardigan Mobi Flower',
            description: 'Cardigan bahan cotton 100% ramah lingkungan, ciri khas motif desa/kampung rajut binong.',
            price: 'Rp349.000',
            shopeeUrl: 'https://shopee.co.id/MASAKI-Cardigan-Mobi-Flower-by-billa-ktf-i.850151327.43651435746?extraParams=%7B%22display_model_id%22%3A280116338729%7D',
            delay: '0s',
        },
        {
            id: 8,
            category: 'pakaian-wanita',
            image: 'https://down-id.img.susercontent.com/file/id-11134207-7r98p-luolrlibss7082@resize_w900_nl.webp',
            title: 'Cardigan Rajut Salur Lengan Balon',
            description: 'Tampil Cantik Dengan Menggunakan Cardigan Rajut ini! Memiliki Model Simple Dan Motif Cantik Dengan Bahan Rajut Yang Halus Dan Nyaman , Tetap Cocok Bila Kamu Padukan Dengan Bawahan Jenis Apapun dan cocok untuk berhijab & Non-Hijab.',
            price: 'Rp99.000',
            shopeeUrl: 'https://shopee.co.id/MASAKI-Cardigan-Rajut-Salur-Lengan-Balon-i.850151327.19644851233?extraParams=%7B%22display_model_id%22%3A39066876555%7D',
            delay: '0.1s',
        },
        {
            id: 9,
            category: 'pakaian-wanita',
            image: 'https://down-id.img.susercontent.com/file/id-11134207-7ra0u-mda0lseqxb981e.webp',
            title: 'Binora Knit Vest',
            description: 'BINORA Merupakan nama Produk vest yang terinspirasi dari gabungan 3 elemen khas,Kampoeng Radjoet Binong Djati. Yaitu Daun Binong dan Pola Rajutan Bungan Telang. Nama ini merepresentasikan perpaduan antara kekayaan motif lokal dan eksplorasi desain dimana binong memberikan identitas visual kuat. bunga telang telah melambangkan keindahan Alami, dan teknik rajutan menjadi ciri khas utama produk busana yang dihasilkan.',
            price: 'Rp99.000',
            shopeeUrl: 'https://shopee.co.id/MASAKI-Binora-Knit-Vest-by-Kendisa-i.850151327.42607423968?extraParams=%7B%22display_model_id%22%3A300629628513%7D',
            delay: '0.2s',
        },
        {
            id: 10,
            category: 'pakaian-wanita',
            image: 'https://down-id.img.susercontent.com/file/id-11134207-7r98o-luolrlibyegsdd@resize_w900_nl.webp',
            title: 'Sweater Asuna',
            description: 'Tampil Cantik Dengan Menggunakan SWEATER ini! Memiliki Model Simple Dan Motif Cantik Dengan Bahan Rajut Yang Halus Dan Nyaman , Tetap Cocok Bila Kamu Padukan Dengan Bawahan Jenis Apapun dan cocok untuk berhijab & Non-Hijab',
            price: 'Rp95.900',
            shopeeUrl: 'https://shopee.co.id/MASAKI-Sweater-Asuna-i.850151327.19383959846?extraParams=%7B%22display_model_id%22%3A39697326137%7D',
            delay: '0s',
        },
        {
            id: 11,
            category: 'pakaian-wanita',
            image: 'https://down-id.img.susercontent.com/file/id-11134207-7r98w-luolrlibvlbw0c.webp',
            title: 'Sweater Rajut Wanita Diorra Oversize',
            description: 'Hadir dengan desain modern dan motif bintang geometris yang stylish, cardigan rajut ini cocok untuk kamu yang ingin tampil modis tanpa mengorbankan kenyamanan. Dibuat dari bahan rajut premium yang lembut, tebal, dan tidak mudah melar, sehingga nyaman dipakai sepanjang hari.',
            price: 'Rp300.000',
            shopeeUrl: 'https://shopee.co.id/MASAKI-Sweater-Wajut-Wanita-Diorra-Oversize-i.850151327.23462900673?extraParams=%7B%22display_model_id%22%3A225903286344%7D',
            delay: '0.1s',
        },
        {
            id: 12,
            category: 'pakaian-wanita',
            image: 'https://down-id.img.susercontent.com/file/id-11134211-7ra0o-mb577oqqghx054@resize_w900_nl.webp',
            title: 'Cardigan Rajut Outer Etnik',
            description: 'Tampil Cantik Dengan Menggunakan Cardigan Rajut ini! Memiliki Model Simple Dan Motif Cantik Dengan Bahan Rajut Yang Halus Dan Nyaman , Tetap Cocok Bila Kamu Padukan Dengan Bawahan Jenis Apapun dan cocok untuk berhijab & Non-Hijab.',
            price: 'Rp250.000',
            shopeeUrl: 'https://shopee.co.id/MASAKI-Cardigan-Rajut-Outer-Etnik-i.850151327.14498234437?extraParams=%7B%22display_model_id%22%3A232087845164%7D',
            delay: '0.2s',
        },
        {
            id: 13,
            category: 'pakaian-wanita',
            image: 'https://down-id.img.susercontent.com/file/id-11134207-8224y-mgrp5tbm4c24e5@resize_w900_nl.webp',
            title: 'Sunny Sweater Rajut Lembut',
            description: 'Tampil manis dan stylish dengan Sweater Rajut Sunflower yang super lucu dan nyaman dipakai! Terbuat dari bahan rajut premium yang lembut, hangat, dan tidak bikin gatal, cocok untuk cuaca dingin maupun harian.',
            price: 'Rp99.000',
            shopeeUrl: 'https://shopee.co.id/MASAKI-Sunny-Sweater-Rajut-Lembut-i.850151327.50251018736?extraParams=%7B%22display_model_id%22%3A297136211971%7D',
            delay: '0s',
        },
        {
            id: 14,
            category: 'pakaian-wanita',
            image: 'https://down-id.img.susercontent.com/file/id-11134207-7rbk3-ma2ii35lcjtq65@resize_w900_nl.webp',
            title: 'Julja Aye Cable Knit',
            description: 'Tampil Cantik Dengan Menggunakan Cardigan Rajut ini! Memiliki Model Simple Dan Motif Cantik Dengan Bahan Rajut Yang Halus Dan Nyaman , Tetap Cocok Bila Kamu Padukan Dengan Bawahan Jenis Apapun dan cocok untuk berhijab & Non-Hijab ',
            price: 'Rp349.000',
            shopeeUrl: 'https://shopee.co.id/MASAKI-Julja-Aye-Cable-Knit-i.850151327.43101804576?extraParams=%7B%22display_model_id%22%3A275147769941%7D',
            delay: '0.1s',
        },
        {
            id: 15,
            category: 'pakaian-wanita',
            image: 'https://down-id.img.susercontent.com/file/75f4f2c97bb8ffecfd9f23dbf91fe301@resize_w900_nl.webp',
            title: 'Sweater Turtleneck Rajut Wanita',
            description: 'Tampil Cantik Dengan Menggunakan turtleneck ini! Memiliki Model Simple Dan Motif Cantik Dengan Bahan Rajut Yang Halus Dan Nyaman , Tetap Cocok Bila Kamu Padukan Dengan Bawahan Jenis Apapun dan cocok buat kalian yang slimbody.',
            price: 'Rp99.000',
            shopeeUrl: 'https://shopee.co.id/MASAKI-Sweater-Turtleneck-RAJUT-Kerah-Tinggi-RAJUT-Wanita-i.850151327.18847779444?extraParams=%7B%22display_model_id%22%3A212414481351%7D',
            delay: '0.2s',
        },
        {
            id: 16,
            category: 'pakaian-wanita',
            image: 'https://down-id.img.susercontent.com/file/id-11134207-81ztp-me5aym2nptdw0a.webp',
            title: 'Kimono Rajut Anime Series KNY',
            description: 'Kimono rajut ini terinspirasi dari gaya khas karakter anime populer, menampilkan motif kotak-kotak hijau dan hitam yang ikonik. Dibuat dari bahan rajut premium yang lembut dan nyaman, kimono ini menghadirkan kesan hangat sekaligus stylish. Desain open-front (tanpa kancing) dengan potongan longgar membuatnya mudah dipadukan dengan berbagai outfit, baik untuk tampilan kasual sehari-hari maupun untuk cosplay dan acara bertema anime.',
            price: 'Rp199.000',
            shopeeUrl: 'https://shopee.co.id/MASAKI-Kimono-Rajut-Anime-Series-KNY-Tanjiro-i.850151327.40264505955?extraParams=%7B%22display_model_id%22%3A276196259868%7D',
            delay: '0s',
        },
        {
            id: 17,
            category: 'pakaian-wanita',
            image: 'https://down-id.img.susercontent.com/file/id-11134207-8224o-mglw324xjea0c4@resize_w900_nl.webp',
            title: 'Kymi Vest Premium Rajut Wanita',
            description: 'Kymi vest premium rajut wanita ini terbuat dari bahan rajut premium yang lembut dan nyaman, vest ini menghadirkan kesan hangat sekaligus stylish. Desain open-front (tanpa kancing) dengan potongan longgar membuatnya mudah dipadukan dengan berbagai outfit, baik untuk tampilan kasual sehari-hari maupun untuk cosplay dan acara bertema anime.',
            price: 'Rp99.000',
            shopeeUrl: 'https://shopee.co.id/MASAKI-Kymi-Vest-Premium-Rajut-Wanita-i.850151327.52101013587?extraParams=%7B%22display_model_id%22%3A272136181914%7D',
            delay: '0.1s',
        },
        {
            id: 18,
            category: 'pakaian-wanita',
            image: 'https://down-id.img.susercontent.com/file/id-11134207-7r98x-luolrlic40qk99.webp',
            title: 'Cardi Flowers Crop',
            description: 'Tampil Cantik Dengan Menggunakan Cardigan Rajut ini! Memiliki Model Simple Dan Motif Cantik Dengan Bahan Rajut Yang Halus Dan Nyaman , Tetap Cocok Bila Kamu Padukan Dengan Bawahan Jenis Apapun dan cocok untuk berhijab & Non-Hijab.',
            price: 'Rp199.000',
            shopeeUrl: 'https://shopee.co.id/MASAKI-Cardi-Flowers-Crop-i.850151327.23282310996?extraParams=%7B%22display_model_id%22%3A225702208315%7D',
            delay: '0.2s',
        },
        {
            id: 19,
            category: 'pakaian-wanita',
            image: 'https://down-id.img.susercontent.com/file/id-11134211-7ra0r-mb577oqqca7o8d@resize_w900_nl.webp',
            title: 'Vintage Bunga Cardigan',
            description: 'Tampil cantik dan elegan dengan cardigan rajut motif bunga ini! Cardigan ini didesain dengan warna dasar krem yang lembut dipadukan dengan detail motif floral berwarna hijau dan hitam, memberikan kesan vintage dan feminin. Bagian kerah berbentuk V-neck dengan list hijau tua menambah aksen manis dan modern. Dilengkapi dengan kancing depan berwarna emas yang memberikan sentuhan klasik dan mewah.',
            price: 'Rp99.000',
            shopeeUrl: 'https://shopee.co.id/MASAKI-Vintage-Bunga-Cardigan-i.850151327.42204139947?extraParams=%7B%22display_model_id%22%3A265352751792%7D',
            delay: '0s',
        },
        {
            id: 20,
            category: 'pakaian-wanita',
            image: 'https://down-id.img.susercontent.com/file/id-11134207-7rbk2-ma12cx8xieb114@resize_w900_nl.webp',
            title: 'Sweater Angel Unisex',
            description: 'Tampil Cantik Dengan Menggunakan Sweater Rajut ini! Memiliki Model Simple Dan Motif Cantik Dengan Bahan Rajut Yang Halus Dan Nyaman , Tetap Cocok Bila Kamu Padukan Dengan Bawahan Jenis Apapun dan cocok untuk berhijab & Non-Hijab.',
            price: 'Rp199.000',
            shopeeUrl: 'https://shopee.co.id/MASAKI-Sweater-Angel-Unisex-i.850151327.43901514579?extraParams=%7B%22display_model_id%22%3A149187476790%7D',
            delay: '0.1s',
        },
        {
            id: 21,
            category: 'pakaian-wanita',
            image: 'https://down-id.img.susercontent.com/file/325ad19fa46809ee8bc00c39a6811d56@resize_w900_nl.webp',
            title: 'Inner Wanita Knit Tanktop Atasan Wanita',
            description: 'Tampil Cantik Dengan Menggunakan turtleneck ini! Memiliki Model Simple Dan Motif Cantik Dengan Bahan Rajut Yang Halus Dan Nyaman , Tetap Cocok Bila Kamu Padukan Dengan Bawahan Jenis Apapun dan cocok buat kalian yang slimbody.',
            price: 'Rp49.900',
            shopeeUrl: 'https://shopee.co.id/MASAKI-Inner-Wanita-Knit-Tanktop-Atasan-Wanita-i.850151327.20347751757?extraParams=%7B%22display_model_id%22%3A212413114825%7D',
            delay: '0.2s',
        },
        {
            id: 22,
            category: 'pakaian-wanita',
            image: 'https://down-id.img.susercontent.com/file/id-11134207-7r98p-luolrlic2m649d@resize_w900_nl.webp',
            title: 'Knit Pants Celana Kulot Wanita',
            description: 'Tampil Cantik Dengan Menggunakan Celana Kulot Rajut ni! Memiliki Model Simple Dan Motif Cantik Dengan Bahan Rajut Yang Halus Dan Nyaman , Tetap Cocok Bila Kamu Padukan Dengan Bawahan Jenis Apapun dan cocok untuk berhijab & Non-Hijab.',
            price: 'Rp199.000',
            shopeeUrl: 'https://shopee.co.id/MASAKI-Knit-Pants-Celana-Kulot-Wanita-Kulot-Knit-Celana-Panjang-Wanita-Long-Kulot-i.850151327.17884986409?extraParams=%7B%22display_model_id%22%3A148202462175%7D',
            delay: '0.2s',
        },
        {
            id: 23,
            category: 'pakaian-wanita',
            image: 'https://down-id.img.susercontent.com/file/id-11134207-7r990-luolrlibu6rg8a@resize_w900_nl.webp',
            title: 'Blouse Baju Rajut Batwing',
            description: 'Tampil Cantik Dengan Menggunakan Sweater Rajut ini! Memiliki Model Simple Dan Motif Cantik Dengan Bahan Rajut Yang Halus Dan Nyaman , Tetap Cocok Bila Kamu Padukan Dengan Bawahan Jenis Apapun dan cocok untuk berhijab & Non-Hijab.',
            price: 'Rp99.000',
            shopeeUrl: 'https://shopee.co.id/MASAKI-Blouse-Baju-Rajut-Batwing-Atasan-Wanita-Model-Kelelawar-i.850151327.13996267943?extraParams=%7B%22display_model_id%22%3A168120849256%7D',
            delay: '0s',
        },
        {
            id: 24,
            category: 'pakaian-wanita',
            image: 'https://down-id.img.susercontent.com/file/id-11134207-7r98t-luolrlibzt1822@resize_w900_nl.webp',
            title: 'Rok Span Rajut Knit All Size',
            description: 'Tampil Cantik Dengan Menggunakan Sweater Rajut ini! Memiliki Model Simple Dan Motif Cantik Dengan Bahan Rajut Yang Halus Dan Nyaman , Tetap Cocok Bila Kamu Padukan Dengan Bawahan Jenis Apapun dan cocok untuk berhijab & Non-Hijab.',
            price: 'Rp199.000',
            shopeeUrl: 'https://shopee.co.id/MASAKI-Sweater-Angel-Unisex-i.850151327.43901514579?extraParams=%7B%22display_model_id%22%3A149187476790%7D',
            delay: '0.1s',
        },
        {
            id: 25,
            category: 'pakaian-wanita',
            image: 'https://down-id.img.susercontent.com/file/325ad19fa46809ee8bc00c39a6811d56@resize_w900_nl.webp',
            title: 'Inner Wanita Knit Tanktop Atasan Wanita',
            description: 'Tampil Cantik Dengan Menggunakan turtleneck ini! Memiliki Model Simple Dan Motif Cantik Dengan Bahan Rajut Yang Halus Dan Nyaman , Tetap Cocok Bila Kamu Padukan Dengan Bawahan Jenis Apapun dan cocok buat kalian yang slimbody.',
            price: 'Rp49.900',
            shopeeUrl: 'https://shopee.co.id/MASAKI-Inner-Wanita-Knit-Tanktop-Atasan-Wanita-i.850151327.20347751757?extraParams=%7B%22display_model_id%22%3A212413114825%7D',
            delay: '0.2s',
        },
        // ===== TAS WANITA =====
        {
            id: 26,
            category: 'tas-wanita',
            image: 'https://down-id.img.susercontent.com/file/id-11134211-7ra0q-mbmbdyv5dj0z90@resize_w900_nl.webp',
            title: 'Pleated Knit Tote Bag',
            description: 'Tampil gaya dan fungsional dengan Pleated Knit Tote Bag! Tas tote rajut ini memiliki desain lipit yang unik dan modern, memberikan sentuhan fashion-forward pada gaya kasual Anda. Terbuat dari bahan rajut berkualitas yang lembut namun kuat, tas ini cukup lapang untuk membawa barang-barang esensial seperti dompet, ponsel, makeup, dan bahkan tablet kecil. Tali bahu yang kokoh memastikan kenyamanan saat dibawa bepergian.',
            price: 'Rp99.000',
            sales: 256,
            rating: 4.8,
            shopeeUrl: 'https://shopee.co.id/MASAKI-Pleated-Knit-Tote-Bag-(Bonja-by-Sekar)-i.850151327.40806715487?extraParams=%7B%22display_model_id%22%3A275566239025%7D',
            delay: '0s',
        },
        {
            id: 27,
            category: 'tas-wanita',
            image: 'https://down-id.img.susercontent.com/file/id-11134207-7r991-luopl1smkyoa0b.webp',
            title: 'Tas Rajut Andin / Tas Wanita / Tas Pesta Handbag Tote Bag',
            description: 'Tampil elegan dan chic dengan Tas Rajut Andin! Terinspirasi dari gaya ikonik, tas rajut ini memadukan sentuhan klasik dengan nuansa modern. Dibuat dari bahan rajut berkualitas yang lembut namun kokoh, tas ini memiliki bentuk handbag yang ramping namun cukup lapang untuk menyimpan barang-barang penting seperti ponsel, dompet, kunci, dan makeup. Desainnya yang minimalis namun tetap statement membuatnya cocok untuk berbagai acara, mulai dari hangout santai hingga pesta formal.',
            price: 'Rp45.000',
            sales: 423,
            rating: 4.9,
            shopeeUrl: 'https://shopee.co.id/product/tas-sling-1',
            delay: '0.1s',
        }
    ];

    const categories = [
        { id: 'semua', label: 'Semua Produk' },
        { id: 'pakaian-pria', label: 'Pakaian Pria' },
        { id: 'pakaian-wanita', label: 'Pakaian Wanita' },
        { id: 'tas-wanita', label: 'Tas Wanita' },
    ];

    const filteredProducts = selectedCategory === 'semua'
        ? products
        : products.filter(p => p.category === selectedCategory);

    const handleAddToCart = (product) => {
        // Redirect ke Shopee
        if (product.shopeeUrl) {
            window.open(product.shopeeUrl, '_blank');
        }
    };

    const handleProductClick = (product) => {
        setSelectedProduct(product);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setTimeout(() => {
            setSelectedProduct(null);
        }, 300);
    };

    return (
        <section id="catalog" className="py-16 md:py-24 bg-[#fcf9f8] dark:bg-[#0d0a08]">
            <div className="container mx-auto px-4 md:px-8 max-w-6xl">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <SectionHeader
                        subtitle="BELANJA DI SHOPEE"
                        title="Katalog Produk Rajutan MERAKIT"
                        description="Jelajahi koleksi produk rajutan handmade berkualitas tinggi. Klik produk untuk membeli langsung di Shopee!"
                    />
                </motion.div>

                {/* Category Filter */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true, amount: 0.3 }}
                    className="flex flex-wrap justify-center gap-3 mt-12 mb-12"
                >
                    {categories.map((category) => (
                        <motion.button
                            key={category.id}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setSelectedCategory(category.id)}
                            className={`px-5 py-2.5 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 ${selectedCategory === category.id
                                ? 'bg-primary text-white shadow-lg'
                                : 'bg-white dark:bg-[#1f1612] text-[#1c120d] dark:text-white border border-[#e8d7ce] dark:border-white/10 hover:border-primary dark:hover:border-primary'
                                }`}
                        >
                            {category.label}
                        </motion.button>
                    ))}
                </motion.div>

                {/* Products Grid */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    viewport={{ once: true, amount: 0.1 }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    {filteredProducts.map((product) => (
                        <ProductCard
                            key={product.id}
                            {...product}
                            onAddToCart={handleAddToCart}
                            onProductClick={handleProductClick}
                        />
                    ))}
                </motion.div>

                {/* Product Modal */}
                <ProductModal
                    product={selectedProduct}
                    isOpen={isModalOpen}
                    onClose={handleCloseModal}
                    onAddToCart={handleAddToCart}
                />
            </div>
        </section>
    );
};

export default ProductCatalogSection;
