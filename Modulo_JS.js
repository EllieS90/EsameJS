        let reparti = [
            {nome: "Cancelleria",       spese: [500, 40, 60]},
            {nome: "Servizi igienici",  spese: [1000, 1, 200]},
            {nome: "Vendite",           spese: [0]},
        ];

        let SpesaMax = 0;
        let repartoMax = "";

        let SpesaMin = "9999999";
        let repartoMin = "";
        
        reparti.forEach(function (reparto) {
            let spese = reparto.spese.reduce(function (totale, SingolaSpesa) {
                return totale + SingolaSpesa;
            });

            if (spese > SpesaMax) {
                SpesaMax = spese;
                repartoMax = reparto.nome;
            }
            if (spese < SpesaMin) {
                SpesaMin = spese;
                repartoMin = reparto.nome;
            }
        })

        console.log(`Il reparto che spende di più è ${repartoMax} con una spesa di ${SpesaMax}`)
        console.log(`Il reparto che spende di meno è ${repartoMin} con una spesa di ${SpesaMin}`)