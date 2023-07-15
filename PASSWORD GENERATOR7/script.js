const words=['BOB', 'BAM', 'BND', 'XOF', 'BIF', 'KHR',
'XAF', 'CVE','CLP','COP','KMF','CRC','CUP','CDF','DJK','DOB',
"apple", "banana","cherry","date",
  "elderberry", "fig",
  "grape",
  "honeydew",
  "imbe",
  "jackfruit",
  "kiwi",
  "lemon",
  "mango",
  "nectarine",
  "orange",
  "papaya",
  "quince",
  "raspberry",
  "strawberry",
  "tangerine",
  "ugli",
  "vanilla",
  "watermelon",
  "xigua",
  "yellow", "zucchini"
];
function getPassword(){
    const chars='0123456789/%?@#$%';
    const clength=chars.length;
    let password='';

    while(password.length<20){
        password=password.concat(randomWord(chars.length));
        password=password.concat(chars[randomNumber(clength)]);
    }
    password=password.substring(0,16);
    document.getElementById('password').value=password;
}
function randomNumber(e){
    return Math.floor(Math.random()* e);
}

function randomWord(){
    const number=randomNumber(words.length);
    return words[number]
}

