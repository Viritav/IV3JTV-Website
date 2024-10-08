let topbtn = document.getElementById("top");

window.onscroll = function () {
	scrollFunction();
};

function scrollFunction() {
	if (
		document.body.scrollTop > 500 ||
		document.documentElement.scrollTop > 500
		) {
		topbtn.style.display = "block";
		} else {
		topbtn.style.display = "none";
	}
}

topbtn.addEventListener("click", backToTop);

function backToTop() {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
}

function show() {
    id = document.getElementById("email");    
    id.innerHTML = '<a href="mailto:iv3jtv@mciacchi.it" title="Send me an e-mail"><h3>iv3jtv@mciacchi.it</h3></a>';
}

function inIframe () {
    try {
        return window.self !== window.top;
    } catch (e) {
        return true;
    }
}

if (!inIframe()) {
	window.location = ('https://iv3jtv.altervista.org'+'?page='+window.location.pathname);
}

let lang = navigator.language.slice(0, 2);

if (lang === 'it') {
	document.querySelectorAll('.en').forEach(elem => elem.style.display = 'none');
} else {
    document.querySelectorAll('.it').forEach(elem => elem.style.display = 'none');
}

var itaB = document.getElementById("ita");
itaB.addEventListener("click", function() {
	document.querySelectorAll('.it').forEach(elem => elem.style.display = 'block');
	document.querySelectorAll('.en').forEach(elem => elem.style.display = 'none');
});

var engB = document.getElementById("eng");
engB.addEventListener("click", function() {
	document.querySelectorAll('.en').forEach(elem => elem.style.display = 'block');
	document.querySelectorAll('.it').forEach(elem => elem.style.display = 'none');
});