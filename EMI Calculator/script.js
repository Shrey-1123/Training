function calculateEMI()
{
    var P=document.getElementById('principalAmount').value;
    var r=document.getElementById('interestRate').value;
    var R=(r/100)/12;
    var N=document.getElementById('tenure').value;
    var a=P*R;
    var b=Math.pow((1+R),N);
    var c=Math.pow((1+R),N)-1;
    var emi=a*(b/c);
    var EMI=emi.toFixed(2);
    /*console.log(P);
    console.log(r);
    console.log(R);
    console.log(N);
    console.log(EMI);*/
    document.getElementById('result').innerHTML='EMI is Rs.'+EMI;
    return false;
}