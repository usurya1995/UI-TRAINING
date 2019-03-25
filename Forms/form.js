function userDetails(a,b,c,d){
    var id = a;
    var name = b;
    var basics = c; 
    var grade = d;
    var gradeValue;

    this.setId = function(a){
        id = a;
    }

    this.getId = function(){
        return id;
    }

    this.setName = function(b){
        name=b;
    }

    this.getName= function(){
        return name;
    }

    this.setBasics = function(c){
        basics=c;
    }

    this.getBasics = function(){
        return basics;
    }

    this.setGrade = function(d){
        grade = d;
    }

    this.getGrade = function(d){
        return grade;
    }

    this.getAllowence = function(){
        switch(grade){
            case 'a': gradeValue = 25;
            break;

            case 'b': gradeValue = 18;
            break;

            case 'c': gradeValue = 15;
            break;
        }

        return basics*gradeValue/100;
    }

    this.getTax = function(){
        return basics*10/100;
    }

    this.getNetSalary = function(){
        return parseInt(basics)+parseInt(this.getAllowence())-parseInt(this.getTax());
    }
}