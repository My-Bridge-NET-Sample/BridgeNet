/// <reference path="./bridge.d.ts" />

declare module DemoBridgeApp {
    export interface Test {
    }
    export interface TestFunc extends Function {
        prototype: Test;
        new (): Test;
        runTests(): void;
        test1(assert: Bridge.QUnit.Assert): void;
    }
    var Test: TestFunc;

    export interface App {
    }
    export interface AppFunc extends Function {
        prototype: App;
        Plant: App.PlantFunc;
        Plants: App.PlantsFunc;
        new (): App;
        main(): void;
    }
    var App: AppFunc;
    module App {
        export interface Plant {
            getCommon(): string;
            setCommon(value: string): void;
            getLight(): string;
            setLight(value: string): void;
            getIndoor(): boolean;
            setIndoor(value: boolean): void;
        }
        export interface PlantFunc extends Function {
            prototype: Plant;
            new (): Plant;
        }

        export interface Plants {
        }
        export interface PlantsFunc extends Function {
            prototype: Plants;
            new (): Plants;
            getFlowers(): Bridge.List$1<DemoBridgeApp.App.Plant>;
        }
    }
}