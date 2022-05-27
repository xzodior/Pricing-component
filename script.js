const view = document.getElementById('view');
const dollars = document.getElementById('dollars')
const mySlider = document.querySelector('mySlider');
const toggle = document.getElementById('toggle');
let price;

function buttonToggle(){
    if (toggle.value === 'no') {
        toggle.value = 'yes';
    } else if (toggle.value === 'yes') {
        toggle.value = 'no';
    }
}

function display(value) {               /* Function for slider. This is so the text element changes depending on the users action */
    let price;
    if (toggle.value === 'no') {                
        switch(value){
        case '0':
            price = 8
            view.innerHTML = '10K';
            dollars.innerHTML = `$${price}`;
            break;
        case '1':
            price = 12
            view.innerHTML = '50K';
            dollars.innerHTML = `$${price}`;
            break;
        case '2':
            price = 16
            view.innerHTML = '100K';
            dollars.innerHTML = `$${price}`;
            break;
        case '3':
            price = 24
            view.innerHTML = '500K';
            dollars.innerHTML = `$${price}`;
            break;
        case '4':
            price = 36
            view.innerHTML = '1M';
            dollars.innerHTML = `$${price}`;
            break;
        }
    } else if (toggle.value === 'yes') {
        switch(value){
            case '0':
                price = 8 * 0.75;
                view.innerHTML = '10K';
                dollars.innerHTML = `$${price}`;
                break;
            case '1':
                price = 12 * 0.75;
                view.innerHTML = '50K';
                dollars.innerHTML = `$${price}`;
                break;
            case '2':
                price = 16 * 0.75;
                view.innerHTML = '100K';
                dollars.innerHTML = `$${price}`;
                break;
            case '3':
                price = 24 * 0.75;
                view.innerHTML = '500K';
                dollars.innerHTML = `$${price}`;
                break;
            case '4':
                price = 36 * 0.75;
                view.innerHTML = '1M';
                dollars.innerHTML = `$${price}`;
                break;
            }
    }
}