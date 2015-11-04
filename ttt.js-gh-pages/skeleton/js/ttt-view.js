(function () {
  if (typeof TTT === "undefined") {
    window.TTT = {};
  }


  var View = TTT.View = function (game, $el) {
    this.game = game,
    this.$el = $el
  };

  View.prototype.bindEvents = function () {
    this.$el.on("click", "li", function (e){

      var $target = $(e.target);
      if (!$target.hasClass("x-square") && !$target.hasClass("o-square")) {
        mark = this.game.currentPlayer;
        console.log(mark);
        $target.addClass(mark + "-square");
        this.game.playMove($target.data("pos"));
      } else {
        alert("Stoopid move dood.");
      }


    }.bind(this));
  };

  View.prototype.makeMove = function ($square) {

  };

  View.prototype.setupBoard = function () {

    var $ul = $("<ul>").addClass("view group");

    for (var i = 0; i < 3; i++){
      for (var j = 0; j < 3; j++){
        var cell = $("<li>");
        cell.data("pos", [i, j]);
        $ul.append(cell);
      }
    }

    this.$el.append($ul);
  };
})();
