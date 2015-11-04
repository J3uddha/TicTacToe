(function () {
  if (typeof TTT === "undefined") {
    window.TTT = {};
  }


  var View = TTT.View = function (game, $el) {
    this.game = game,
    this.$el = $el
  };

  View.prototype.bindEvents = function () {
    this.$el.on("click", "li", this.makeMove.bind(this));
  };


  View.prototype.makeMove = function ($square) {
      var $target = $($square.target);
      if (!$target.hasClass("x-square") && !$target.hasClass("o-square")) {
        var mark = this.game.currentPlayer;
        $target.addClass(mark + "-square");
        this.game.playMove($target.data("pos"));
      } else {
        alert("Stoopid move dood.");
      };
      if (this.game.winner()) {
        alert(this.game.winner().toUpperCase() + " WINS!");
        location.reload();
      }
  };

  View.prototype.setupBoard = function () {

    var $ul = $("<ul>").addClass("view group").appendTo(this.$el);

    for (var i = 0; i < 3; i++) {
      for (var j = 0; j < 3; j++) {
        $("<li>")
          .data("pos", [i, j])
          .appendTo($ul);
      }
    }
  };
})();
