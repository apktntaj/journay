# Linear recursion and iteration

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

| Langkah | Ekspresi                             | Evaluasi                                         |
| ------- | ------------------------------------ | ------------------------------------------------ |
| 1       | (factorial 6)                        | (\* 6 (factorial 5))                             |
| 2       | (factorial 5)                        | (\* 6 (\* 5 (factorial 4)))                      |
| 3       | (factorial 4)                        | (\* 6 (\* 5 (\* 4 (factorial 3))))               |
| 4       | (factorial 3)                        | (\* 6 (\* 5 (\* 4 (\* 3 (factorial 2)))))        |
| 5       | (factorial 2)                        | (\* 6 (\* 5 (\* 4 (\* 3 (\* 2 (factorial 1)))))) |
| 6       | (factorial 1)                        | (\* 6 (\* 5 (\* 4 (\* 3 (\* 2 1)))))             |
| 7       | (\* 6 (\* 5 (\* 4 (\* 3 (\* 2 1))))) | (\* 6 (\* 5 (\* 4 (\* 3 2))))                    |
| 8       | (\* 6 (\* 5 (\* 4 (\* 3 2))))        | (\* 6 (\* 5 (\* 4 6)))                           |
| 9       | (\* 6 (\* 5 (\* 4 6)))               | (\* 6 (\* 5 24))                                 |
| 10      | (\* 6 (\* 5 24))                     | (\* 6 120)                                       |
| 11      | (\* 6 120)                           | 720                                              |

**Sekarang**

Mari lihat cara lain untuk mencari bilangan faktorial.

```scheme
(define (factorial n)
    (fact-iter 1 1 n))

(define (fact-iter result counter limit)
    (if (> counter limit)
        result
        (fact-iter (* result counter) (+ counter 1) limit)))
```

Sekarang mari lihat urutan evaluasinya

| Langkah | Ekspresi           | Evaluasi            |
| ------- | ------------------ | ------------------- |
| 1       | (factorial 6)      | (fact-iter 1 1 6)   |
| 2       | (fact-iter 1 1 6)  | (fact-iter 1 2 6)   |
| 3       | (fact-iter 1 2 6)  | (fact-iter 2 3 6)   |
| 4       | (fact-iter 2 3 6)  | (fact-iter 6 4 6)   |
| 5       | (fact-iter 6 4 6)  | (fact-iter 24 5 6)  |
| 6       | (fact-iter 24 5 6) | (fact-iter 120 6 6) |
| 7       | (fact-iter 72 2 6) | 720                 |

Beberapa hal berbeda yang bisa kita lihat untuk masalah yang sama dari contoh di atas adalah:

- Keduannya memiliki shape yang berbeda, yang satu bertumbuh relatif terhadap input n, sedangkan yang satunya tetap.
- Pada procedure rekursif (contoh pertama), hasil perkalian ditunda hingga semua proses selesai. Sedangkan pada contoh kedua (iteratif), hasilnya bisa terlihat diurutan manapun proses sedang berjalan.

```
 (\* 6 (\* 5 (\* 4 (\* 3 (factorial 2)))))
```

```
(fact-iter 6 4 6)
```
