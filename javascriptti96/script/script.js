
        var nome="rogerio";
        let profissao="docente"
        const endereco="rua francisco de silva"

        var valor=0;
        for(let i=0;i<10;i++)
        {
            console.log(i)
            valor=i
        }
        console.log(valor);

    alert(nome.toLowerCase())//lower funciona so na linha 
    alert(nome.toLocaleUpperCase())//Upper
    alert(nome.length)//quantidade de caracteres 
    alert(nome.charAt(4))//retorna a posição do caractere ,se nao tiver nada , retorna a primeira letra 
    alert(endereco.startsWith("ru"))//verifica se começa com "--"
    alert(endereco.endsWith("ro"))//verifica se termina com "--"
    alert(endereco.includes("aro,6"))//procura a palavra apos a posição especificada 
    alert(endereco.rea("aro"))//retorna
