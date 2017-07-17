
      $.ajax({
        url: 'http://localhost:3000/api/vehicles',
        dataType: 'json',
        success: function (data) {
            console.log(data);

            var fragment = document.createDocumentFragment();
            var clone;
            var myIndex;
            data.forEach(function(json, index){

                myIndex = index +1;

                clone = $('.js-car').clone().appendTo(fragment);
                clone.find(".js-car-number").html(`Car: ${myIndex}`);
                clone.find(".js-car-model").html(`Model: ${json.model}`);
                clone.find(".js-car-make").html(`Make: ${json.make}`);
                clone.find(".js-car-color").html(`Color: ${json.color}`);

             });

            $('.js-list').append(fragment);
            $('.js-car-sum').html(`Number of cars: ${myIndex}`);

        }
    });



     

  