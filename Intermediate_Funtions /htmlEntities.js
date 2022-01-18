function convertHTML(str) {
    let nStr = str.split("");
     for (let i = 0; i < nStr.length; i++){
       
       switch(nStr[i]){
        
        case('&'):
            nStr[i] = '&amp;';
            break;
        case('<'):
            nStr[i] = '&lt;'
            break;
        case('>'):
            nStr[i] = '&gt;'
            break;
        case('"'):
            nStr[i] = '&quot;'
            break;
        case("'"):
            nStr[i] = '&apos;'
            break;
       } 
       
     }
    console.log(nStr.join(''))
    }
    
    convertHTML("Dolce & Gabbana");
    convertHTML("Hamburgers < Pizza < Tacos");
    convertHTML("Sixty > twelve");
    convertHTML('Stuff in "quotation marks"');
    convertHTML("Schindler's List");
    convertHTML("<>")
    convertHTML("abc")