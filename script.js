function loadPayments() {
    for (let i = 1; i <= 10; i++) {
        const saqlainPayment = localStorage.getItem('saqlain-day-' + i);
        const saimPayment = localStorage.getItem('saim-day-' + i);


        if (saqlainPayment) {
            document.getElementById('saqlain-day-' + i).value = saqlainPayment;
        }
        if (saimPayment) {
            document.getElementById('saim-day-' + i).value = saimPayment;
        }
    }

    const totalSaqlain = localStorage.getItem('total-paid-saqlain');
    const totalSaim = localStorage.getItem('total-paid-saim');

    document.getElementById('total-paid-saqlain').innerText = totalSaqlain ? totalSaqlain : '0';
    document.getElementById('total-paid-saim').innerText = totalSaim ? totalSaim : '0';
}

function savePayments(totalPaidSaqlain, totalPaidSaim) {
    for (let i = 1; i <= 10; i++) {
        const saqlainPayment = document.getElementById('saqlain-day-' + i).value;
        const saimPayment = document.getElementById('saim-day-' + i).value;

        localStorage.setItem('saqlain-day-' + i, saqlainPayment);
        localStorage.setItem('saim-day-' + i, saimPayment);
    }

    localStorage.setItem('total-paid-saqlain', totalPaidSaqlain);
    localStorage.setItem('total-paid-saim', totalPaidSaim);
}


window.onload = loadPayments;

document.getElementById('submit').addEventListener('click', function() {
    let totalPaidSaqlain = 0;
    let totalPaidSaim = 0;


    for (let i = 1; i <= 10; i++) {

        const saqlainPayment = document.getElementById('saqlain-day-' + i).value;
        const saimPayment = document.getElementById('saim-day-' + i).value;

        
        if (!isNaN(parseFloat(saqlainPayment)) && parseFloat(saqlainPayment) > 0) {
            totalPaidSaqlain += parseFloat(saqlainPayment);
        }

    
        if (!isNaN(parseFloat(saimPayment)) && parseFloat(saimPayment) > 0) {
            totalPaidSaim += parseFloat(saimPayment);
        }
    }

    
    savePayments(totalPaidSaqlain, totalPaidSaim);

    
    document.getElementById('total-paid-saqlain').innerText = totalPaidSaqlain;
    document.getElementById('total-paid-saim').innerText = totalPaidSaim;
});
