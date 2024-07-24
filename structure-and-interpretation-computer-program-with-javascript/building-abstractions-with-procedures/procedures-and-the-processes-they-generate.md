# Procedures and the Process They Generate

Tanpa memahami bagaimana sebuah procedure bekerja kita seperti seorang pemain catur yang hanya tahu cara bermain tapi tidak mengetahui strategi di balik permainan catur itu sendiri.

Kita tidak tahu kapan harus melakukan atau tidak melakukan sebuah opening. Kita tidak punya pengetahuan akan resiko dari setiap gerakan yang kita ambil.

Di bahasan kali ini kita akan coba belajar dan memeriksa dengan teliti tiap proses yang dihasilkan dari sebuah procedure. Bagaimana sebuah procedure itu terkait dengan procedure sebelumnya.

Kita juga akan lihat kaitannya dengan sumber daya memori dan komputasi.

## Linear recursion and iteration

Kita coba lihat dari contoh mencari bilangan faktorial.

Untuk mencari bilangan faktorial kita bisa menggunakan rumus seperti di bawah ini:

```
n! = n.(n - 1).(n - 2).dst
```

atau dengan kata lain,

```
n! = n.(n - 1)!
```

Bila kita coba buat dalam kode scheme, rumus bilangan faktorial di atas akan menjadi seperti ini:

```scheme
(define (factorial n)
    (if (= n 1)
        1
        (* n (factorial (- n 1)))))
```

Bila dijabarkan dalam bentuk tabel dengan metode substitusi, procedure di atas akan terlihat seperti ini.

```scheme
(factorial 6) ; invoke procedure
```

| Langkah | Ekspresi                   | Evaluasi                                         |
| ------- | -------------------------- | ------------------------------------------------ |
| 1       | (factorial 6)              | (\* 6 (factorial 5))                             |
| 2       | (factorial 5)              | (\* 6 (\* 5 (factorial 4)))                      |
| 3       | (factorial 4)              | (\* 6 (\* 5 (\* 4 (factorial 3))))               |
| 4       | (factorial 3)              | (\* 6 (\* 5 (\* 4 (\* 3 (factorial 2)))))        |
| 5       | (factorial 2)              | (\* 6 (\* 5 (\* 4 (\* 3 (\* 2 (factorial 1)))))) |
| 6       | (factorial 1)              | (\* 6 (\* 5 (\* 4 (\* 3 (\* 2 1)))))             |
| 7       | (= n 1)                    | (\* 6 (\* 5 (\* 4 (\* 3 2))))                    |
| 8       | (\* n (factorial (- n 1))) | (\* 6 (\* 5 (\* 4 6)))                           |
| 9       | (= n 1)                    | (\* 6 (\* 5 24))                                 |
| 10      | 1                          | (\* 6 120)                                       |
| 11      | -                          | 720                                              |

Bila dilihat dari tabel di atas (kolom evaluasi), ukuran komputasi meningkat secara linear berdasarkan argumen dari procedure yang diberikan. Proses seperti ini yang dinamakan linear rekursif, ada pertumbuhan yang linear (mengikuti argumen yang diberikan) dalam setiap rekursif procedure.

## Eksponentiation

Cara menghitung bilangan eksponensial.

```scheme
(define (expt a n)
   (if (= n 0)
       1
       (* a (expt a (n - 1)))))
```

atau

```scheme
(define (expt a n)
    (expt-iter a n 1))

(define (expt-iter a counter result)
    if(= counter 0)
        result
        (expt-iter a (counter - 1) (* b result)))
```

dua kode di atas menghasilkan nilai yang serupa namun berbeda dari segi efisiensi. Kode kedua lebih efisien karena menggunakan teknik tail recursion.
