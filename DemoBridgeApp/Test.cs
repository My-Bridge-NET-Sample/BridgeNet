namespace DemoBridgeApp
{
    using Bridge;
    using Bridge.Html5;
    using Bridge.QUnit;

    [FileName("../samples/qunit/output/test.js")]
    public class Test
    {
        [Ready]
        public static void RunTests()
        {
            QUnit.Test("Test1", Test.Test1);
        }

        private static void Test1(Assert assert)
        {
            assert.Expect(1);
            assert.DeepEqual(1 == 1, "1 == 1");
        }
    }
}
