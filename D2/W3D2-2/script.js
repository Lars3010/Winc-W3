const huiswerkMaken = (vak, callback) => {
    console.log(`Ik ga nu mijn ${vak} huiswerk maken.`);
    setTimeout(() => {
        callback();
    }, 9000);
    
}

const klaarMetHuiswerk = () => {
    console.log("Ik ben klaar met mijn huiswerk.");
}

huiswerkMaken('wiskunde', klaarMetHuiswerk);