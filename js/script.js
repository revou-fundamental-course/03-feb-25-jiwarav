// ini file Javascript

// Deklarasi variabel berdasarkan id
const input = document.getElementById('input-suhu');
const hasil = document.getElementById('hasil-konversi');
const rumus = document.getElementById('rumus-konversi');
const lblIn = document.getElementById('label-input');
const lblOut = document.getElementById('label-output');
const btnKonversi = document.getElementById('btn-konversi');
const jdlRum = document.getElementById('judul-rumus');
const penSatu = document.getElementById('penjelasan-satu');
const penDua = document.getElementById('penjelasan-dua');

// variable mode konversi
let reverseCelToFah = true;

// fungsi ubah mode konversi
let changeLabel = () => {
    reverseCelToFah = !reverseCelToFah;
    if (reverseCelToFah) {
        lblIn.innerHTML = "Celcius (&deg;C)";
        lblOut.innerHTML = "Fahrenheit (&deg;F)";
        jdlRum.innerHTML = "Cara Konversi Dari Celcius(&deg;C) ke Fahrenheit(&deg;F)";
        penSatu.innerHTML = "Suhu <b>S</b> dalam derajat Fahrenheit (&deg;F) sama dengan suhu <b>S</b> dalam derajat Celcius(&deg;C) kali 9/5 tambah 32.";
        penDua.innerHTML = "<b>S</b>(&deg;F)</sub> = (<b>S</b><sub>(&deg;C)</sub> x 9/5) + 32 <br> atau <br> <b>S</b><sub>(&deg;F)</sub> = (<b>S</b><sub>(&deg;C)</sub> x 1.8) + 32";

    } else {
        lblIn.innerHTML = "Fahrenheit (&deg;F)";
        lblOut.innerHTML = "Celcius (&deg;C)";
        jdlRum.innerHTML = "Cara Konversi Dari Fahrenheit(&deg;F) ke Celcius(&deg;C)";
        penSatu.innerHTML = "Suhu <b>S</b> dalam derajat Celcius (&deg;C) sama dengan suhu <b>S</b> dalam derajat Fahrenheit(&deg;F) kurang 32 lalu dikali 5/9.";
        penDua.innerHTML = "<b>S</b>(&deg;C)</sub> = (<b>S</b><sub>(&deg;F)</sub> - 32) x 5/9 <br> atau <br> <b>S</b><sub>(&deg;C)</sub> = (<b>S</b><sub>(&deg;F)</sub> - 32) x 0.6";
    }
    reset();
};

// Fungsi konversi data
let konversiSuhu = () => {
    // Validasi input
    if (input.value === "") {
        alert("Input tidak boleh kosong");
    } else {
        // Proses konversi
        let calc = convertTemp(input.value);
        let rum = rumusKonversi(input.value);

        // pembulatan hasil konversi
        calc = Math.round(calc * 100) / 100;

        // Tampilkan hasil konversi suhu
        hasil.value = calc;

        // Tampilkan rumus konversi 
        rumus.value = rum;
    } 
}; 

// Fungsi konversi suhu
let convertTemp = (input) => {
    if (reverseCelToFah) {
        return input * (9/5) + 32;
    } else {
        return (input - 32) * (5/9);
    }
};

// Fungsi rumus konversi
let rumusKonversi = () => {
    if (reverseCelToFah) {
        return `(${input.value} x 9/5) + 32 = ${convertTemp(input.value)}`;
    } else {
        return `(${input.value} - 32) x 5/9 = ${convertTemp(input.value)}`;
    }
};

// Fungsi reset
let resetField = () => {
    input.value = "";
    hasil.value = "";
    rumus.value = "";
};
