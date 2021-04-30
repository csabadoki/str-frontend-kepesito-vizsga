function changeOuterLinks() {
    document.querySelectorAll("nav#link-list a")
    .forEach(a => {
        if (a.innerHTML.includes('outer-link')) {
        a.setAttribute('target', '_blank');
        a.innerHTML = '<strong>' + a.innerHTML + '</strong>';
    }
})

const nav = document.querySelector("nav");
nav.style.border = "1px solid blue";
nav.style.display = "flex";
nav.style.flexDirection = "column";
nav.style.margin = "0 auto";
nav.style.padding = "16px";
nav.style.width= "30%";
}


export { changeOuterLinks };