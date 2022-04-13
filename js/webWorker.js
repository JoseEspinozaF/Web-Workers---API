function NumerosPrimos() {
    for (let i = 0; i <= 99999; i++) {
        if (i%2==0) {
            postMessage(i)
        }
        
    }
}
NumerosPrimos()


/*todo lo que aqui ocurre no interferira en el
funcionamiento de mi pagina, ya que se ejecuta
en un seguno plano o hilo*/