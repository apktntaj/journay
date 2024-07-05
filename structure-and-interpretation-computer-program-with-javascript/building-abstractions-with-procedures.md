# BUILDING ABSTRACTIONS WITH PROCEDURES

> The acts of the mind, wherein it exerts its power over simple ideas, are chiefly these three: 1. Combining several simple ideas into one compound one, and thus all complex ideas are made. 2. The second is bringing two ideas, whether simple or complex, together, and setting them by one another so as to take a view of them at once, without uniting them into one, by which it gets all its ideas of relations. 3. The third is separating them from all other ideas that accompany them in their real existence: this is called abstraction, and thus all its general ideas are made. —John Locke, An Essay Concerning Human Understanding (1690)

## The elements of programming

Program yang kompleks dirakit oleh unit-unit program yang kecil (procedures). Ini bisa dilakukan karena tiap bahasa memiliki setidaknya tiga syarat untuk melakukan itu.

- Primitive expressions
- Means of combinations
- Means of abstraction

### Expressions

Ekspresi adalah kode yang menghasilkan value.

Contoh ekspresi dalam bahasa Scheme yang menggunakan _prefix notation_.

```scheme
456 ; Ekspresi sederhana

; Ekspresi kombinasi
(+ 137 349)
(- 1000 334)
(+ 2.7 10)

(+ (* 3 5) (- 10 6))
(+ (* 3
      (+ (* 2 4)
         (+ 3 5)))
   (+ (- 10 7)
      6))
```

Contoh ekspresi dalam bahasa Go yang menggunakan _infix notation_.

```go
456 // Ekspresi sederhana

// Ekspresi kombinasi
137 + 349
1000 - 334
2.7 + 10

(3 * 5) + (10 -6)
(3 * ((2 * 4) + (3 + 5)))+((10 - 7) + 6)
```

### Naming and Environment

Memberikan nama pada sebuah data merupakan salah satu cara yang diberikan bahasa pemrograman untuk mengabstraksi sebuah data. Dengannya kode menjadi lebih mudah dibaca dan memiliki konteks.

```scheme
(define pi 3.14159)
(define radius 10)

(* pi (* radius radius))
314.159

(define circumference (* 2 pi radius))

circumference ; 62.8318
```

```go
package main

import "fmt"

func main() {
	var pi float32 = 3.14159
	var radius float32 = 10

	var circumference float32 = 2 * pi * radius

	fmt.Println(circumference) // 62.831802
}
```

Setiap kali kita membuat variabel, artinya kita membuat blok memori dan mengasosikannya ke sebuah nama yang sewaktu-waktu bisa kita akses (environment).

### Evaluating Combinations

![Flow dari evaluasi sebuah kombinasi](./assets/SICP/evaluating-combinations.png)

<!-- <img src="./assets/SICP/evaluating-combinations.png" alt="Image" width="100" height="100"> -->

### Compound Procedures/ Function

Adalah cara menggabungkan beberapa operasi gabungan menjadi satu kesatuan unit. Procedure sebenarnya hampir sama dengan function.

```scheme
(define (square x) (* x x))
```

```javascript
function square(x) {
  return x * x;
}
```

Anatomi function sederhana terdiri dari:

- Nama function
- Parameter
- Body function

Pada contoh di atas nama function adalah square. Parameter hanya satu yaitu "x" dan body function yang berisi operasi perkalian "parameter x".

setelah mendeklarasikan function kita bisa memanggil function dengan memasukkan argumen (parameter yang telah masukkan ekspresi/nilai).

```scheme
(square 21)
```

```javascript
square(21);
```

Kedua fungsi diatas akan menghasilkan nilai 441.

Function adalah cara mengabstraksi yang lebih "kompleks" dibandingkan dengan naming variabel.

Setelah membuat function, kita juga bisa membuat operasi kombinasi menggunakan function.

```scheme
(+ (square x) (square y))
```

```javascript
square(3) + square(4);
```

atau bahkan membuat function yang berisi komposisi function lainnya.

```scheme
(define (sum-of-squares x y)
  (+ (square x) (square y)))

(sum-of-squares 3 4) ; Hasilnya adalah 25
```

```javascript
function sumOfSquares(x, y) {
  return square(x) + square(y);
}

sumOfSquares(3, 4); // Hasilnya adalah 25
```

Dengan membuat function kita seperti memiliki blok lego yang bisa kita rakit sesuka hati kita

```scheme
(define (f a)
  (sum-of-squares (+ a 1) (* a 2)))

(f 5) ; Hasilnya 136
```

```javascript
p;

f(5); // Hasilnya adalah 136
```

### The Subtitution Model for Procedure Application

Sekarang mari kita lihat bagaimana urutan sebuah function di-evaluasi oleh compiler/transpiler.

Sebagai contoh mari gunakan function sebelumnya.

```javascript
f(5);
```

Urutannya:

| Urutan | Evaluasi                                           | Aplikasi kode                    |
| ------ | -------------------------------------------------- | -------------------------------- |
| 1      | Evaluasi body function f(5)                        | sumOfSquares(a + 1, a \* 2)      |
| 2      | Substitusi paramater dengan argumen                | sumOfSquares(5 + 1, 5 \* 2)      |
| 3      | Evaluasi body function sumOfSquares(5 + 1, 5 \* 2) | square (x) + square (x)          |
| 4      | Substitusi paramater dengan argumen                | square (5 + 1) + square (5 \* 2) |
| 5      | Evaluasi body function square(6) dan square(10)    | (x \* x) + (x \* x)              |
| 6      | Substitusi paramater dengan argumen                | (6 \* 6) + (10 \* 10)            |

Hasilnya evaluasi adalah 136.

Proses di atas biasa disebut dengan **substitution model** for function application.

### Applicative Order vs Normal Order

Dalam applicative order, argumen fungsi dievaluasi sebelum fungsi dipanggil. Jadi, dalam konteks kode Anda, berikut adalah urutan evaluasi untuk pemanggilan f(5) dalam applicative order:

- Hitung a + 1 dan a \* 2 (dengan a adalah 5), hasilnya adalah 6 dan 10.
- Panggil sumOfSquares(6, 10).
- Dalam sumOfSquares, panggil square(6) dan square(10), hasilnya adalah 36 dan 100.
- Tambahkan hasil dari square(6) dan square(10) untuk mendapatkan 136.
- Kembalikan 136 sebagai hasil dari f(5).
  Normal Order (Lazy Evaluation)

Dalam normal order, ekspresi tidak dievaluasi sampai nilai mereka benar-benar diperlukan. Berikut adalah urutan evaluasi untuk pemanggilan f(5) dalam normal order:

- Panggil sumOfSquares(a + 1, a \* 2) dengan a adalah 5.
- Dalam sumOfSquares, panggil square(a + 1) dan square(a \* 2).
- Sekarang, evaluasi a + 1 dan a \* 2 (dengan a adalah 5), hasilnya adalah 6 dan 10.
- Hitung square(6) dan square(10), hasilnya adalah 36 dan 100.
- Tambahkan hasil dari square(6) dan square(10) untuk mendapatkan 136.
- Kembalikan 136 sebagai hasil dari f(5).
  Perbedaan

Perbedaan utama antara dua urutan ini adalah kapan argumen fungsi dievaluasi. Dalam applicative order, argumen dievaluasi sebelum fungsi dipanggil. Dalam normal order, argumen tidak dievaluasi sampai nilai mereka benar-benar diperlukan. Dalam banyak kasus, hasil akhirnya akan sama, tetapi urutan operasi yang sebenarnya dapat berbeda.

### Square Roots by Newton’s Method

Cara mencari akar kuadrat ala Newton:

- Ambil satu bilangan sembarang lalu kuadratkan.
- Bila hasil masih belum sesuai, ambil nilai rata-rata nilai y + x/y .Dimana y adalah bilangan tebakan dan x adalah angka yang ingin dicari akar kuadratnya.
- Ulangi proses di atas hingga mendekati nilai x.

```scheme
(define (sqrt-iter guess x)
  (if (good-enough? guess x)
      guess
      (sqrt-iter (improve guess x) x)))

(define (improve guess x)
  (average guess (/ x guess)))

(define (average x y)
  (/ (+ x y) 2))

(define (good-enough? guess x)
  (< (abs (- (square guess) x)) 0.001))

(define (sqrt x)
  (sqrt-iter 1.0 x))

(define (sqrt-iter guess x)
  (new-if (good-enough? guess x)
          guess
          (sqrt-iter (improve guess x) x)))

(sqrt 9) ; 3.00009155413138
```
