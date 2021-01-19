
## 进制转换  

    let num = 12;

    let binary = num.toString(2); // 10进制转2进制
    let octonary = num.toString(8); // 10进制转8进制
    let hex = num.toString(16); // 10进制转16进制

    console.log(binary);
    console.log(octonary);
    console.log(hex);

    console.log(parseInt(binary, 2));   // 2进制转10进制
    console.log(parseInt(octonary, 8)); // 2进制转10进制
    console.log(parseInt(hex, 16)); // 2进制转10进制
