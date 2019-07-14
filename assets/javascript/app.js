class gifs {

    constructor() {

        this.gifs = ["bear", "moose", "capybara"];

        this.renderButtons();

        this.newQuery();

        this.getGifs();

    }

    renderButtons() {

        $("#options").empty();

        for (var i = 0; i < this.gifs.length; i++) {

            $("#options").append("<button class='gif-btn'>" + this.gifs[i] + "</button>");

        }

    }

    newQuery() {

        var _self = this;

        $("#newQuery").on("click", function () {

            event.preventDefault();

            _self.gifs.push($("#gif-search").val());

            _self.renderButtons();

            _self.newQuery();

            _self.getGifs();

        });

    }

    getGifs() {

        var _self = this;

        $(".gif-btn").on("click", function() {

            var urlQuery = "http://api.giphy.com/v1/gifs/search?q="+$(this).text()+"&api_key=JiBoAwx0n2p0NtUEJSBNedgrJrtsGLZU&limit=5&rating=PG";

            $.ajax({
                url: urlQuery,
                method:"GET"
            }).then(function(response) {

                $("#gifs").empty();

                for (var i=0; i<response.data.length; i++) {

                    $("#gifs").append("<img class='gif' src='"+response.data[i].images.fixed_height.url+"'>");

                }
            });

        });

    }

}


