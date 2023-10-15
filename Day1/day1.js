// Các kiểu dữ liệu ở trong JS:

/**
 * String: Chuỗi => Tập hợp của nhiều chữ cái và số được viết liền với nhau và được để trong ""
 *       VD: "abc123", "kjnkjnkfds@#%$$^&*$@#%^", "123"
 * Number: Số => Chỉ chứa số
 *       VD: 123, 98345987, 0, -1, 1.4, ...
 * Boolean: true/false
 */

// 1. Khai báo biến: let, var, const
/**
 * let: Biến được bảo bởi từ let thì có thể gán cho chúng 1 giá trị mới
 * const: 1 Biến được khai báo bởi từ const thì sẽ k thể gán được giá trị mới
 */
// let my_name = "Nguyễn Danh Phương";
// my_name = "Nguyễn Văn A";
// my_name = "Vũ Thị B";
// console.log("Tôi tên là Nguyễn Văn A");
// console.log("Tôi tên là " + my_name);

// let my_age = 30;
// console.log("Năm nay tôi " + my_age + " tuổi");

// console.log("Tôi tên là " + my_name + ", năm nay tôi " + my_age + " tuổi");

// const is_single = false;
// is_single = true;

// 2. Toán tử trong JS: +, -, *, /, %, **

// Bài 1
// let a = 10;
// let b = 2;

// let plus = a + b;
// let minus = a - b;
// let times = a * b;
// let divide = a / b;

// // Dấu căn bậc 2: Math.sqrt(value), VD: Math.sqrt(100) = 10
// // let count = a ** b;

// console.log("Tổng 2 số " + a + " và " + b + " = " + plus);
// console.log("Hiệu 2 số " + a + " và " + b + " = " + minus);
// console.log("Tích 2 số " + a + " và " + b + " = " + times);
// console.log("Thương 2 số " + a + " và " + b + " = " + divide);

// let a = Number(prompt("Enter a"));
// let b = Number(prompt("Enter b"));
// let c = Number(prompt("Enter c"));
// let b = 4;
// let c = 5;
// let p = (a + b + c) / 2;

// let t = p * (p - a) * (p - b) * (p - c);
// let s = Math.sqrt(t);

// console.log("Diện tích tam khi có số đo 3 cạnh lần lượt là "+ a + ", "+ b + ", "+ c+ " = "+ s);
// console.log(`Diện tích tam khi có số đo 3 cạnh lần lượt là ${a}, ${b}, ${c} = ${s}`);

// 3. Hàm Alert, Prompt, Ép kiểu trong JS:
/**
 * String(value): Biến value từ kiểu giá trị nào đó -> kiểu giá trị String
 * Number(value): Biến value từ kiểu giá trị nào đó -> kiểu giá trị Number
 */
// alert("Hello My Friend");
// let input_value = prompt("Enter something ?");
// input_value = Number(input_value);
// let t = input_value + 10;
// console.log(t);

//4. Các phép so sánh trong JS: >, <, >=, <=, ==, !=
// Các cặp điều kiện trong JS:
// &&: Và
// ||: Hoặc
let a = 10;
let b = 10;
let c = 8;
let check = a == b || c > b;
console.log(check);
