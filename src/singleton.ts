export default class Conexion {

    private url: string
    private usuario: string
    private conectado: boolean


    private static instance: Conexion;

    private constructor() {
        this.url = "jdbc:mysql://localhost:3306/tienda"
        this.usuario = "admin"
        this.conectado = false
    }

    public static getInstance(): Conexion {
        if(!this.instance){
            this.instance = new Conexion;
        }
        return this.instance;
    }

    public Conectar(): void {
        if(this.conectado === false){
            this.conectado = true
            console.log("Conexión Establecida")
        } else {
            console.log("ya existe una conexión activa")
        }
            
    }

    public Desconectar(): void {
        this.conectado = false 
        console.log("Conexión Cerrada")
    }


    public getEstado(): string {
        return `[${this.usuario}@${this.url} | conectado: ${this.conectado}]`
    }

}