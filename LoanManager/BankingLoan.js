var loanObject = {
    "id" : 1001,
    "customer Name" : "Raja",
    "loanAmount": 450000,
    "intrestRate":0.14,
    "duration": 12,
    "repayments": [],
    "addRepayments": function(rp){
        this.repayments.push(rp);
        console.log(this.repayments);
    },
    "getBalanceToBePaid":function(){

    },
    "getPaidAmount":function(){

    }
}

function Repayment(month, year,amount){
    this.paymentMonth = month;
    this.paymentYear= year;
    this.paymentAmount= amount;
}