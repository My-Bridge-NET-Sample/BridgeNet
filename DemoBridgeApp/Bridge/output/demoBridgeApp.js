/* global Bridge */

"use strict";

Bridge.define('DemoBridgeApp.App.Plant', {
    config: {
        properties: {
            Common: null,
            Light: null,
            Indoor: false
        }
    }
});

Bridge.define('DemoBridgeApp.App.Plants', {
    statics: {
        getFlowers: function () {
            return Bridge.merge(new Bridge.List$1(DemoBridgeApp.App.Plant)(), [
                [Bridge.merge(new DemoBridgeApp.App.Plant(), {
                    setCommon: "Anemone",
                    setLight: "Shade",
                    setIndoor: true
                } )],
                [Bridge.merge(new DemoBridgeApp.App.Plant(), {
                    setCommon: "Columbine",
                    setLight: "Shade",
                    setIndoor: true
                } )],
                [Bridge.merge(new DemoBridgeApp.App.Plant(), {
                    setCommon: "Marsh Marigold",
                    setLight: "Sunny",
                    setIndoor: false
                } )],
                [Bridge.merge(new DemoBridgeApp.App.Plant(), {
                    setCommon: "Gential",
                    setLight: "Sun or Shade",
                    setIndoor: false
                } )],
                [Bridge.merge(new DemoBridgeApp.App.Plant(), {
                    setCommon: "Woodland",
                    setLight: "Sun or Shade",
                    setIndoor: false
                } )]
            ] );
        }
    }
});

Bridge.define('DemoBridgeApp.App', {
    statics: {
        config: {
            init: function () {
                Bridge.ready(this.main);
            }
        },
        main: function () {
            var $t, $t1, $t2;
            // Simple alert() to confirm it's working
            //Global.Alert("Success");

            //Test linq queries by simple variable...
            var names = ["Daniil", "Fabricio", "Geoffrey", "Leonid", "Ozgur"];
            var query = Bridge.Linq.Enumerable.from(names).where(function (n) {
                return Bridge.String.contains(n,"i");
            }).orderBy(function (n) {
                return n;
            }).select(function (n) {
                return n.toUpperCase();
            });

            $t = Bridge.getEnumerator(query);
            while ($t.moveNext()) {
                var q = $t.getCurrent();
                Bridge.get(console).log(q);
            }

            //test linq with objects...
            var queryPlants = Bridge.Linq.Enumerable.from(Bridge.get(DemoBridgeApp.App.Plants).getFlowers()).groupBy(function (flower) {
                return flower.getLight();
            });
            $t1 = Bridge.getEnumerator(queryPlants);
            while ($t1.moveNext()) {
                var item = $t1.getCurrent();
                Bridge.get(console).log("Light: " + item.key());

                $t2 = Bridge.getEnumerator(item);
                while ($t2.moveNext()) {
                    var p = $t2.getCurrent();
                    Bridge.get(console).log("    - " + p.getCommon());
                }
            }


        }
    }
});

Bridge.init();