/* Idea base del principio O (Abierto y cerrado)
abstract class NotificacionService {
    abstract send(mensaje: string): void
}

class NotificacionSMS extends NotificacionService {
    send(mensaje: string){
        console.log("Mensaje enviado por sms")
    }
}

class NotificacionPush extends NotificacionService {
    send(mensaje: string){
        console.log("Notificacion de aviso enseguida")
    }
}

class NotificacionEmail extends NotificacionService {
    send(mensaje: string): void {
        console.log("Envio por mail")
    }
}
*/

abstract class Pagos{
    abstract procesoPago(id: number, monto: number, metodo: string): void
}

class PagoTarjeta extends Pagos {

    procesoPago(id: number, monto: number, metodo: string): void {
        if (monto > 5000) {
            console.error("Monto elevado, cambie el monto a enviar")
        } else {
            console.log("Pago realizado")
        }
    }
}

class PagoPayPal extends Pagos{
    procesoPago(id: number, monto: number, metodo: string): void {
        if (monto > 2000) {
            console.error("Monto elevado para hacer el pago, cambie el monto|")
        } else {
            console.log("Pago realizado")
        }
    }
}

class PagoTransferencia extends Pagos{
    procesoPago(id: number, monto: number, metodo: string): void {
        console.log("Pago enviado, puede demorar unos minutos en llegar el monto")
    }
}