function nameValidation()
{
    var pname = document.getElementById("name").value;
    if(pname == "")
    {
        document.getElementById("req").style.visibility="visible";
    }
    else
    {
        var regx= /^[a-zA-Z]+$/
        if(regx.test(pname))
        {
            document.getElementById("req").style.visibility="hidden";
        }
        else
        {
            document.getElementById("req").style.visibility="visible";
            document.getElementById("req").innerHTML="Invalid"
        }
    }
}
// RegExp validation for  Father name
function fathernameValidation()
{
    var fathername = document.getElementById("fname").value;
    if(fathername == "")
    {
        document.getElementById("reqfname").style.visibility="visible";
    }
    else
    {
        var regx= /^[a-zA-Z]+$/
        if(regx.test(fathername))
        {
            document.getElementById("reqfname").style.visibility="hidden";
        }
        else
        {
            document.getElementById("reqfname").style.visibility="visible";
            document.getElementById("reqfname").innerHTML="Invalid"
        }
    }
}

// RegExp validation for  Date of birth
function dobValidation()
{
    var dob = document.getElementById("dob").value;
    if(dob == "")
    {
        document.getElementById("reqdob").style.visibility="visible";
    }
    else
    {
        var dob = dob.split('-');
        if(dob[0] == '01' || dob[0] == '03' || dob[0] == '05' || dob[0] == '07' || dob[0] == '08' || dob[0] == '10' || dob[0] == '12' || dob[0] == '1' || dob[0] == '3' || dob[0] == '5' || dob[0] == '7' || dob[0] == '8')
        {
            var regx= /^(0?[1-9]|1[0-2])-(0?[1-9]|[1-2][0-9]|3[0-1])-[0-9]{4}$/;  
            if(regx.test(dob))
            {
                document.getElementById("reqdob").style.visibility="hidden";
            }
            else
            {
                document.getElementById("reqdob").style.visibility="visible";
                document.getElementById("reqdob").innerHTML="Invalid"
            }
        }
    }   
}
// RegExp validation for Email
function emailValidation()
{
    var mail = document.getElementById("email").value;
    if(mail == "")
    {
        document.getElementById("reqmail").style.visibility="visible";
    }
    else
    {
        var regx= /^([a-zA-z0-9/.-])+@([a-zA-Z0-9])+.([a-z]{2,5})(.[a-z]{2,5})?$/
        if(regx.test(mail))
        {
            document.getElementById("reqmail").style.visibility="hidden";
        }
        else
        {
            document.getElementById("reqmail").style.visibility="visible";
            document.getElementById("reqmail").innerHTML="Invalid"
        }
    }
}

// RegExp validation for Mobile number
function mobileNumValidation()
{
    var num = document.getElementById("mobno").value;
    if(num == "")
    {
        document.getElementById("reqnum").style.visibility="visible";
    }
    else
    {
        var regx= /^[6-9][0-9]{9}$/
        if(regx.test(num))
        {
            document.getElementById("reqnum").style.visibility="hidden";
        }
        else
        {
            document.getElementById("reqnum").style.visibility="visible";
            document.getElementById("reqnum").innerHTML="Invalid"
        }
    }
}

// RegExp validation for Address
function caddOneValidation()
{
    var caddone = document.getElementById("caddOne").value;
    if(caddone == "")
    {
        document.getElementById("reqcaddone").style.visibility="visible";
    }
    else
    {
        var regx= /^[a-zA-z]+$/
        if(regx.test(caddone))
        {
            document.getElementById("reqcaddone").style.visibility="hidden";
        }
        else
        {
            document.getElementById("reqcaddone").style.visibility="visible";
            document.getElementById("reqcaddeone").innerHTML="Invalid"
        }
    }
}


function caddTwoValidation()
{
    var caddTwo = document.getElementById("caddTwo").value;
    if(caddTwo == "")
    {
        document.getElementById("reqcaddtwo").style.visibility="visible";
    }
    else
    {
        var regx= /^[a-zA-z]+$/
        if(regx.test(caddTwo))
        {
            document.getElementById("reqcaddtwo").style.visibility="hidden";
        }
        else
        {
            document.getElementById("reqcaddtwo").style.visibility="visible";
            document.getElementById("reqcaddtwo").innerHTML="Invalid"
        }
    }
}


function cdistrictValidation()
{
    var cdistrict = document.getElementById("cdistrict").value;
    if(cdistrict == "")
    {
        document.getElementById("reqcdistrict").style.visibility="visible";
    }
    else
    {
        var regx= /^[a-zA-z]+$/
        if(regx.test(cdistrict))
        {
            document.getElementById("reqcdistrict").style.visibility="hidden";
        }
        else
        {
            document.getElementById("reqcdistrict").style.visibility="visible";
            document.getElementById("reqcdistrict").innerHTML="Invalid"
        }
    }
}


function cpincodeValidation()
{
    var cpincode = document.getElementById("cpincode").value;
    if(cpincode == "")
    {
        document.getElementById("reqcpincode").style.visibility="visible";
    }
    else
    {
        var regx= /^6[0-9]{5}$/
        if(regx.test(cpincode))
        {
            document.getElementById("reqcpincode").style.visibility="hidden";
        }
        else
        {
            document.getElementById("reqcpincode").style.visibility="visible";
            document.getElementById("reqcpincode").innerHTML="Invalid"
        }
    }
}

// Copying current address to permanent address block
function copy()
{
    document.getElementById("paddOne").value = document.getElementById("caddOne").value;
    document.getElementById("paddTwo").value = document.getElementById("caddTwo").value;
    document.getElementById("pdistrict").value = document.getElementById("cdistrict").value;
    document.getElementById("pstate").value = document.getElementById("cstate").value;
    document.getElementById("ppincode").value = document.getElementById("cpincode").value;
}




// Function for file upload
function uploadfile()
{
    if(!document.getElementById("upload").value)
    {
        document.getElementById("reqfile").style.visibility="visible";
    }
    else
    {
        document.getElementById("reqfile").style.visibility="hidden";
    }
}