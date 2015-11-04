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
      $target.toggleClass("clicked");

    });
  };

  View.prototype.makeMove = function ($square) {

  };

  View.prototype.setupBoard = function () {

    var $ul = $("<ul>").addClass("view group");
    var cells = $("<li><li><li><li><li><li><li><li><li>");
    $ul.append(cells);

    this.$el.append($ul);
  };
})();
