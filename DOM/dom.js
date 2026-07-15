let title = document.getElementById('website_title');
console.log(title.innerHTML);

title.innerHTML = "neuer Titel"


document.getElementById('test_div').innerHTML = '<p>test</p> <script></script>';




//Schalter (Add oder Remove)
document.getElementById('test_div').classList.toggle('green_bg');

//Entferne
document.getElementById('test_div').classList.remove('green_bg');

//Hinzufügen
document.getElementById('test_div').classList.add('green_bg');


////////////////////////////////////////////////////////////////////////

//Attrubut wert ändern
document.getElementById('test_input').setAttribute('type', 'text')
document.getElementById('test_input').setAttribute('value', 1412634671234567890) 