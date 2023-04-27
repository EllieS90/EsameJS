        function selector(s) {
            let sele = false;

            if ( // Non ci ho capito piu niente era tardi sò che è tutto errato questo...
                s == "Lui", "Lei", "Egli", "Ella", "Cthulhu", "?!?", "are",
                "ere", "ire", "\\.", ",", "!", "\\?", ":", ";", "-", "~",
                "\\.", ",", "!", "\\?", ":", ";", "-", "~") {
                sele = true;
            }

            if (sele) {
                if (s.startsWith("Lui", "Lei", "Egli", "Ella", "Cthulhu", "?!?", "are",
                "ere", "ire", "\\.", ",", "!", "\\?", ":", ";", "-", "~",
                "\\.", ",", "!", "\\?", ":", ";", "-", "~")) {
                    console.log(`'${s}'La frase è Pazza!!`);
                } else {
                    console.log(`'${s}'La frase è corretta!!`);
                }
            } else {
                return;
            }
        }
        selector(".Quando guardi a lungo nell’abisso, l’abisso ti guarda dentro");
        selector("Andare a rimirare");
        selector("Lui e’ pazzo.");
        selector("~ Papa’, come sta Church? ~");
        selector("~ Pensava sempre al mare come a la mar, come lo chiamano in spagnolo quando loamano ~");