function concatWords(words){
    const textArrived = words.toString().split(',');
    const textJoined = textArrived.join(' ');
    //console.log('invoco esta!')
    return textJoined
    
}

export default function escapeRegExp(string){
   const defaultComillasRemovalMap = [
        { 'base': 'ó', 'letters': /&#243;/g },
        { 'base': 'í', 'letters': /&#237;/g },
        { 'base': 'é', 'letters': /&#233;/g },
        { 'base': 'ñ', 'letters': /&#241;/g },
        { 'base': 'a', 'letters': /&#225;/g }
    ]
    const string1 = ' '.toString().concat(string, ' ');
    const separate = string1.toString().split(' ');
    var cont = 0;

    separate.forEach(pal => {
        cont++;
        defaultComillasRemovalMap.forEach(text => {
            if (pal.toString().search(text.letters) >= 1) {
                separate.splice(cont, 0, pal.toString().replace(text.letters, text.base))
                var i = separate.indexOf(pal);
                separate.splice(i, 1)
            }
        })
    })
    //concatWords('cosa')
    return concatWords(separate)
}