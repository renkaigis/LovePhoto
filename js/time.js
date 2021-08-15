// function timer() {
//     window.setTimeout("show_date_time()", 1000);
//     var start = new Date("2020-01-22");
//     var t = new Date().getTime() - start;
//     var h = ~~(t / 1000 / 60 / 60 % 24);
//     if (h < 10) {
//         h = "0" + h;
//     }
//     var m = ~~(t / 1000 / 60 % 60);
//     if (m < 10) {
//         m = "0" + m;
//     }
//     var s = ~~(t / 1000 % 60);
//     if (s < 10) {
//         s = "0" + s;
//     }
//     document.getElementById('d').innerHTML = ~~(t / 1000 / 60 / 60 / 24);
//     document.getElementById('h').innerHTML = h;
//     document.getElementById('m').innerHTML = m;
//     document.getElementById('s').innerHTML = s;

//     console.log("aBirthDay");
// }
// timer();

function show_date_time() {
    window.setTimeout("show_date_time()", 1000);
    // BirthDay = new Date("2020-01-22");//这个日期是可以修改的
    BirthDay = new Date(2020, 0, 22, 0, 0, 0);
    today = new Date();
    timeold = (today.getTime() - BirthDay.getTime());
    sectimeold = timeold / 1000
    secondsold = Math.floor(sectimeold);
    msPerDay = 24 * 60 * 60 * 1000
    e_daysold = timeold / msPerDay
    daysold = Math.floor(e_daysold);
    e_hrsold = (e_daysold - daysold) * 24;
    hrsold = Math.floor(e_hrsold);
    e_minsold = (e_hrsold - hrsold) * 60;
    minsold = Math.floor((e_hrsold - hrsold) * 60);
    seconds = Math.floor((e_minsold - minsold) * 60);

    if (hrsold < 10) {
        hrsold = "0" + hrsold;
    }
    if (minsold < 10) {
        minsold = "0" + minsold;
    }
    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    document.getElementById('d').innerHTML = daysold;
    document.getElementById('h').innerHTML = hrsold;
    document.getElementById('m').innerHTML = minsold;
    document.getElementById('s').innerHTML = seconds;
}
show_date_time();