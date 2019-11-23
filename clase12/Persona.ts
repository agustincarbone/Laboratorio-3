namespace test
{
    export class Persona
    {
        private nombre:string;
        private apellido:string;

        public setNombre(name:string)
        {
            this.nombre = name;
        }

        public getNombre()
        {
            return this.nombre;
        }
    }

}