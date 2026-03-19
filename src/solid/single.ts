class Pedido {

    id: number
    producto: string
    cantidad: number
    precioUnitario: number
    emailCliente: string

    constructor(id: number, producto: string, cantidad: number, precioUnitario: number, emailCliente: string){
        this.id = id;
        this.producto = producto;
        this.cantidad = cantidad;
        this.precioUnitario = precioUnitario;
        this.emailCliente = emailCliente;
    }
    calcularTotal(): number {
        return this.cantidad * this.precioUnitario
    }
}

class PedidoRepositorio {

    guardarEnBD(pedido: Pedido): void {
        console.log(`[DB] INSERT INTO pedidos VALUES (${pedido.id}, '${pedido.producto}', ${pedido.cantidad})`);
        console.log(`[DB] Pedido ${pedido.id} guardado.`);
    }

}
