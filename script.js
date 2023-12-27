function convertToBangla() {
    var eDay = document.getElementById('eDay').value;
    var eMonth = document.getElementById('eMonth').value;
    var eYear = document.getElementById('eYear').value;
    if (eYear.length == 0) {
        alert('সাল উল্লেখ করুন।');
        return;
    }
    try{
        var jsonUrl = 'https://bangla.plus/api/converttobangladate/json/?day=' + eDay + '&month=' + eMonth + '&year=' + eYear + '&language=Bangla';
        $.get(jsonUrl, function (result) {
            if (result) {
                document.getElementById('convertedBDate').innerHTML = ' <i class="icon-right-arrow"></i> </span>' + result.FullDate;
                document.getElementById('bWeekday').innerHTML = result.Weekday;
                document.getElementById('season').innerHTML = getBanglaSeason(result.Month);
                //console.log(result);
            }
        });
    }
    catch(err){
        alert(err);
    }
    return false;
}

function getBanglaSeason(monthNumber) {
    if (monthNumber < 1 || monthNumber > 12) {
        return "অজানা"; // Unknown season for invalid input
    }

    // Define the Bengali seasons
    const seasons = [
        "গ্রীষ্ম (Summer)",
        "বর্ষা (Monsoon)",
        "শরৎ (Autumn)",
        "হেমন্ত (Late Autumn)",
        "শীত (Winter)",
        "বসন্ত (Spring)"
    ];

    // Determine the season based on the month number
    const seasonIndex = Math.floor((monthNumber - 1) / 2);
    return seasons[seasonIndex];
}

document.getElementById("convertButton").addEventListener("click", function () {
    convertToBangla();
});
