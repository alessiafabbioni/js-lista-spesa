
    // Lista della spesa
    let listaSpesa = ['Pane', 'Latte', 'Frutta', 'Verdura', 'Pasta', 'Riso'];

    // Inizializzazione del contatore
    let i = 0;

    // Creazione di un elemento di lista
    let lista = document.createElement('ul');

    // Ciclo while per aggiungere gli elementi alla lista
    while (i < listaSpesa.length) {
      // Creazione di un elemento di lista per ogni elemento della lista della spesa
      let elementoLista = document.createElement('li');
      // Aggiunta del testo dell'elemento corrente all'elemento di lista
      elementoLista.textContent = listaSpesa[i];
      // Aggiunta dell'elemento di lista alla lista
      lista.appendChild(elementoLista);

      // Incremento del contatore
      i++;
    }

    // Aggiunta della lista alla pagina
    document.body.appendChild(lista);

