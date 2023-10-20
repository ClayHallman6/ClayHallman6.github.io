/*

Template: Sam Martin - Personal Vcard Resume HTML Template
Author: potenzaglobalsolutions.com
Version: 1.1 
Design and Developed by: potenzaglobalsolutions.com

NOTE:  

*/

(function($){
  "use strict";

/*************************
      Add calendar Events
*************************/
         var events = [ 
            { Title: "On Leave", Date: new Date("11/06/2023") },
            { Title: "On Leave", Date: new Date("12/22/2023") },
            { Title: "On Leave", Date: new Date("12/23/2023") },
            { Title: "On Leave", Date: new Date("12/24/2023") },
            { Title: "On Leave", Date: new Date("12/25/2023") },
            { Title: "On Leave", Date: new Date("12/26/2023") },
            { Title: "On Leave", Date: new Date("12/27/2023") },
            { Title: "On Leave", Date: new Date("12/28/2017") }
        ];
        $("#datepicker").datepicker({
            dateFormat: 'DD, d MM, yy',
            beforeShowDay: function(date) {

                var result = [true, '', null];
                var matching = $.grep(events, function(event) {
                    return event.Date.valueOf() === date.valueOf();
                });
                
                if (matching.length) {
                    result = [true, 'highlight', null];
                }
               var date = $(this).datepicker('getDate');
               $('#day').html($.datepicker.formatDate('DD', date));
               $('#mnt').html($.datepicker.formatDate('MM', date));
               $('#date').html($.datepicker.formatDate('d', date));
                return result;
            },
            onSelect: function(dateText) {
                var date,
                    selectedDate = new Date(dateText),
                    i = 0,
                    event = null;
                
                while (i < events.length && !event) {
                    date = events[i].Date;

                    if (selectedDate.valueOf() === date.valueOf()) {
                        event = events[i];
                    }
                    i++;
                }
                if (event) {
                    alert(event.Title);
                }
            }
        });


})(jQuery);