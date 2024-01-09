// 1-misol
/*let a = +prompt("a sonini kiriting :")

if(a>0){
    console.log(" a soni musbat");
}else{
    console.log(" a soni manfiy");
}*/
//----------------------------------------------------------------------------
//2- misol va 3- misol

/*let a = +prompt("a sonini kiriting");
if (Number.isInteger(a) && a % 2 != 0){
    console.log(" siz kiritgan son butun va tog son");
}else if (Number.isInteger(a) && a % 2 == 0){
    console.log(" siz kiritgan son butun va juft son ");
}else{
    console.log("Iltimos butun son kiriting !");
}*/

//----------------------------------------------------------------------------
// 4 -misol

/*let a = +prompt("a sonini kiriting");
let b = +prompt("b sonini kiriting");

if (Number.isInteger(a) &&  Number.isInteger(b) && a > 0 && b > 0){
    console.log(" siz kiritgan  a va b sonlar butun sonlar va musbat sonlar");
} else{
    console.log(" siz kiritgan  a va b sonlar butun sonlar va manfiy sonlar");
}*/

//----------------------------------------------------------------------------

// 5- misol

// let a = +prompt("a sonini kiriting");
// let b = +prompt("b sonini kiriting");
// let c = +prompt("c sonini kiriting");
// if (a > b && b > c){
//     console.log("siz kiritgan a soni katta b dan va b soni katta c sonidan");
// }else{
//     console.log("siz kiritgan sonlar berilgan shartga tushmaydi boshqattan kiriting");
// }

//----------------------------------------------------------------------------

// 6 - misol

// let a = +prompt("a sonini kiriting");
// let b = +prompt("b sonini kiriting");
// let c = +prompt("c sonini kiriting");

// if(a > b && a > c && b > c ){
//     console.log("siz kiritgan b soni a va c sonlarinig oraligida");
// }else{
//     console.log("b soni a va c sonlarini orasida emas ! Boshqattan sonlarni kiriting");
// }

//----------------------------------------------------------------------------

// 7- misol

// let a = +prompt("a sonini kiriting");
// let b = +prompt("b sonini kiriting");
// if (a % 2 == 1 && b % 2 == 1){
//     console.log("siz kiritga ikkala son ham tog son");
// }else{
//     console.log("sizkiritgan sonlar ten tog bo'lishligi kerak")
// }

//----------------------------------------------------------------------------

// 8- misol

// let a = +prompt("a sonini kiriting");
// let b = +prompt("b sonini kiriting");
// let c = +prompt("c sonini kiriting");

// if( a > 0 && b > 0 && c > 0){
//     console.log("siz kiritga barcha sonlar musbat");
// }else{
//     console.log("siz kiritga sonlarnig hamasi musbat son emas");
// }


//----------------------------------------------------------------------------

// 9- misol

// let a = +prompt("a sonini kiriting");
// let b = +prompt("b sonini kiriting");
// let c = +prompt("c sonini kiriting");

// if((a > 0 && b > 0 && c > 0) || (a > 0 && b > 0 && c < 0) || (a > 0 && b < 0 && c > 0) || (a < 0 && b > 0 && c > 0)){
//     console.log("siz kiritgan sonlarnig kamidas ikkitasi musnbat");
// }else{
//     console.log("siz kiritgamn sonlarnig  kamida ikkitasi musbat bo'lishligi kerak ! iltimos qaytatdan son kirgizing");
// }

//----------------------------------------------------------------------------

// 10 -misol

// let a = +prompt("son kiriting");

// if(a==1){
//     console.log(`${a} - kun duyshanba`);
// }else if(a==2){
//     console.log(`${a} - kun siyshanba`);
// }else if(a==3){
//     console.log(`${a} - kun chorshanba`);
// }else if(a==4){
//     console.log(`${a} - kun payshanba`);
// }else if(a==5){
//     console.log(`${a} - kun juma`);
// }else if(a==6){
//     console.log(`${a} - kun shanba`);
// }else if(a==7){
//     console.log(`${a} - kun yakshanba`);
// }else {
//     console.log(`${a} - bunday hafta kuni yo'q`);
// }

//----------------------------------------------------------------------------

// 11 -misol

/*let phone = +prompt('Telafon raqamingizni kiriting:');
let phone2 = phone[0] + phone[1];

if(phone2 == 99){
    console.log(`Uzmobile nomer: ${phone}`);
}else if(phone2 == 97){
    console.log(`Mobiuz nomer: ${phone}`);
}else if(phone2 == 94){
    console.log(`Usell nomer: ${phone}`);
}else if(phone2 == 90){
    console.log(`Beeline nomer: ${phone}`);
}else{
    console.log("kechirasiz sinig ragamingiz kampaniyasi topilmadi , iltimos boshqa raqam kirgizing!");
}*/ //ishlamadi qandaydit bug

// let phone = prompt("Telefon raqamingizni kiriting:");

// let phoneCode = phone[0] + phone[1];

// if(phoneCode === "99"){
//     console.log(`Uzmobile nomer: ${phone}`);
// }else if(phoneCode === "97"){
//     console.log(`Mobiuz nomer: ${phone}`);
// }else if(phoneCode === "94"){
//     console.log(`Usell nomer: ${phone}`);
// }else if(phoneCode === "90"){
//     console.log(`Beeline nomer: ${phone}`);
// }else{
//     console.log("kechirasiz sinig ragamingiz kampaniyasi topilmadi , iltimos boshqa raqam kirgizing!"); 
// }

//-----------------------------------------------------------------------------------------------------

// 12-misol

// let a = +prompt("son kiriting");

// if( Number.isInteger(a) && a > 0 ){
//     console.log(++a);
// }else if( Number.isInteger(a) && a < 0){
//     console.log(--a);
// }else {
//     console.log("Iltimos butun son liriting !");
// }

//----------------------------------------------------------------------------

//13 -misol
 
// let a = +prompt("son kiriting");

// if( Number.isInteger(a) && a > 0){
//     console.log(+a +2);
// }else if( Number.isInteger(a) && a < 0){
//     console.log(a-2);
// }else{
//     console.log("iltimos qaytatdan butun son kiriting");
// }

//--------------------------------------------------------------------------------------------

// 14 - misol


// let a = +prompt("a sonini kiriting :");
// let b = +prompt("b sonini kiriting :");

// if( Number.isInteger(a) && Number.isInteger(b) &&  a > b){
//     console.log(`a = ${a} soni katta b = ${b}  sondam`);
// }else if( Number.isInteger(a) && Number.isInteger(b) && a < b){
//     console.log(`b = ${b} soni katta a = ${a}  sondam`);
// }else {
//     console.log("iltimos butun son kiriting");
// }

//--------------------------------------------------------------------------------------------------

// 15 - misol

// let a = +prompt("a sonini kiriting :");
// let b = +prompt("b sonini kiriting :");
// let c = +prompt("c sonini kiriting :");

// if(Number.isInteger(a) && Number.isInteger(b) && Number.isInteger(c) && a > b && a > c){
//     console.log(`siz kiritgan sonlar ichida eng kattasi a =  ${a}`);
// }else if(Number.isInteger(a) && Number.isInteger(b) && Number.isInteger(c) && b > a && b > c){
//     console.log(`siz kiritgan sonlar ichida eng kattasi b = ${b}`);
// }else if(Number.isInteger(a) && Number.isInteger(b) && Number.isInteger(c) && c > a && c > b){
//     console.log(`siz kiritgan sonlar ichida eng kattasi c = ${c}`);
// }else{
//     console.log("iltimos butun son kiriting");
// }

//-----------------------------------------------------------------------------------------------------

// 16 - misol

// let a = +prompt("a sonini kiriting :");
// let b = +prompt("b sonini kiriting :");
// let c = +prompt("c sonini kiriting :");

// if(a < b && a < c){
//     console.log(`siz kiritgan sonlar ichida eng kichkinasi a =  ${a}`);
// }else if(b < a && b < c){
//     console.log(`siz kiritgan sonlar ichida eng kichkinasi b =  ${b}`);
// }else if(c < a && c < a){
//     console.log(`siz kiritgan sonlar ichida eng kichkinasi c =  ${c}`);
// }else{
//     console.log("iltimos qayta tekshiring");
// }

//-------------------------------------------------------------------------------------------

// 17 - misol



//-----------------------------------------------------------------------------------------------------------------

// 18 - misol

// let a = +prompt("Bohoyingizni kiritimg '5' '4' '3' '2' '1' ");

// if(a == 5){
//     console.log("Super stipendiya 🎉🎉 1 500 000 so'm");
// }else if(a == 4){
//     console.log("Siznig stipeniyangiz 500 000 so'm");
// }else if(a == 3){
//     console.log("Sizning bahoyingiz stipendiya uchun noloyiq");
// }else if(a == 2 || a == 1){
//     console.log("Sizning  bahoyingiz qoniqarsiz");
// }else{
//     console.log("Iltimos mezom bo'yicha rost bahoyingizni kiriting !");
// }

//--------------------------------------------------------------------------------------

// 19 - misol

/*let a = +prompt(" Ihtiyori butun son kiriting");

if (Number.isInteger(a) && a > 0 && a % 2 == 0){
    console.log(`${a} soni , juft va musbat son`);
}else if (Number.isInteger(a) && a < 0 && a % 2 == 0){
    console.log(`${a} soni , juft va manfiy son`);
}else if (Number.isInteger(a) && a < 0 && a % 2 != 0){
    console.log(`${a} soni , tog va manfiy son`);
}else if (Number.isInteger(a) && a > 0 && a % 2 != 0){
    console.log(`${a} soni , tog va musbat son`);
}else{
    console.log("Iltimos butun son kiritin !");
}*/

//-----------------------------------------------------------------------------------------

// 20 - misol

// let a = +prompt("Tugulgan yilingizni kiriting");

// if (a <= 2024){
//     console.log("sizning yoshingiz: " +  (2024 - a));
// }else{
//     console.log(" Iltimos tugulgan yilingizni to'gri kiriting");
// }

//------------------------------------------------------------------------------------------

// 21 - misol 

// let a = +prompt("a sonini kieriting :");
// let b = +prompt("b sonini kieriting :");
// let c = +prompt("c sonini kieriting :");

// if(a <= b && b <= c){
//     console.log("True");
// }else{
//     console.log("False");
// }

//----------------------------------------------------------------------------

// 22- misol

// let a = +prompt("a sonini kiriting :");
// let b = +prompt("b sonini kiriting :");
// if (Number.isInteger(a) && a % 2 == 0 && Number.isInteger(b) && b % 2 == 0 ){
//     console.log("Siz kiritgan ikala sonham juft");
// }else if (Number.isInteger(a) && a % 2 != 0 && Number.isInteger(b) && b % 2 != 0 ){
//     console.log("Siz kiritgan ikala sonham tog");
// }else if (Number.isInteger(a) && a % 2 != 0 && Number.isInteger(b) && b % 2 == 0 ){
//     console.log("Siz kiritgan 'a' soni tog");
// }else if (Number.isInteger(a) && a % 2 == 0 && Number.isInteger(b) && b % 2 != 0 ){
//     console.log("Siz kiritgan 'b' soni tog");
// }else{
//     console.log("Iltimos janob butun son kiriting !");
// }

//----------------------------------------------------------------------------

// 23-misol

// let a = +prompt("a sonini kieriting :");
// let b = +prompt("b sonini kieriting :");
// let c = +prompt("c sonini kieriting :");
// if(a>0 && b > 0 && c >0){
//     console.log("siz kiritgam barcha sonlar musbat !");
// }else{
//     console.log("False");
// }

//----------------------------------------------------------------------------

// 24- misol

// let a = +prompt("a sonini kieriting :");
// let b = +prompt("b sonini kieriting :");
// let c = +prompt("c sonini kieriting :");

// if(a % 2 != 0 && b % 2 == 0 && c % 2 == 0){
//     console.log(`siz kiritgan ${a} soni tog`);
// }else if(a % 2 == 0 && b % 2 != 0 && c % 2 == 0){
//     console.log(`siz kiritgan ${b} soni tog`);
// }else if(a % 2 == 0 && b % 2 == 0 && c % 2 != 0){
//     console.log(`siz kiritgan ${c} soni tog`);
// }else{
//     console.log("kiritgan sonlariz ichida tog son mavjut emas !");
// }

//--------------------------------------------------------------------------------------

// 24 ,2 - misol

/*let a = +prompt("a sonini kieriting :");
let b = +prompt("b sonini kieriting :");
let c = +prompt("c sonini kieriting :");

if(a > 0 && b < 0 && c < 0){
    console.log(`siz kiritgan ${a} soni musbat`);
}else if(a < 0 && b > 0 && c < 0){
    console.log(`siz kiritgan ${b} soni musbat`);
}else if(a < 0 && b < 0 && c > 0){
    console.log(`siz kiritgan ${c} soni musbat`);
}else if(a < 0 && b < 0 && c < 0){
    console.log("Siz kiritgan barcha sonlar manfiy !");
}else if(a > 0 && b > 0 && c > 0){
    console.log("Siz kiritgan barcha sonlar musbat !");
}else{
    console.log("Erorr");
}*/

//-------------------------------------------------------------------

// 27 -misol

// let a = prompt("Yoqtirgan kompyuteringizni tanlang 'Mac' , 'Samsung' , 'Lenovo' , 'HP' , 'Asus' :");
// if (a==="Mac"){
//     document.body.innerHTML = "Siz tanlagan kompyuternig narhi: 1200$";
// }else if (a==="Samsung"){
//     document.body.innerHTML = "Siz tanlagan kompyuternig narhi: 1000$";
// }else if (a==="Lenovo"){
//     document.body.innerHTML = "Siz tanlagan kompyuternig narhi: 900$";
// }else if (a==="HP"){
//     document.body.innerHTML = "Siz tanlagan kompyuternig narhi: 800$";
// }else if (a==="Asus"){
//     document.body.innerHTML = "Siz tanlagan kompyuternig narhi: 990$";
// }else{
//     document.body.innerHTML = "Siz tanlagan kompyuter bizda yoq ! Bizda bor kompyuterlarni ko'rishimgizni maslahat beramiz janob ☺️Siz tanlagan kompyuternig narhi: ";
// }
