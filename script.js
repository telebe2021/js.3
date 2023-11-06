// 1. const array = [1,2,3,4,5]. Yeni array yaradın və bu array-in əksinə düzülmüş formada olsun (e.x [5,4,3,2,1])

function tersineCevir(düzülüş) {
    const yenidüzülüş = [];
    for (let i = düzülüş.length - 1; i >= 0; i--) {
      yenidüzülüş.push(düzülüş[i]);
    }
    return yenidüzülüş;
  }
  
  const array = [1, 2, 3, 4, 5];
  const tersArray = tersineCevir(array);
  console.log(tersArray); 
  

// 2. const strArray = ["cat","mouse","panter","chicken"] bu array-dən "cat" sözünü silin və sonuna "bird" əlavə edin.

const strArray = ["cat", "mouse", "panter", "chicken"];

// "cat" sozunu silmek:
const index = strArray.indexOf("cat");
if (index !== -1) {
  strArray.splice(index, 1);
}
// Sonuna "bird" kelimesini elave atmek:
strArray.push("bird");

console.log(strArray); 


// 3. const array = [1,2,3,4,5]. Bu ədədlərin yanına kvadrat-ların əlavə edin. (e.x [1,2,3,4,5,1,4,9,16,25])

const Array = [1, 2, 3, 4, 5,];
const kvadratlar = [];
for (let i = 0; i < Array.length; i++) {
  kvadratlar.push(Array[i]);
  kvadratlar.push(Array[i] ** 2);
}
console.log(kvadratlar); 


// 4. Ədədlərdən ibarət array verilir. Array-də olan cüt ədədləri ekrana çıxardın.(Əlavə: yeni array-ə əlavə edin cüt ədədləri)

const verilenduzulush = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const cutEdedler = [];
const yeniduzulus = [];
for (let i = 0; i < verilenduzulush.length; i++) {
  if (verilenduzulush[i] % 2 === 0) {
    cutEdedler.push(verilenduzulush[i]); 
  } else {
    yeniduzulus.push(verilenduzulush[i]); 
  }
}
console.log("Cut ədədlər:", cutEdedler);
console.log("Yeni Duzulush (Cut ədədlər çıxarılıb):", yeniduzulus);