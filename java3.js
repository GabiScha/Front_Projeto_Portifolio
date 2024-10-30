

document.addEventListener("DOMContentLoaded", function () {
    const btnBranco2 = document.getElementById('btnbranco2');


    btnBranco2.style.borderBottom = '0.1vh solid #E1E6EF';
    btnBranco2.style.paddingBottom = '4px';
});





const btn1 = document.getElementById("btnbranco1");

btn1.addEventListener("mouseenter", () => {
    const btnBranco1 = document.getElementById('btnbranco1');

    btnBranco1.style.borderBottom = '0.1vh solid #E1E6EF'; // Exibe a linha
    btnBranco1.style.paddingBottom = '4px';
});

btn1.addEventListener("mouseleave", () => {
    const btnBranco1 = document.getElementById('btnbranco1');

    btnBranco1.style.borderBottom = 'none'; // Remove a linha
    btnBranco1.style.paddingBottom = '0px';
});





const btn3 = document.getElementById("btnbranco3");

btn3.addEventListener("mouseenter", () => {
    const btnBranco3 = document.getElementById('btnbranco3');

    btnBranco3.style.borderBottom = '0.1vh solid #E1E6EF'; // Exibe a linha
    btnBranco3.style.paddingBottom = '4px';
});

btn3.addEventListener("mouseleave", () => {
    const btnBranco3 = document.getElementById('btnbranco3');

    btnBranco3.style.borderBottom = 'none'; // Remove a linha
    btnBranco3.style.paddingBottom = '0px';
});





document.addEventListener("DOMContentLoaded", function () {
    const ball1 = document.querySelector("#linguagens3 .ball1");

    
    const observerCallback = (entries) => {
        entries.forEach((entry) => {
            console.log("Entrou na visualização:", entry.isIntersecting);
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add("visible");
                }, 100);
            } else {
                entry.target.classList.remove("visible");
            }
        });
    };

    
    const observer = new IntersectionObserver(observerCallback, {
        threshold: 0.1 
    });

    observer.observe(ball1);
});


document.addEventListener("DOMContentLoaded", function () {
    const ball2 = document.querySelector("#linguagens3 .ball2");

    
    const observerCallback = (entries) => {
        entries.forEach((entry) => {
            console.log("Entrou na visualização:", entry.isIntersecting);
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add("visible");
                }, 100);
            } else {
                entry.target.classList.remove("visible");
            }
        });
    };

    
    const observer = new IntersectionObserver(observerCallback, {
        threshold: 0.1 
    });

    observer.observe(ball2);
});




document.addEventListener("DOMContentLoaded", function () {
    const ball3 = document.querySelector("#linguagens3 .ball3");

    
    const observerCallback = (entries) => {
        entries.forEach((entry) => {
            console.log("Entrou na visualização:", entry.isIntersecting);
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add("visible");
                }, 100);
            } else {
                entry.target.classList.remove("visible");
            }
        });
    };

    
    const observer = new IntersectionObserver(observerCallback, {
        threshold: 0.1 
    });

    observer.observe(ball3);
});


document.addEventListener("DOMContentLoaded", function () {
    const ball4 = document.querySelector("#linguagens3 .ball4");

    
    const observerCallback = (entries) => {
        entries.forEach((entry) => {
            console.log("Entrou na visualização:", entry.isIntersecting);
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add("visible");
                }, 100);
            } else {
                entry.target.classList.remove("visible");
            }
        });
    };

    
    const observer = new IntersectionObserver(observerCallback, {
        threshold: 0.1 
    });

    observer.observe(ball4);
});
document.addEventListener("DOMContentLoaded", function () {
    const ball5 = document.querySelector("#linguagens3 .ball5");

    
    const observerCallback = (entries) => {
        entries.forEach((entry) => {
            console.log("Entrou na visualização:", entry.isIntersecting);
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add("visible");
                }, 100);
            } else {
                entry.target.classList.remove("visible");
            }
        });
    };

    
    const observer = new IntersectionObserver(observerCallback, {
        threshold: 0.1 
    });

    observer.observe(ball5);
});
document.addEventListener("DOMContentLoaded", function () {
    const ball6 = document.querySelector("#linguagens3 .ball6");

    
    const observerCallback = (entries) => {
        entries.forEach((entry) => {
            console.log("Entrou na visualização:", entry.isIntersecting);
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add("visible");
                }, 100);
            } else {
                entry.target.classList.remove("visible");
            }
        });
    };

    
    const observer = new IntersectionObserver(observerCallback, {
        threshold: 0.1 
    });

    observer.observe(ball6);
});







document.addEventListener("DOMContentLoaded", function () {
    const bola1 = document.querySelector("#aplicativos3 .bola1");

    
    const observerCallback = (entries) => {
        entries.forEach((entry) => {
            console.log("Entrou na visualização:", entry.isIntersecting);
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add("visible");
                }, 100);
            } else {
                entry.target.classList.remove("visible");
            }
        });
    };

    
    const observer = new IntersectionObserver(observerCallback, {
        threshold: 0.1 
    });

    observer.observe(bola1);
});

document.addEventListener("DOMContentLoaded", function () {
    const bola2 = document.querySelector("#aplicativos3 .bola2");

    
    const observerCallback = (entries) => {
        entries.forEach((entry) => {
            console.log("Entrou na visualização:", entry.isIntersecting);
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add("visible");
                }, 100);
            } else {
                entry.target.classList.remove("visible");
            }
        });
    };

    
    const observer = new IntersectionObserver(observerCallback, {
        threshold: 0.1 
    });

    observer.observe(bola2);
});
document.addEventListener("DOMContentLoaded", function () {
    const bola3 = document.querySelector("#aplicativos3 .bola3");

    
    const observerCallback = (entries) => {
        entries.forEach((entry) => {
            console.log("Entrou na visualização:", entry.isIntersecting);
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add("visible");
                }, 100);
            } else {
                entry.target.classList.remove("visible");
            }
        });
    };

    
    const observer = new IntersectionObserver(observerCallback, {
        threshold: 0.1 
    });

    observer.observe(bola3);
});
document.addEventListener("DOMContentLoaded", function () {
    const bolas1 = document.querySelector("#outras3 .bolas1");

    
    const observerCallback = (entries) => {
        entries.forEach((entry) => {
            console.log("Entrou na visualização:", entry.isIntersecting);
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add("visible");
                }, 100);
            } else {
                entry.target.classList.remove("visible");
            }
        });
    };

    
    const observer = new IntersectionObserver(observerCallback, {
        threshold: 0.1 
    });

    observer.observe(bolas1);
});
document.addEventListener("DOMContentLoaded", function () {
    const bolas2 = document.querySelector("#outras3 .bolas2");

    
    const observerCallback = (entries) => {
        entries.forEach((entry) => {
            console.log("Entrou na visualização:", entry.isIntersecting);
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add("visible");
                }, 100);
            } else {
                entry.target.classList.remove("visible");
            }
        });
    };

    
    const observer = new IntersectionObserver(observerCallback, {
        threshold: 0.1 
    });

    observer.observe(bolas2);
});
document.addEventListener("DOMContentLoaded", function () {
    const bolas3 = document.querySelector("#outras3 .bolas3");

    
    const observerCallback = (entries) => {
        entries.forEach((entry) => {
            console.log("Entrou na visualização:", entry.isIntersecting);
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add("visible");
                }, 100);
            } else {
                entry.target.classList.remove("visible");
            }
        });
    };

    
    const observer = new IntersectionObserver(observerCallback, {
        threshold: 0.1 
    });

    observer.observe(bolas3);
});





