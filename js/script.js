const messages = [

    `ถึง SLEEPCAT
    <br><br>
    วันไหนที่เหนื่อยๆ
    หรือวันที่ต้องการกำลังใจ
    <br><br>
    พวกเราอยู่ตรงนี้เสมอนะ`,

    `ขอบคุณที่เดินทางมาด้วยกัน
    <br><br>
    ทุกเสียงร้อง ทุกกำลังใจ
    มีความหมายกับพวกเราเสมอ`,

    `ไม่ว่าจะเป็นวันธรรมดา
    หรือวันที่ไม่ง่าย
    <br><br>
    อย่าลืมยิ้มให้ตัวเองนะ
    <br><br>
    จาก SLAPKISS ❤️`

];


let current = 0;


function nextMessage(){

    current++;

    if(current >= messages.length){

        current = 0;

    }


    document.getElementById("message").innerHTML =
    messages[current];

}