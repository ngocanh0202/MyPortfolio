function displaySingleWords(str, link, className) {
    var res = str.split("").map(element => {
        return `<span class=${className}>${element}</span>`;
    });
    const domElement = document.querySelector(`${link}`);
    if(domElement == null) return;
    return new Promise((resolve) => {
        res.forEach((element, index) => {
            setTimeout(() => {
                domElement.innerHTML += element;
                if (index === res.length - 1) {
                    resolve();
                }
            }, index * 75);
        });
    });
}

export default displaySingleWords;
