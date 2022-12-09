const submitButton = document.querySelector('.rating button');
const ratingSec = document.querySelector('.rating');
const thankSection = document.querySelector('.thank');
const ratingRates = document.querySelectorAll('.rating__rate');
let selectedRateIndex = 0;

for (let index = 0; index < ratingRates.length; index++) {
    ratingRates[index].addEventListener('click', function () {
        selectedRateIndex = index + 1;
        for (const rate of ratingRates) {
            rate.classList.remove('active');
        }
        this.classList.add('active');

    })

}

submitButton.addEventListener('click', function () {
    ratingSec.style.display = 'none';
    thankSection.style.display = 'flex';

    let thankRate = thankSection.querySelector('.thank__rate');
    thankRate.textContent = selectedRateIndex;
});
