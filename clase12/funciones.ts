namespace test
{
    var lista:Array<Persona> = new Array<Persona>();

    export function agregar()
    {   
        let nombre:string = String($("#nombre").val()); 
        let pr:Persona = new Persona();
        pr.setNombre(nombre);
        lista.push(pr);

        let tr = document.createElement("tr");
        let td = document.createElement("td");
        let nTd = document.createElement("nTd");
        td.appendChild(nTd);
        tr.appendChild(td);

        $("tabla").append(tr);
    }

}
