var Hanoi = window.Hanoi = window.Hanoi || {};


var View = Hanoi.View = function (game, $container){
  this.game = game,
  this.$container = $container,
  this.setupTowers();
  this.render();
  this.clickTower();
}

View.prototype.setupTowers = function () {
  for (var i = 0; i < 3; i++) {
    var $ul = $("<ul>");
    $ul.addClass("towers group")
    .attr("id", i)
    .appendTo(this.$container);
      for (var j = 2; j >= 0; j--) {
        var $li = $("<li>");
        $li.data("pos", [i, j])
        .appendTo($ul);
    }
  };
}

View.prototype.render = function () {

  var $disks = $("li");
  var towers = this.game.towers;

  for (var i = 0; i < $disks.length; i++) {
    var disk = $disks[i];
    var pos = $(disk).data("pos");

    $(disk).removeClass();
    if (towers[pos[0]][pos[1]]) {
      $(disk).addClass("disk-" + towers[pos[0]][pos[1]]);
    }
  }

}

View.prototype.clickTower () {
  $

}
