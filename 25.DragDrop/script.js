let items = document.querySelectorAll(".box");
let unrankedBox = document.querySelector(".graySection2");
let graySections = document.querySelectorAll(".graySection");


for (let item of items) {
    item.addEventListener("dragstart", function (e) {
        let selected = e.target;
        console.log(selected);


        for (let section of graySections) {
            section.addEventListener("dragover", function (e) {
                e.preventDefault();
            });

            section.addEventListener("drop", function (e) {
                e.preventDefault();
                section.appendChild(selected);
                selected = null;
            });
        }

        unrankedBox.addEventListener("dragover", function (e) {
            e.preventDefault();
        });

        unrankedBox.addEventListener("drop", function (e) {
            e.preventDefault();
            unrankedBox.appendChild(selected);
            selected = null;
        });
    });
}
