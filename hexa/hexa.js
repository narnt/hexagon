function polygon(nodeId, deep) {
    let z = 0;
    let n = 0;
    let m = 0;
    let l = 0;
    for (i = 0; i < 28; i++) {
        let toClone = document.querySelector(nodeId);
        let clonedNode = toClone.cloneNode(deep);
        let insertPoint = document.getElementById('inserthere');
        let newEl = insertPoint.appendChild(clonedNode);
        newEl.removeAttribute('id');
        newEl.setAttribute('class', i);
        let x = i * 90;
        if (x < 500) {
            newEl.style.left = x + 'px';
        } else {
            y = 80;
            x = z * 90 + 45;
            newEl.style.top = y + 'px';
            newEl.style.left = x + 'px';
            z++;
            if (x < 450) {
                newEl.style.left = x + 'px';
            } else {
                y = 160;
                x = n * 90;
                newEl.style.top = y + 'px';
                newEl.style.left = x + 'px';
                n++;
                if (x < 500) {
                    newEl.style.left = x + 'px';
                } else {
                    y = 240;
                    x = m * 90 + 45;
                    newEl.style.top = y + 'px';
                    newEl.style.left = x + 'px';
                    m++;
                    if (x < 450) {
                        newEl.style.left = x + 'px';
                    } else {
                        y = 320;
                        x = l * 90;
                        newEl.style.top = y + 'px';
                        newEl.style.left = x + 'px';
                        l++;
                    }
                }
            }
        }
    }
}


polygon('#poly', true);
document.getElementById('inserthere').addEventListener('mouseover', function(e) {
    e.currentTarget.classList.add('anim');
    console.log(e.currentTarget);
})
document.getElementById('inserthere').addEventListener('mouseout', function(e) {
    setTimeout(() => {
        document.getElementById('inserthere').classList.remove('anim');
    }, 6000);
    console.log(e.currentTarget);
})