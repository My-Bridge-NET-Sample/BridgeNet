/* global Bridge */

"use strict";

Bridge.define('DemoBridgeApp.Test', {
    statics: {
        config: {
            init: function () {
                Bridge.ready(this.runTests);
            }
        },
        runTests: function () {
            Bridge.get(QUnit).test("Test1", Bridge.get(DemoBridgeApp.Test).test1);
        },
        test1: function (assert) {
            assert.expect(1);
            assert.deepEqual(true, "1 == 1");
        }
    }
});



Bridge.init();