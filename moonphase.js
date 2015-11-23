function moonphase() {
    "use strict";

    var MOONPHASE = {
        get: function() {
            // Converted and adapted from: http://jivebay.com/calculating-the-moon-phase/

            var d = new Date(),
                year = d.getFullYear(),
                month = d.getMonth(),
                date = d.getDate(),
                c,e,jd,b,diff;

            if (month < 3) {
                year--;
                month += 12;
            }

            month++;

            c = 365.25 * year;
            e = 30.6 * month;
            jd = c + e + date - 694039.09;
            jd /= 29.5305882;
            b = parseInt(jd);
            jd -= b;
            b = Math.round(jd * 8);

            diff = jd*10;
            diff = +diff.toFixed(2);

            if (b >= 8 ) {
                b = 0;
            }

            switch (b) {
                case 0:
                    return "New Moon";
                    break;
                case 1:
                    return "Waxing Crescent";
                    break;
                case 2:
                    return "First Quarter";
                    break;
                case 3:
                    return "Waxing Gibbous";
                    break;
                case 4:
                    return "Full Moon";
                    break;
                case 5:
                    return "Waning Gibbous";
                    break;
                case 6:
                    return "Third Quarter";
                    break;
                case 7:
                    return "Waning Crescent";
                    break;
                default:
                    console.log('Error');
            }
        }
    };

    return {
        get: MOONPHASE.get
    }
}
var moon = moonphase();