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
      $(disk).addClass("disk-" + towers[pos[0]][pos[1]] + " isDisk");
    }
  }

};

View.prototype.clickTower = function () {
  $towers = $('ul');
  $towers.on("click", this.moveDisk.bind(this));
}

View.prototype.moveDisk = function($event) {
  var diskItems = [];
  var $tower = $($event.currentTarget);
  var $listItems = $tower.children()
  var towerSelect = $tower.attr("id");


  for(var i = 0; i < $listItems.length; i++) {
    if ($($listItems[i]).hasClass("isDisk")) {
      diskItems.push($listItems[i])
    }
  }

  console.log($listItems);
  console.log("disk items: " + diskItems);

  if (!this.towerFrom && diskItems.length > 0) {
    this.towerFrom = towerSelect;
    this.$chosenDisk = diskItems[0];

  } else if (this.towerFrom) {
    var posStart = this.$chosenDisk.data("pos"); // where it is now

    if (diskItems.length === 0) {
      var posEnd = [towerSelect, 0];
      var toMove = this.game.towers[posStart[0]].pop();
      var whereMove = this.game.towers[posEnd[0]].push(toMove);
    }

    this.towerFrom = null;
    this.render();
  }
}
