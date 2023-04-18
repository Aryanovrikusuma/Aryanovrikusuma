new fullpage('#fullpage', {
    autoScrolling: true,
    navigation: true,
    onLeave: (origin, destination, direction) => {
        const section = destination.item;
        const title = section.querySelector("h1");
        const tl = new TimelineMax({ delay: 0.5 });
        tl.fromTo(title, 0.5, { y: "50", opacity: 0 }, { y : 0, opacity : 1 });

        if(destination.index === 1) {
            const anime = document.querySelectorAll(".gojo");
            const description = document.querySelectorAll(".description");

            tl.fromTo(anime, 0.7, { x: "100%" }, { x: "-35%" })
              .fromTo(description, 0.5, { y: "50", opacity: 0 }, { y: 0, opacity: 1})
              .fromTo(anime[0], 1, {  opacity: 1 }, {  opacity: 1})
              .fromTo(anime[1], 1, {  opacity: 0 }, {  opacity: 1})
              .fromTo(anime[2], 1, {  opacity: 0 }, {  opacity: 1})
        }
        else if(destination.index === 2) {
            const anime1 = document.querySelectorAll(".sukuna");
            const description = document.querySelectorAll(".description");

            tl.fromTo(anime1, 0.7, { x: "100%" }, { x: "-35%" })
              .fromTo(description, 0.5, { y: "50", opacity: 0 }, { y: 0, opacity: 1})
              .fromTo(anime1[0], 1, {  opacity: 1 }, {  opacity: 1})
              .fromTo(anime1[1], 1, {  opacity: 0 }, {  opacity: 1})
              .fromTo(anime1[2], 1, {  opacity: 0 }, {  opacity: 1})
        }
        else if(destination.index === 3) {
            const anime2 = document.querySelectorAll(".yuta");
            const description = document.querySelectorAll(".description");

            tl.fromTo(anime2, 0.7, { x: "100%" }, { x: "-35%" })
              .fromTo(description, 0.5, { y: "50", opacity: 0 }, { y: 0, opacity: 1})
              .fromTo(anime2[0], 1, {  opacity: 1 }, {  opacity: 1})
              .fromTo(anime2[1], 1, {  opacity: 0 }, {  opacity: 1})
              .fromTo(anime2[2], 1, {  opacity: 0 }, {  opacity: 1})
        }
    }
});