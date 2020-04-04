export const mapInt = (int, func) => {
    //utility function that makes integer behave as array.map()

    const arr = [];
    for(let i = 1; i <= int; i++ ) {
        arr.push(i);
    }

    return arr.map(func);
}

export const getLabel = value => {
     switch(value) {
         case 1: return 'Eri mieltä';
         case 2: return 'Hieman eri mieltä';
         case 3: return 'En tiedä';
         case 4: return 'Hieman samaa mieltä';
         case 5: return 'Samaa mieltä';
         default: return '';
     }
 }