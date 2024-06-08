# STRUCTURE AND INTERPRETATION OF COMPUTER PROGRAMS

_Javascript Edition_

_Ditulis oleh Harold Abelson dan Gerald Jay Sussman dan diadaptasi ke JavaScript oleh Martin Henz dan Tobias Wrigstad_

## Preface

## Building Abstraction with Function

> The acts of the mind, wherein it exerts its power over simple ideas, are chiefly these three: 1. Combining several simple ideas into one compound one, and thus all complex ideas are made. 2. The second is bringing two ideas, whether simple or complex, together, and setting them by one another so as to take a view of them at once, without uniting them into one, by which it gets all its ideas of relations. 3. The third is separating them from all other ideas that accompany them in their real existence: this is called abstraction, and thus all its general ideas are made.

_John Locke, An Essay Concerning Human Understanding (1690)_

Sama seperti pengetahuan manusia. Program juga terdiri dari data yang sederhana (angka, string, dan boolean). Lalu data yang sederhana disusun menjadi data gabungan (compound data, contohnya array, set, dan objek). Lalu digabung lagi kedalam sebuah fungsi yang lebih rumit dan akhirnya menjadi satu program yang utuh.

### Elemen di dalam programming.

Bahasa pemrograman yang baik, harusnya memiliki tiga unsur:

- primitive expressions
- means of combinations
- means of abstraction

Pemrograman sebenarnya kita hanya berurusan dengan dua hal, data dan fungsi. Maka bahasa yang baik adalah bahasa yang menyediakan sarana untuk mengkombinasikan data (melalui operator) dan mengabstraksi data (melalui fungsi).

#### Ekspresi

Ekspresi adalah kode yang menghasilkan nilai. Contoh pada kode javascript.

```javascript
// Primitive expressions
2;
7898;

// Compound/combination expressions
3 + 5;
343 * 4 + 44;
```

#### Penamaan variabel

Dalam sebuah bahasa kita bisa memasukkan ekspresi ke dalam sebuah variabel dan melabelinya agar data mudah dibaca. Salah satu yang dimaksud dengan abstraksi dalam bahasa pemrograman. Contoh pada kode JavaScript:

```javascript
const pi = 3.14;
const radius = 10;

const kelilingLingkaran = 2 * pi * radius;
```

Kode di atas adalah contoh sederhana. Pada kenyataanya, sebuah program mungkin akan memiliki struktur yang rumit. Akan merepotkan bila harus mengingat dan mengulangi setiap detail. Oleh karena itu kita butuh abstraksi.

#### Evaluasi Operator Kombinasi

```javascript
(2 + 4 * 6) * (3 * 12);
```

Pada kode di atas, evaluasi akan berjalan satu persatu seperti gambar dibawah ini.

![Visualisasi operator kombinasi yang dievaluasi](./assets/SICP/evaluating-flow.svg)

Proses ini disebut [_Percolate values upward_](https://chatgpt.com/share/39c40185-630e-4b07-a69d-574bceb870a1)

#### Compound Functions

### Fungsi dan proses yang dihasilkannya.

### Merumuskan abstraksi melalui HOF (Higher Order Function)

## Building Abstraction with Data

## Modularity, Objects and State

## Metalinguistic Abstracrion

## Computing With Register Machines
