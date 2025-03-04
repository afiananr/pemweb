function validasiNama() {
    let inputNama = document.getElementById("nama").value;
    let pola = /^[a-zA-Z\s']+$/; // Hanya huruf, spasi, dan tanda petik satu yang diperbolehkan

    if (!pola.test(inputNama)) {
        alert("Nama hanya boleh berisi huruf, spasi, dan tanda petik satu (')!");
        return false;
    }
    return true;
}
function validasiJenisUsaha(){
    let selectJenis = document.getElementById("jnsUsaha").value;
    if (selectJenis === "null") {
        alert("Anda belum boleh memilih jenis usaha");
        return false;
    }
    return true;
}

function validasiTujuan(){
    let selectTujuan = document.getElementById("tujuan").value;
    if (selectTujuan === "null") {
        alert("Anda belum boleh memilih tujuan pendanaan");
        return false;
    }
    return true;
}

function validasiNominal(){
    let inputNominal = document.getElementById("nominal").value;
    let maxNominal = 30000000;
    let minNominal = 500000
    if (inputNominal > maxNominal || inputNominal < minNominal) {
        alert("Minimal Pendanaan adalah Rp 500.000 dan Maksimal pendanaan adalah Rp 30.000.000!");
        return false;
    }
    return true;
}