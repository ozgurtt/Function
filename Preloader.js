var g1;


Game.Preloader = function(game){
    this.preloadBar = null;
    g1=game;
};

Game.Preloader.prototype = {
    preload:function(){
        this.preloadBar = this.add.sprite(this.world.centerX,
                                        this.world.centerY,'preloaderBar');
        this.preloadBar.anchor.setTo(0.5,0.5);
        this.time.advancedTiming - true;
        this.load.setPreloadSprite(this.preloadBar);

        Phaser.ScaleManager.SHOW_ALL = 0;
        this.game.scaleMode = Phaser.ScaleManager.SHOW_ALL;




        this.scale.refresh();
        //ASSETS

        g1.load.image('tank', 'assets/tank.png');
        g1.load.image('enemy', 'assets/enemy.png');
        g1.load.image('logo', 'assets/logo.png');
        g1.load.image('bullet', 'assets/bullet.png');
        g1.load.image('turret', 'assets/turret.png');
        g1.load.image('enterworld', 'assets/enterworld.png');
        g1.load.image('modtank', 'assets/modtank.png');
        g1.load.image('muzzle', 'assets/muzzle.png');
        g1.load.image('bg', 'assets/debug-grid-1920x1920.png');
        g1.load.image('compass', 'assets/images/compass_rose.png');
        g1.load.image('touch_segment', 'assets/images/touch_segment.png');
        g1.load.image('touch', 'assets/images/touch.png');



    },



    create:function(){
        Phaser.ScaleManager.SHOW_ALL = 0;
        this.game.scaleMode = Phaser.ScaleManager.SHOW_ALL;

        this.scale.refresh();

        this.stage.backgroundColor = '#3A5963';




        //logo = g1.add.sprite(100,300,'logo');
        //tanko = g1.add.sprite(1000,300,'tank');
        //var playbutton = g1.add.sprite(100, 500, 'enterworld');
        //button = g1.add.button(100, 500, 'enterworld', loadWorld, this, 2, 1, 0);
        //modify = g1.add.sprite(90, 660, 'modtank');

        g1.world.setBounds(0, 0, 1920, 1920);

    }

};
