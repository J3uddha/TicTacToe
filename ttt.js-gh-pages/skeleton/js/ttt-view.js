(function () {
  if (typeof TTT === "undefined") {
    window.TTT = {};
  }


  var View = TTT.View = function (game, $el) {
    this.game = game,
    this.$el = $el
  };

  View.prototype.bindEvents = function () {

    // this.$el.on("click", "li", function (e) {
    //   this.makeMove(e)
    // }.bind(this));

    this.$el.on("click", "li", this.makeMove.bind(this));

    // this.$el.on("click", "li", function (e) {
    //   var $target = $(e.target);
    //   if (!$target.hasClass("x-square") && !$target.hasClass("o-square")) {
    //     mark = this.game.currentPlayer;
    //     $target.addClass(mark + "-square");
    //     this.game.playMove($target.data("pos"));
    //   } else {
    //     alert("Stoopid move dood.");
    //   };
    //   if (this.game.winner){
    //     alert(this.game.winner + "WINS!");
    //   }
    // }.bind(this));
  };

  // var $.prototype.on = function (eventName, cb) {
  //   when eventName happens {
  //     var theEvent = new $.Event();
  //     cb(theEvent);
  //   }
  //
  // }

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
