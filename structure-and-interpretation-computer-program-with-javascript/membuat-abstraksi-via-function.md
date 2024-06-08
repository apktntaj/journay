# MEMBUAT ABSTRAKSI MELALUI FUNGSI

Menurut John Locke, gagasan atau ide adalah dasar dari semua pengetahuan manusia. Ide-ide diperoleh melalui pengalaman.
Dimulai dari ide-ide sederhana, kemudian yang sederhana bergabung membentuk ide yang lebih kaya tapi belum sampai rumit.
Kemudian, melalui proses penggabungan dan/atau perbandingan ide bisa menjadi lebih rumit (Ide terabstraksi).

Programming sendiri adalah seni tentang menggabungkan beberapa ide (data) secara sistematis melalui rangkaian abstraksi yang modular. Mulai dari data yang sederhana (berupa angka, karakter, atau string). Kemudian dari data sederhana tadi mulai membentuk data yang lebih kaya meski belum rumit (array, set, dll). Lalu semua data tadi diolah sedemikian rupa (bongkar pasang seperti sebuah lego) hingga bisa menjadi sebuah program yang utuh.

Dengan kehati-hatian dalam membangun sebuah blok program. Mulai dari sederhana hingga lambat laun beranjak menjadi rumit, seorang programmer bisa membaca error di awal kode program sebagaimana seorang pemikir juga bisa mendeteksi lebih awal "_logical fallacy_" dalam merumuskan sebuah gagasan.

## Beberapa Elemen Dalam Programming

Bahasa yang baik adalah bahasa yang menyediakan cara/sarana untuk mengekspresikan "ide" kita agar bisa dimengerti oleh komputer. Setidaknya ada tiga mekanisme agar sebuah bahasa bisa mencapai itu:

- ekspresi primitif (data/ide paling sederhana)
- menggabungkan beberapa ekspresi primitif,
- abstraksi (memberi label pada sebuah data yang telah digabung menjadi satu entitas baru)

Di banyak bahasa, ketiga hal itu sudah tersedia melalui konsep fungsi. Di dalam fungsi kita bisa memanipulasi data (bongkar/pasang).

### Expressions

Dalam program, ekspresi adalah kode yang bila dieksekusi bisa menghasilkan sebuah nilai.

contoh:

```javascript
// ekspresi paling sederhana
26;
("Hello world");
undefined;

// lumayan sederhana
12 + 23(4 + 2) * (9 - 3);
```

Kode diatas adalah ekspresi yang akan menghasilkan sebuah nilai ketika dieksekusi.

### Variable

Konsep penting dalam pemrograman lainnya adalah variabel dan environment. Dengan variabel kita bisa mengikat sebuah ekpresi ke sebuah nama yang mudah diingat (beberapa ide dasar yang dikombinasikan bisa menghasilkan ide baru).

```javascript
const size = 2 + 4;
```

Ekspresi diatas diikat ke sebuah variabel, jadi tiap kali kita memanggil size, maka dengan sendirinya size akan mengembalikan nilai 2 + 4 atau 6.

Contoh lain:

```javascript
const pi = 3.14;
const radius = 10;

const kelilingLingkaran = 2 * pi * radius;
console.log(kelilingLingkaran); // 62.8318
```

Variabel juga adalah sarana melakukan abstraksi yang sederhana. Bayangkan bila tidak dimasukkan ke dalam variabel. Akan merepotkan dan sulit dibaca/dibayangkan bila kita menulis tanpa variabel.

### Evaluating Operator Combinations

Salah satu dari tujuan pada bahasan chapter ini adalah untuk mengisolasi paradigma prosedural dalam membangun program. Apa maksud dari "paradigma prosedural"

```javascript
(2 + 4 * 6) * (3 + 12);
```

Compiler akan melakukan hal berikut ketika mengevaluasi kode di atas.

- Evaluate operand hingga menjadi nilai yang tak bisa lagi dipecah
- Apply operator ke operand yang sudah dievaluasi ke bentuk paling sederhananya.

Kode di atas akan dieksekusi seperti ini:

- (2 + 4 \* 6)
- 2 + (4 \* 6) = 2 + 24 = 26, kemudian lanjut ke sisi kiri dari operator
- (3 + 12) = 24, ketika dua operand sudah mencapai bentuk paling sederhana
- 24 + 26 = 50
