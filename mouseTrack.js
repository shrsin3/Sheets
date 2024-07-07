const eventList = [];

window.addEventListener("click", (event) => {
    let x = event.pageX;  // Horizontal
    let y = event.pageY;  // Vertical
    let time = event.timeStamp
    eventList.push({"x": x, "y": y, "timeStamp": time})
    console.log(x,y, time);
    console.log(event.target);
    console.log(eventList);
});

document.addEventListener("visibilitychange", ()=>{
    if (document.hidden) {
        fetch('http://localhost:5000/api/sheetsData',{
            method: "post",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({ eventList }),
            keepalive: true
        })

        localStorage.clear();

    }
})