# BUILDING ABSTRACTIONS WITH PROCEDURES

> The acts of the mind, wherein it exerts its power over simple ideas, are chiefly these three: 1. Combining several simple ideas into one compound one, and thus all complex ideas are made. 2. The second is bringing two ideas, whether simple or complex, together, and setting them by one another so as to take a view of them at once, without uniting them into one, by which it gets all its ideas of relations. 3. The third is separating them from all other ideas that accompany them in their real existence: this is called abstraction, and thus all its general ideas are made. —John Locke, An Essay Concerning Human Understanding (1690)

## The elements of programming

Program yang kompleks dirakit oleh unit-unit program yang kecil (procedures). Ini bisa dilakukan karena tiap bahasa memiliki setidaknya tiga syarat untuk melakukan itu.

- Primitive expressions
- Means of combinations
- Means of abstraction

**Expressions**
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

**Naming and Environment**

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

**Evaluating Combinations**
![Flow dari evaluasi sebuah kombinasi](./assets/SICP/evaluating-combinations.png)

<!-- <img src="./assets/SICP/evaluating-combinations.png" alt="Image" width="100" height="100"> -->

**Compound Procedures** adalah cara menggabungkan beberapa operasi gabungan menjadi satu kesatuan unit. Procedure sebenarnya hampir sama dengan function.

```scheme
(define (square x) (* x x))

(define (sum-of-squares x y)
  (+ (square x) (square y)))

(sum-of-squares 3 4) ; 25
```

```go
package main

import "fmt"

func square(x int) int {
	return x * x
}

func sumOfSquares(num1, num2 int) int {
	return square(num1) + square(num2)
}

func main() {

	fmt.Println(sumOfSquares(3, 4)) // Hasilnya 25
}
```

Lihat bagaimana kita membangun sebuah kode dari fungsi-fungsi (mulai dari unit terkecil).
