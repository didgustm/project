import gsap from "gsap";

export const basicCount = (ref: any) => {
    const number: any = Math.round(Math.random() * (1000 - 500) + 500);
    const numbers: any[][] = [];
    for (let j = 0; j < 10; j += 2) {
        const numInner = [];
        for (let i = 1; i <= 10; i++) {
            const num = i + j >= 10 ? i + j - 10 : i + j;
            numInner.push(num);
        }
        numInner.unshift("0");
        numbers.push(numInner);
    }
    numbers.sort(() => Math.random() - 0.5);

    if (ref.current) {
        ref.current.innerHTML = "";
        ref.current.dataset.num = number;
        const frag = document.createDocumentFragment();
        const roll = document.createElement("div");
        roll.style.display = "flex";
        roll.style.width = "80px";
        const arr = ref.current.dataset.num?.split("");
        arr?.forEach((x: Element, idx: number) => {
            const spanTag = document.createElement("span");
            const point = numbers[idx].findIndex(
                (val) => val == x && typeof val == "number"
            );
            spanTag.classList.add("n");
            spanTag.innerHTML = numbers[idx].join(" ");
            spanTag.dataset.point = point.toFixed();
            frag.append(spanTag);
        });
        roll.append(frag);
        ref.current.append(roll);
        ref.current.querySelectorAll(".n").forEach((n: any) => {
            gsap.to(n, {
                y: n.dataset.point * -40,
                duration: 1,
                ease: "power.out",
            });
        });
    }
}