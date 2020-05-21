const insert = num => {
    document.form.textview.value += num
}
const result = () => {
    const exp = document.form.textview.value;
    if(exp){
        document.form.textview.value = eval(exp) //eval() 문자열을 코드로 인식하게 하는 함수(예: eval('2+2')는 문자열 2+2가 아니라 4가 출력된다.)
    }
}
const clean = () => {
 document.form.textview.value="";
}
const back = () => {
    const exp = document.form.textview.value;
    document.form.textview.value = exp.substring(0, exp.length-1);
}