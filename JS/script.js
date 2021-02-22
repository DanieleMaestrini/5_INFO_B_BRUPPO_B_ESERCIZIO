/*
Nome oggetto=Dati
var Dati={
    PopolazioneTot: document.getElementById(nomeId),
    NumeroContagiati: document.getElementById(nomeId),
    NumeroQuarantena: document.getElementById(nomeId),
    NumeroSani: this.PopolazioneTot-this.NumeroContagiati,
    TempoGuarigione: document.getElementById(nomeId),
    NumeroGuariti: 0
};
*/

function ControlloCompilazione(e) 
{
    var PTot=document.getElementById("validationCustom01");
    var NContagiati=document.getElementById("validationCustom02");
    var NQuarantena=document.getElementById("validationCustom03");
    var TempoGuarigione=document.getElementById("validationCustom04");
    if(e.target==PTot)
    {
        PTot=document.getElementById("validationCustom01");
        if(PTot.value>0 && PTot.value<=50)
        {
            document.getElementById("PTotV").style.display="block";       
            document.getElementById("PTotF").style.display="none";    
        }
        else
        {
            document.getElementById("PTotF").style.display="block";       
            document.getElementById("PTotV").style.display="none";
        }   
    }
    else if(e.target==NContagiati)
    {
        PTot=document.getElementById("validationCustom01");
        NContagiati=document.getElementById("validationCustom02");
        PTot=parseInt(PTot.value);
        NContagiati=parseInt(NContagiati.value);
        if(PTot>=NContagiati && NContagiati>0)
        {
            document.getElementById("NConV").style.display="block";       
            document.getElementById("NConF").style.display="none";  
        }
        else
        {
            document.getElementById("NConF").style.display="block";       
            document.getElementById("NConV").style.display="none";
        }
    }
    else if(e.target==NQuarantena)
    {
        NContagiati=document.getElementById("validationCustom02");
        NQuarantena=document.getElementById("validationCustom03");
        NQuarantena=parseInt(NQuarantena.value);
        NContagiati=parseInt(NContagiati.value);
        if(NQuarantena<=NContagiati && NQuarantena>0)
        {
            document.getElementById("NQuaV").style.display="block";       
            document.getElementById("NQuaF").style.display="none";  
        }
        else
        {
            document.getElementById("NQuaF").style.display="block";       
            document.getElementById("NQuaV").style.display="none";
        }
    }
    else
    {
        TempoGuarigione=document.getElementById("validationCustom04");
        if(TempoGuarigione.value>0)
        {
            document.getElementById("TGV").style.display="block";       
            document.getElementById("TGF").style.display="none";  
        }
        else
        {
            document.getElementById("TGF").style.display="block";       
            document.getElementById("TGV").style.display="none";
        }
    }
}

function InvioDati(e)
{
    e.preventDefault();
    var CheckCampi=document.getElementsByClassName("valid-feedback");
    var Controllo=true;
    for(var i=0; i<CheckCampi.length; i++)
    {
        if(CheckCampi[i].style.display!="block")
        {
            Controllo=false;
        }
    }
    if(Controllo==true)
    {
        var Dati={
            PTOT: document.getElementById("validationCustom01"),
            NCONT: document.getElementById("validationCustom02"),
            NQUAR: document.getElementById("validationCustom03"),
            TGUAR: document.getElementById("validationCustom04")
        };
        simulazione(Dati);
        document.getElementById("InizioSimulazione").disabled=true;
    }
}

var ControlloInserimento = document.getElementsByClassName("form-control");
for(var i = 0; i < ControlloInserimento.length; i++ )
{
    ControlloInserimento[i].addEventListener("blur",ControlloCompilazione,false)
}

var bottone=document.getElementById("InizioSimulazione");
bottone.addEventListener("click",InvioDati,false);