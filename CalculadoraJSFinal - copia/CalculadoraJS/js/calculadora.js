// select
const Display = selector('display');
const err = selector('error');
const res = selector('res');
const tV = selector('tV');
const tVRes = selector('tVRes');

const form = {
    x: selector('x'),
    x0: selector('x0'),
    x0D: selector('x0D'),
    x1: selector('x1'),
    fx0: selector('fx0'),
    fx0D: selector('fx0D'),
    fx1: selector('fx1'),
    tV: tV
}
const btns = {
    1: selector('btn1'),
    2: selector('btn2'),
    3: selector('btn3'),
    4: selector('btn4'),
    5: selector('btn5'),
    6: selector('btn6'),
    7: selector('btn7'),
    8: selector('btn8'),
    9: selector('btn9'),
    0: selector('btn0'),
    point: selector('btnPoint'),
    back: selector('btnBack'),
    next: selector('btnNext'),
    submit: selector('submit'),
    delete: selector('delete'),
    menos: selector('menos'),
    clear: selector('clear')
}

//submit
btns.submit.addEventListener('click', () => {

    if (!validateEmpty()) {
        err.textContent = "* todos los campos son requeridos";
    } else {
        err.innerHTML = "";
        const f = parseFormFloat();
        if (!validateX(f)) {
            err.textContent = "* las x no pueden ser iguales";
        } else {
            err.textContent = "";
            if (validateFx(f)) {
                err.textContent = "";
                res.textContent = `res = ${calcularRes(f)}`;
                if(form.tV.value != ""){
                    let ev = f.tV-calcularRes(f)
                    tVRes.textContent = `Error = ${(ev/f.tV)*100}%`
                }
            } else {
                err.textContent = "* las fx no pueden ser iguales"
            }
        }
    }
})



function calcularRes(f) {

    return f.fx0 + ((f.fx1 - f.fx0) / (f.x1 - f.x0)) * (f.x - f.x0)
}

//foco
let pos = 0;
document.addEventListener('DOMContentLoaded', () => focused(pos))
btns.back.addEventListener('click', () => {
    if (pos - 1 >= 0) {
        pos--;

    }
    focused(pos);

});
btns.next.addEventListener('click', () => {
    if (pos + 1 <= 5) {
        pos++;

    }
    focused(pos);

})
function focused(pos) {
    clearInp();
    if (pos != 0 && pos != 3) {
        const inp = itmPos(pos);
        inp.setAttribute('class', 'foco');
    } else {
        if (pos === 0) {
            const inp1 = itmPos(pos).fx0;
            const inp2 = itmPos(pos).fx0D;
            inp1.setAttribute('class', 'foco');
            inp2.setAttribute('class', 'foco');
        }
        if (pos === 3) {
            const inp1 = itmPos(pos).x0;
            const inp2 = itmPos(pos).x0D;
            inp1.setAttribute('class', 'foco');
            inp2.setAttribute('class', 'foco');
        }
    }
}
function clearInp() {
    form.x.setAttribute('class', 'inpForm');
    form.x0.setAttribute('class', 'inpForm');
    form.x0D.setAttribute('class', 'inpForm');
    form.x1.setAttribute('class', 'inpForm');
    form.fx0.setAttribute('class', 'inpForm');
    form.fx0D.setAttribute('class', 'inpForm');
    form.fx1.setAttribute('class', 'inpForm');
    form.tV.setAttribute('class', 'inpForm');
}

//teclado
btns[0].addEventListener('click', () => {
    fillInput(pos, 0);
})
btns[1].addEventListener('click', () => {
    fillInput(pos, 1);
})
btns[2].addEventListener('click', () => {
    fillInput(pos, 2);
})
btns[3].addEventListener('click', () => {
    fillInput(pos, 3);
})
btns[4].addEventListener('click', () => {
    fillInput(pos, 4);
})
btns[5].addEventListener('click', () => {
    fillInput(pos, 5);
})
btns[6].addEventListener('click', () => {
    fillInput(pos, 6);
})
btns[7].addEventListener('click', () => {
    fillInput(pos, 7);
})
btns[8].addEventListener('click', () => {
    fillInput(pos, 8);
})
btns[9].addEventListener('click', () => {
    fillInput(pos, 9);
})
btns.delete.addEventListener('click', () => {
    deleteInput(pos);
})
btns.point.addEventListener('click', () => {
    fillInput(pos, ".");
})
btns.menos.addEventListener('click', () => {
    fillInput(pos, "-");
})
btns.clear.addEventListener('click', () => {
    for (const key in form) {
        if (Object.hasOwnProperty.call(form, key)) {
            const e = form[key];
            e.value = "";
        }
    }
})

//utils
function fillInput(p, v) {
    if (pos === 0) {
        form.fx0.value += v;

        form.fx0D.value = form.fx0.value;
    }
    if (pos === 1) {
        form.fx1.value += v;
    }
    if (pos === 2) {
        form.x1.value += v;
    }
    if (pos === 3) {
        form.x0.value += v;
        form.x0D.value += v;
    }
    if (pos === 4) {
        form.x.value += v;
    }
    if (pos === 5) {
        form.tV.value += v;
    }
}

function deleteInput(p) {
    if (pos === 0) {
        form.fx0.value = "";
        form.fx0D.value = form.fx0.value;
    }
    if (pos === 1) {
        form.fx1.value = "";
    }
    if (pos === 2) {
        form.x1.value = "";
    }
    if (pos === 3) {
        form.x0.value = "";
        form.x0D.value = form.x0.value;
    }
    if (pos === 4) {
        form.x.value = "";
    }
}

function itmPos(pos) {
    if (pos === 0) {
        return {
            fx0: form.fx0,
            fx0D: form.fx0D
        };
    }
    if (pos === 1) {
        return form.fx1;
    }
    if (pos === 2) {
        return form.x1;
    }
    if (pos === 3) {
        return {
            x0: form.x0,
            x0D: form.x0D
        }
    }
    if (pos === 4) {
         return form.x;
    }
    if(pos === 5){
        return form.tV;
    }
}

function selector(id = "") {
    return document.querySelector(`#${id}`);
}

function parseFormFloat() {
    const f = {
        x: parseFloat(form.x.value),
        x0: parseFloat(form.x0.value),
        x0D: parseFloat(form.x0D.value),
        x1: parseFloat(form.x1.value),
        fx0: parseFloat(form.fx0.value),
        fx0D: parseFloat(form.fx0D.value),
        fx1: parseFloat(form.fx1.value),
        tV: parseFloat(form.tV.value)
    }
    return f;
}

function validateEmpty() {
    let r = false;
    for (const itm in form) {
        if (Object.hasOwnProperty.call(form, itm)) {
            const e = form[itm];
            if (e.value === "") {
                return false
            }
        }
        return true;
    }
}

function validateX(f) {
    if (
        f.x === f.x0 ||
        f.x === f.x1 ||
        f.x0 === f.x1
    ) {
        return false;
    } else {

        return true;
    }
}

function validateFx(f) {
    if (
        f.fx0 === f.fx1
    ) {
        return false;
    } else {

        return true;
    }
}